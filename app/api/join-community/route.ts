import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import nodemailer from "nodemailer"

function getEnvValue(...keys: string[]) {
    for (const key of keys) {
        const value = process.env[key]?.trim()

        if (value) {
            return value.replace(/^"|"$/g, "")
        }
    }

    return undefined
}

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

        const smtpHost = getEnvValue("SMTP_HOST")
        const smtpPort = Number(getEnvValue("SMTP_PORT") || "587")
        const smtpUser = getEnvValue("SMTP_USER")
        const smtpPass = getEnvValue("SMTP_PASS")
        const recipientEmail = getEnvValue("CONTACT_EMAIL", "SMTP_USER", "EMAIL_USER")

        if (!smtpHost || !smtpUser || !smtpPass) {
            throw new Error("Missing SMTP configuration")
        }

        if (!recipientEmail) {
            throw new Error("Missing recipient email configuration")
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: false,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        })

        await transporter.sendMail({
            from: smtpUser,
            to: recipientEmail,
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