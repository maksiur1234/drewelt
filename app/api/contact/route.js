import formidable from "formidable";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import { Readable } from "stream";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseForm(req) {
  const form = formidable({ multiples: false });

  const bufferChunks = [];

  const reader = req.body.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bufferChunks.push(Buffer.from(value));
  }

  const buffer = Buffer.concat(bufferChunks);

  const readable = new Readable();
  readable._read = () => {};
  readable.push(buffer);
  readable.push(null);
  readable.headers = {
    "content-type": req.headers.get("content-type"),
    "content-length": buffer.length.toString(),
  };

  return new Promise((resolve, reject) => {
    form.parse(readable, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(req) {
  try {
    const data = await parseForm(req);

    const { name, email, phone, message, rodo } = data.fields;
    const files = data.files.attachment || [];

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "IP unknown";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.originalFilename || "plik",
        content: await fs.readFile(file.filepath),
      }))
    );

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <div style="background: #0070f3; padding: 20px; text-align: center;">
            <h2 style="margin: 0; color: #ffffff; font-size: 24px;">Nowa wiadomość z formularza</h2>
          </div>
          <div style="padding: 20px; color: #333333; line-height: 1.5;">
            <p style="margin: 0 0 10px;"><strong>Imię i nazwisko:</strong> ${name}</p>
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px;"><strong>Telefon:</strong> ${phone}</p>
            <p style="margin: 0 0 10px;"><strong>Adres IP nadawcy:</strong> ${ip}</p>
            <p style="margin: 0 0 10px;"><strong>RODO zaakceptowane:</strong> ${rodo ? "Tak" : "Nie"}</p>
            <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;">
            <h2 style="margin: 0; font-size: 24px;">Treść wiadomości:</h2>
            <p style="margin: 0; font-size: 16px;">${message}</p>
          </div>
          <div style="background: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #888888;">
            <p style="margin: 0;">Wiadomość wysłana za pomocą formularza kontaktowego.</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "Nowa wiadomość z formularza kontaktowego",
      html: htmlTemplate,
      attachments,
      replyTo: email,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Wysłano" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Błąd w API kontakt:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Błąd podczas wysyłania formularza" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

