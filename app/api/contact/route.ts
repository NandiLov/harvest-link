import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    // Get API key safely
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND API key missing" },
        { status: 500 }
      );
    }

    // Create Resend only after checking key
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Harvest Link Farms <onboarding@resend.dev>",
      to: ["nandilamul@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json({
      success: true
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
