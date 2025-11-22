// examples/blog-starter/src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// escape HTML so nobody breaks your email formatting
function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, s => (
    {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[s] as string
  ));
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // set true ONLY if using port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || '')}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px">${escapeHtml(
          message
        )}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: `"Ohpal Website" <${process.env.SMTP_USER}>`,
      to: 'admin@ohpalltd.com',
      subject: `New contact form submission — ${name}`,
      replyTo: email,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
