"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, message } = data;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return {
      success: false,
      error:
        "Bitte füllt alle Felder aus und stimmt den Datenschutzbestimmungen zu.",
    };
  }

  try {
    await resend.emails.send({
      from: `Sorgenfrei Bauen Kontakt <kontakt@sorgenfreibauen.de>`,
      to: [
        process.env.CONTACT_RECEIVER_EMAIL ||
          "michael.wiggenhauser@elkhaus.de",
      ],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1f140d; background-color: #fcfbfb; border-radius: 12px; border: 1px solid rgba(31,20,13,0.06);">
          <h2 style="margin: 0 0 20px; font-size: 18px; color: #1f140d; border-bottom: 2px solid rgba(31,20,13,0.06); padding-bottom: 12px;">
            Neue Anfrage über das Kontaktformular
          </h2>
          <p style="margin: 8px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0; font-size: 14px;"><strong>E-Mail:</strong> <a href="mailto:${email}" style="color: #1f140d;">${email}</a></p>
          <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border: 1px solid rgba(31,20,13,0.04);">
            <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-line;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #737373; margin-top: 32px; border-top: 1px solid rgba(31,20,13,0.06); padding-top: 12px;">
            Diese E-Mail wurde automatisch über das Kontaktformular auf sorgenfreibauen.de generiert.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "E-Mail konnte nicht gesendet werden.";
    console.error("Resend error:", errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}
