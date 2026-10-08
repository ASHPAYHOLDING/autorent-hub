import { getEnv } from "@/server/env.server";
import { getTransporter } from "./smtp.server";

export type EmailMessage = { to: string; subject: string; text: string; html: string };

/** Sends through SMTP. Throws if SMTP is not configured — never pretends to send. */
export async function sendEmail(msg: EmailMessage): Promise<void> {
  const env = getEnv();
  await getTransporter().sendMail({
    from: { name: env.SMTP_FROM_NAME, address: env.SMTP_FROM_EMAIL! },
    ...msg,
  });
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export function actionEmail(opts: { title: string; body: string; cta: string; url: string }) {
  const html = `<!doctype html><html lang="ar" dir="rtl"><body style="font-family:Tahoma,Arial,sans-serif;background:#f6f7f5;padding:24px">
<div style="max-width:520px;margin:auto;background:#fff;border-radius:16px;padding:28px">
<h2 style="margin:0 0 12px">${escape(opts.title)}</h2><p style="line-height:1.8">${escape(opts.body)}</p>
<p><a href="${escape(opts.url)}" style="display:inline-block;background:#0f6b4f;color:#fff;padding:12px 22px;border-radius:10px;text-decoration:none">${escape(opts.cta)}</a></p>
<p style="color:#777;font-size:12px">إذا لم تطلب ذلك فتجاهل هذه الرسالة.</p></div></body></html>`;
  return { html, text: `${opts.title}\n\n${opts.body}\n\n${opts.url}` };
}
