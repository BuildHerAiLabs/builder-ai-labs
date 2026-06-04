import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      occupation,
      aiInterest,
      message,
    } = await req.json()

    const { error } = await supabase
      .from("community_members")
      .insert({
        name,
        email,
        occupation,
        ai_interest: aiInterest,
        message,
      })

    if (error) {
      throw error
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_USER,
     to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: "New BuildHer AI Community Signup",
      html: `
        <h2>New Community Signup</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Occupation:</b> ${occupation}</p>

        <p><b>AI Interest:</b></p>
        <p>${aiInterest}</p>

        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({
      success: true,
    })
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process signup",
      },
      {
        status: 500,
      }
    )
  }
}