import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      origin,
      destination,
      tripType,
      departureDate,
      returnDate,
      adults,
      children,
      childAges,
      infants,
      cabinClass,
      phone,
      callTime
    } = body;

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

    // Helper function to format dates
    const formatDate = (dateStr: string) => {
      if (!dateStr) return "Not specified";
      const date = new Date(dateStr + "T00:00:00");
      return date.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" });
    };

    // Helper function to format cabin class
    const cabinClassLabels: Record<string, string> = {
      economy: "Economy",
      premium: "Premium Economy",
      business: "Business Class",
      first: "First Class"
    };

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
    .section { margin-bottom: 25px; }
    .section-title { font-size: 16px; font-weight: bold; color: #0f49bd; margin-bottom: 10px; border-bottom: 2px solid #0f49bd; padding-bottom: 5px; }
    .field { margin-bottom: 12px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 3px; color: #111; }
    .footer { text-align: center; color: #666; font-size: 12px; padding: 20px; }
    .highlight { background: #fff3cd; padding: 2px 6px; border-radius: 3px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✈️ New Lead from TickToFly Website</h1>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">👤 Customer Information</div>
        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${name || "Not provided"}</div>
        </div>
        <div class="field">
          <div class="label">Phone Number:</div>
          <div class="value"><span class="highlight">+1 ${phone}</span></div>
        </div>
        ${email ? `
        <div class="field">
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${email}">${email}</a></div>
        </div>
        ` : ""}
        <div class="field">
          <div class="label">Preferred Call Time:</div>
          <div class="value">${callTime || "Not specified"}</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">🛫 Flight Details</div>
        <div class="field">
          <div class="label">Trip Type:</div>
          <div class="value">${tripType === "roundtrip" ? "Round-trip" : "One-way"}</div>
        </div>
        <div class="field">
          <div class="label">Flying From:</div>
          <div class="value">${origin}</div>
        </div>
        <div class="field">
          <div class="label">Destination:</div>
          <div class="value">${destination}</div>
        </div>
        <div class="field">
          <div class="label">Departure Date:</div>
          <div class="value">${formatDate(departureDate)}</div>
        </div>
        ${tripType === "roundtrip" ? `
        <div class="field">
          <div class="label">Return Date:</div>
          <div class="value">${formatDate(returnDate)}</div>
        </div>
        ` : ""}
      </div>

      <div class="section">
        <div class="section-title">👥 Travelers</div>
        <div class="field">
          <div class="label">Adults:</div>
          <div class="value">${adults || 0}</div>
        </div>
        <div class="field">
          <div class="label">Children:</div>
          <div class="value">${children || 0}${children > 0 && childAges?.length > 0 ? ` (Ages: ${childAges.join(", ")})` : ""}</div>
        </div>
        <div class="field">
          <div class="label">Infants:</div>
          <div class="value">${infants || 0}</div>
        </div>
        <div class="field">
          <div class="label"><strong>Total Travelers:</strong></div>
          <div class="value"><strong>${(adults || 0) + (children || 0) + (infants || 0)}</strong></div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">💺 Cabin Class</div>
        <div class="field">
          <div class="value">${cabinClassLabels[cabinClass] || cabinClass || "Not specified"}</div>
        </div>
      </div>

      <div class="section">
        <div class="field">
          <div class="label">Submitted:</div>
          <div class="value">${new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    })} (ET)</div>
        </div>
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
CUSTOMER INFORMATION
========================

Name: ${name || "Not provided"}
Phone Number: +1 ${phone}${email ? `
Email: ${email}` : ""}
Preferred Call Time: ${callTime || "Not specified"}

========================
FLIGHT DETAILS
========================

Trip Type: ${tripType === "roundtrip" ? "Round-trip" : "One-way"}
Flying From: ${origin}
Destination: ${destination}
Departure Date: ${formatDate(departureDate)}${tripType === "roundtrip" ? `
Return Date: ${formatDate(returnDate)}` : ""}

========================
TRAVELERS
========================

Adults: ${adults || 0}
Children: ${children || 0}${children > 0 && childAges?.length > 0 ? ` (Ages: ${childAges.join(", ")})` : ""}
Infants: ${infants || 0}
Total Travelers: ${(adults || 0) + (children || 0) + (infants || 0)}

========================
CABIN CLASS
========================

${cabinClassLabels[cabinClass] || cabinClass || "Not specified"}

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
    console.log(`Customer: ${name || "Not provided"}`);
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
