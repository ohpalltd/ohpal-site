import { NextResponse } from 'next/server';

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

    // --- INTEGRATION LOGIC GOES HERE ---
    
    // Simulate Email Sending (REPLACE WITH REAL EMAIL CLIENT LOGIC)
    /*
    // Example using a nodemailer/resend client (requires library installation and setup)
    await emailClient.sendMail({
      from: 'noreply@yourdomain.com', // Must be a verified sender
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
    */

    // 3. Log the lead to your CRM (e.g., call the Airtable API, as defined in api_spec.md)
    // ------------------------------------

    console.log(`Received contact submission and notified ${ADMIN_EMAIL}:`, { name, email, message });

    // Assuming successful processing:
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
      { message: 'An internal server error occurred.' }, 
      { status: 500 }
    );
  }
}

// Optional: Define a GET handler, though usually not needed for a contact form.
export async function GET() {
  return NextResponse.json({ message: "Contact API endpoint is active." }, { status: 200 });
}
