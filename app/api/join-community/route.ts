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

        const normalizedFields = {
            name: typeof name === "string" ? name.trim() : "",
            email: typeof email === "string" ? email.trim() : "",
            occupation: typeof occupation === "string" ? occupation.trim() : "",
            aiInterest: typeof aiInterest === "string" ? aiInterest.trim() : "",
            message: typeof message === "string" ? message.trim() : "",
        }

        const missingField = Object.entries(normalizedFields).find(([, value]) => !value)?.[0]

        if (missingField) {
            return NextResponse.json(
                {
                    success: false,
                    error: `${missingField} is required`,
                },
                {
                    status: 400,
                }
            )
        }

        const { error } = await supabase
            .from("community_members")
            .insert({
                name: normalizedFields.name,
                email: normalizedFields.email,
                occupation: normalizedFields.occupation,
                ai_interest: normalizedFields.aiInterest,
                message: normalizedFields.message,
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
            replyTo: normalizedFields.email,
            subject: "New BuildHer AI Community Signup",
            html: `
        <h2>New Community Signup</h2>

                <p><b>Name:</b> ${normalizedFields.name}</p>
                <p><b>Email:</b> ${normalizedFields.email}</p>
                <p><b>Occupation:</b> ${normalizedFields.occupation}</p>

        <p><b>AI Interest:</b></p>
                <p>${normalizedFields.aiInterest}</p>

        <p><b>Message:</b></p>
                <p>${normalizedFields.message}</p>
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