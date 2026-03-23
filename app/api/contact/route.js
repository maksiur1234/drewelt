import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const formData = await req.formData()

    const name = formData.get('name') || ''
    const email = formData.get('email') || ''
    const phone = formData.get('phone') || ''
    const city = formData.get('city') || ''
    const postal = formData.get('postal') || ''
    const message = formData.get('message') || ''

    const files = formData
      .getAll('attachment')
      .filter((file) => file && typeof file === 'object' && 'arrayBuffer' in file && file.size > 0)

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      req.headers.get('x-real-ip') ||
      'IP unknown'

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const attachments = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer()

        return {
          filename: file.name || 'plik',
          content: Buffer.from(bytes),
          contentType: file.type || 'application/octet-stream',
        }
      })
    )

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <div style="background: #0070f3; padding: 20px; text-align: center;">
            <h2 style="margin: 0; color: #ffffff; font-size: 24px;">Nowa wiadomość z formularza</h2>
          </div>
          <div style="padding: 20px; color: #333333; line-height: 1.5;">
            <p><strong>Imię i nazwisko:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Adres:</strong> ${city} - ${postal}</p>
            <p><strong>Adres IP nadawcy:</strong> ${ip}</p>
            <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;">
            <h2 style="margin: 0; font-size: 24px;">Treść wiadomości:</h2>
            <p style="margin: 0; font-size: 16px;">${message}</p>
          </div>
          <div style="background: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #888888;">
            <p style="margin: 0;">Wiadomość wysłana za pomocą formularza kontaktowego.</p>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: 'Nowa wiadomość z formularza kontaktowego',
      html: htmlTemplate,
      attachments,
      replyTo: email,
    })

    return Response.json({ success: true, message: 'Wysłano' }, { status: 200 })
  } catch (error) {
    console.error('Błąd w API kontakt:', error)

    return Response.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Błąd podczas wysyłania formularza',
      },
      { status: 500 }
    )
  }
}