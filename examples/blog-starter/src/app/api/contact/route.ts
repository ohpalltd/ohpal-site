// examples/blog-starter/src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'           // ensure Node runtime (nodemailer needs it)
export const dynamic = 'force-dynamic'    // route runs dynamically

type Body = {
  name?: string
  phone?: string
  email?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json()

    const name = (body.name || '').trim()
    const phone = (body.phone || '').trim()
    const email = (body.email || '').trim()
    const message = (body.message || '').trim()

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    // configure transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: !!(process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Contact number:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px">${escapeHtml(message)}</pre>
      </div>
    `

    await transporter.sendMail({
      from: `"Ohpal Website" <no-reply@ohpalltd.com>`,
      to: 'admin@ohpalltd.com',
      replyTo: email,
      subject: `New contact form submission — ${name}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[contact route] error:', e)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s] as string))
}
