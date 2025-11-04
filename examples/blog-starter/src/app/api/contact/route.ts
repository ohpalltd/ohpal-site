// examples/blog-starter/src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';     // ensure Node runtime on Render
export const dynamic = 'force-dynamic';

type Payload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

// We use a tiny inline call to Resend's REST API to avoid extra deps
async function sendWithResend(to: string, subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('Missing RESEND_API_KEY');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // If your domain isn't verified yet, keep this sender for testing:
      from: 'Ohpal <onboarding@resend.dev>',
      to: [to],
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Resend error: ${t}`);
  }
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;

    const name = (data.name || '').slice(0, 200);
    const phone = (data.phone || '').slice(0, 80);
    const email = (data.email || '').slice(0, 200);
    const message = (data.message || '').slice(0, 2000);

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5">
        <h2>New contact message</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
      </div>
    `;

    await sendWithResend('admin@ohpalltd.com', 'Ohpal contact form', html);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    // surface minimal info to client
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
