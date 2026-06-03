import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, occupation, aiInterest, message } = await req.json()

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, error: "Missing RESEND_API_KEY" },
      { status: 500 }
    )
  }

  if (!email) {
    return NextResponse.json(
      { success: false, error: "Email is required" },
      { status: 400 }
    )
  }

  const from = process.env.RESEND_FROM_EMAIL || "BuildHer AI <onboarding@resend.dev>"
  const to = process.env.CONTACT_EMAIL || "hello@buildherai-labs.com"

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: "New Community Signup",
    text: [
      `Name: ${name || "Not provided"}`,
      `Email: ${email}`,
      `Occupation: ${occupation || "Not provided"}`,
      `AI Interest: ${aiInterest || "Not provided"}`,
      `Message: ${message || "Not provided"}`,
    ].join("\n\n"),
  })

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}