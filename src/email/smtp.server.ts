import nodemailer, { type Transporter } from "nodemailer";
import { getEnv } from "@/server/env.server";

export class EmailNotConfiguredError extends Error {
  constructor() {
    super("SMTP is not configured (SMTP_HOST / SMTP_PORT / SMTP_FROM_EMAIL missing)");
  }
}

let transporter: Transporter | undefined;

export function getTransporter(): Transporter {
  const env = getEnv();
  if (!env.SMTP_HOST || !env.SMTP_PORT || !env.SMTP_FROM_EMAIL) throw new EmailNotConfiguredError();
  transporter ??= nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE ?? env.SMTP_PORT === 465,
    auth: env.SMTP_USER ? { user: env.SMTP_USER, pass: env.SMTP_PASSWORD } : undefined,
  });
  return transporter;
}
