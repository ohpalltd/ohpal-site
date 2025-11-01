import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// === NEXT.JS BUILD CONFIGURATION ===
// This line is essential for preventing timeout during static build:
// It tells Next.js NOT to pre-render this route at build time.
export const dynamic = 'force-dynamic'; 

// 2. CONFIGURE the transporter using environment secrets (set these in Render)
const transporter = nodemailer.createTransport({
  // Use a common service like SendGrid, Resend, or your company's SMTP server
  // It is generally safer to initialize the transporter outside the handler 
  // but rely on environment variables being present when the app runs.
  service: process.env.EMAIL_SERVICE || 'smtp', // e.g., 'gmail', 'Outlook', or a custom server name
  auth: {
    user: process.env.EMAIL_USER, // Your email account username/API Key
    pass: process.env.EMAIL_PASS, // Your email password/Secret Key
  },
});

/**
 * Handles POST requests to /api/contact
 * This function would typically process data from a contact form,
 * send an email, and log the submission to a CRM (like Airtable).
 */
export async function POST(request: Request) {
  try {
    // 1. Get JSON data from the incoming request
    const data = await request.json();
    const { name, email, message } = data;
    
    // Target Admin Email
    const ADMIN_EMAIL = 'admin@ohpalltd.com';

    // 2. Validate essential input (Basic validation)
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields: name, email, and message are mandatory.' },
        { status: 400 }
      );
    }

    // 3. SEND EMAIL NOTIFICATION TO ADMIN
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@ohpalltd.com', // Verified sender email
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Contact from Website</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="border: 1px solid #ccc; padding: 10px;">${message}</div>
      `,
    });

    console.log(`Received contact submission and notified ${ADMIN_EMAIL}.`);

    // 4. Return success message to the user's browser
    return NextResponse.json(
      { 
        message: 'Thank you for your message, our team will be in contact with you.', 
        data: { name, email } 
      }, 
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form submission:', error);
    
    // Return a 500 Internal Server Error response
    return NextResponse.json(
      { message: 'An internal server error occurred while processing the request.' }, 
      { status: 500 }
    );
  }
}

// Optional: Define a GET handler, though usually not needed for a contact form.
export async function GET() {
  return NextResponse.json({ message: "Contact API endpoint is active." }, { status: 200 });
}
