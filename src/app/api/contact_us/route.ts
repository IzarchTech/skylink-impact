import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactUsSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Valid email required" }),
  serviceRequest: z.string(),
  message: z.optional(z.string()),
  subject: z.optional(z.string()),
});

export async function POST(request: NextRequest) {
  const form = contactUsSchema.safeParse(await request.json());

  if (!form.success) {
    return NextResponse.json(form.error.format(), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "127.0.0.1",
    port: 1025,
  });

  const info = await transporter.sendMail({
    from: "no-reply@skylinkimpact.com",
    to: form.data.email,
    subject: form.data.subject ?? "Service request",
    text: form.data.message ?? "Message",
  });
  return NextResponse.json({ message: info.response });
}
