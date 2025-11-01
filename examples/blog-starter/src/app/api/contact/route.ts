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

    // --- INTEGRATION LOGIC GOES HERE ---
    // In a real application, you would add logic here to:
    // 1. Validate the input (name, email, message are not empty)
    // 2. Send the email using a service like SendGrid, Resend, or Nodemailer
    // 3. Log the lead to your CRM (e.g., call the Airtable API, as defined in api_spec.md)
    // ------------------------------------

    console.log('Received contact submission:', { name, email, message });

    // Assuming successful processing:
    return NextResponse.json(
      { 
        message: 'Submission successful. We will contact you soon.', 
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
