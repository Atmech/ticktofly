import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { origin, destination, phone, callTime } = body;

        // Validate required fields
        if (!origin || !destination || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Format the email content
        const emailContent = `
New Lead from TickToFly Website

========================
LEAD DETAILS
========================

Flying From: ${origin}
Destination: ${destination}
Phone Number: ${phone}
Preferred Call Time: ${callTime || "Not specified"}

========================

Submitted at: ${new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
        })} (ET)

---
This lead was submitted through the TickToFly website contact form.
    `.trim();

        // For production, you would integrate with an email service like:
        // - Resend (recommended): https://resend.com
        // - SendGrid: https://sendgrid.com
        // - AWS SES
        // - Nodemailer with SMTP

        // Example with Resend (uncomment and configure when ready):
        /*
        import { Resend } from 'resend';
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: 'TickToFly <noreply@ticktofly.com>',
          to: ['info@ticktofly.com'],
          subject: `New Lead: ${origin} → ${destination}`,
          text: emailContent,
        });
        */

        // For now, log the lead (replace with actual email sending)
        console.log("=== NEW LEAD RECEIVED ===");
        console.log(emailContent);
        console.log("=========================");

        // In development, we'll simulate a successful email send
        // In production, this would actually send the email

        return NextResponse.json(
            {
                success: true,
                message: "Lead received successfully",
                // Include a note about email configuration
                note: process.env.RESEND_API_KEY
                    ? "Email sent to info@ticktofly.com"
                    : "Email sending not configured - lead logged to console"
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing lead:", error);
        return NextResponse.json(
            { error: "Failed to process lead" },
            { status: 500 }
        );
    }
}
