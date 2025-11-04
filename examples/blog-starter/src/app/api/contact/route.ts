// examples/blog-starter/src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';       // ensure Node (not edge)
export const dynamic = 'force-dynamic';

type Payload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>;
    const name = (body.name || '').trim();
    const phone = (body.phone || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }

    // SMTP config from env
    const {
      SMTP_HOST = '',
      SMTP_PORT = '',
      SMTP_USER = '',
      SMTP_PASS = '',
      FROM_EMAIL = 'no-reply@ohpalltd.com',
      TO_EMAIL = 'admin@ohpalltd.com'
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing SMTP env vars. Check Render settings.');
      return NextResponse.json({ ok: false, error: 'Server email not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false otherwise
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111">
        <h2 style="margin:0 0 8px">New website enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('CONTACT ERROR', err);
    return NextResponse.json({ ok: false, error: 'Failed to send' }, { status: 500 });
  }
}
