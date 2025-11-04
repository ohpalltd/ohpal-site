// examples/blog-starter/src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'         // ensure Node runtime (required for nodemailer)
export const dynamic = 'force-dynamic'  // don’t cache this route

type Payload = {
  name?: string
  phone?: string
  email?: string
  message?: string
}

function required(v?: string) {
  return typeof v === 'string' && v.trim().length > 0
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload
    const name = body.name?.trim()
    const phone = body.phone?.trim()
    const email = body.email?.trim()
    const message = body.message?.trim()

    if (!required(name) || !required(email) || !required(message)) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    // Transporter (Gmail via SMTP + app password)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 465),
      secure: Number(process.env.EMAIL_PORT || 465) === 465, // true for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const to = process.env.TO_EMAIL || process.env.EMAIL_USER
    const subject = `Ohpal contact: ${name}`
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '-'}`,
      ``,
      `Message:`,
      `${message}`,
    ].join('\n')

    const html = `
      <div style="font-family:Arial, Helvetica, sans-serif;line-height:1.6;font-size:14px;color:#111">
        <h2 style="margin:0 0 8px 0">New message from Ohpal website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name!)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email!)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || '-')}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:12px 0" />
        <p style="white-space:pre-wrap">${escapeHtml(message!)}</p>
      </div>
    `

    await transporter.sendMail({
      from: `"Ohpal Website" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
      replyTo: email, // so you can click Reply and it goes to the sender
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('CONTACT_API_ERROR', err)
    return NextResponse.json(
      { ok: false, error: 'Failed to send' },
      { status: 500 }
    )
  }
}

// tiny helper to avoid broken HTML if users paste special chars
function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
