import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'daily_reminder@michael-pollan.app',
      to: ["eggnog.wahab@gmail.com"],

      //to: ["eggnog.wahab@gmail.com", "renafkaufman@gmail.com", "goutham.patnaik@gmail.com", "farahwahab4@gmail.com"],
      subject: "Daily attempt at reconcilation or collcting a debt from 2025-2085",
      react: EmailTemplate({ firstName: "rena kaufman" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}