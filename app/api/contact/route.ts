import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, organization, subject, message } = body

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            )
        }

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_EMAIL_RECEIVER,
            subject: `Contact Form: ${subject}`,
            text: `
Name: ${name}
Email: ${email}
Organization: ${organization || "N/A"}
Subject: ${subject}

Message:
${message}
            `,
            html: `
<h3>New Contact Message</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Organization:</strong> ${organization || "N/A"}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        }

        await transporter.sendMail(mailOptions)

        console.log("Contact email sent successfully:", { name, email, subject })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error sending contact email:", error)
        return NextResponse.json(
            { message: "Server error while sending email" },
            { status: 500 }
        )
    }
}
