import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Email credentials not configured in .env.local");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create transporter with Zoho SSL settings (port 465)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.zoho.com",
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true, // SSL connection for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0f49bd; color: white; padding: 20px; text-align: center; }
    .content { background: #f8f9fa; padding: 30px; margin: 20px 0; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0f49bd; }
    .value { margin-top: 5px; }
    .footer { text-align: center; color: #666; font-size: 12px; padding: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✈️ New Lead from TickToFly Website</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Flying From:</div>
        <div class="value">${origin}</div>
      </div>
      <div class="field">
        <div class="label">Destination:</div>
        <div class="value">${destination}</div>
      </div>
      <div class="field">
        <div class="label">Phone Number:</div>
        <div class="value">${phone}</div>
      </div>
      <div class="field">
        <div class="label">Preferred Call Time:</div>
        <div class="value">${callTime || "Not specified"}</div>
      </div>
      <div class="field">
        <div class="label">Submitted:</div>
        <div class="value">${new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    })} (ET)</div>
      </div>
    </div>
    <div class="footer">
      <p>This lead was submitted through the TickToFly website contact form.</p>
      <p>Please follow up as soon as possible.</p>
    </div>
  </div>
</body>
</html>
    `;

    const emailText = `
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
Please follow up as soon as possible.
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `"TickToFly Lead" <${process.env.EMAIL_USER}>`,
      to: "info@ticktofly.com",
      subject: `New Lead: ${origin} → ${destination}`,
      text: emailText,
      html: emailHtml,
    });

    console.log("✅ Lead email sent successfully");
    console.log(`From: ${origin} → To: ${destination}`);
    console.log(`Contact: ${phone}`);

    return NextResponse.json(
      {
        success: true,
        message: "Lead received and email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process lead. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
