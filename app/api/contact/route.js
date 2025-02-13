import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "IP unknown";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <div style="background: #0070f3; padding: 20px; text-align: center;">
            <h2 style="margin: 0; color: #ffffff; font-size: 24px;">Nowa wiadomość z formularza</h2>
          </div>
          <div style="padding: 20px; color: #333333; line-height: 1.5;">
            <p style="margin: 0 0 10px;"><strong>Imię i nazwisko:</strong> ${data.name}</p>
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 0 0 10px;"><strong>Telefon:</strong> ${data.phone}</p>
            <p style="margin: 0 0 10px;"><strong>Adres IP nadawcy:</strong> ${ip}</p>
            <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;">
            <h2 style="margin: 0; font-size: 24px;">Treść wiadomości:</h2>
            <p style="margin: 0; font-size: 16px;">${data.message}</p>
          </div>
          <div style="background: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #888888;">
            <p style="margin: 0;">Wiadomość wysłana za pomocą formularza kontaktowego.</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "Nowa wiadomość z formularza kontaktowego",
      html: htmlTemplate,
    });

    return NextResponse.json({
      success: true,
      message: "Wiadomość została wysłana!",
    });
  } catch (error) {
    console.error("Błąd przy wysyłce maila:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
