import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

type ContactPayload = {
  formType?: string;
  name?: string;
  email?: string;
  phone?: string;
  origin?: string;
  destination?: string;
  service?: string;
  volume?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function hasSmtpConfig() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_FROM &&
      process.env.CONTACT_TO,
  );
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const message = clean(payload.message);

  if (!name || !email || !message || !email.includes("@")) {
    return NextResponse.json(
      { error: "Naam, e-mail en bericht zijn verplicht." },
      { status: 400 },
    );
  }

  const fields = {
    "Form type": clean(payload.formType) || "contact",
    Name: name,
    Email: email,
    Phone: clean(payload.phone),
    Origin: clean(payload.origin),
    Destination: clean(payload.destination),
    Service: clean(payload.service),
    Volume: clean(payload.volume),
    Message: message,
  };

  const body = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  if (!hasSmtpConfig()) {
    console.info("Contactformulier ontvangen zonder SMTP-configuratie:\n", body);
    return NextResponse.json({
      ok: true,
      delivered: false,
      message: `Bericht ontvangen. Configureer SMTP-variabelen om ${site.email} te mailen.`,
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `${site.name} ${fields["Form type"]} aanvraag van ${name}`,
    text: body,
  });

  return NextResponse.json({ ok: true, delivered: true });
}
