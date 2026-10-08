import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { getDb } from "@/db/client.server";
import * as schema from "@/db/schema";
import { getEnv } from "@/server/env.server";
import { actionEmail, sendEmail } from "@/email/email.server";

function createAuth() {
  const env = getEnv();
  const isProd = env.NODE_ENV === "production";
  return betterAuth({
    appName: "ASH CAR",
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    basePath: "/api/auth",
    trustedOrigins: [env.APP_URL, ...env.TRUSTED_ORIGINS.split(",").map((s) => s.trim()).filter(Boolean)],
    database: drizzleAdapter(getDb(), {
      provider: "pg",
      schema: {
        user: schema.user,
        session: schema.session,
        account: schema.account,
        verification: schema.verification,
        rateLimit: schema.rateLimit,
      },
    }),
    user: { additionalFields: { lastLoginAt: { type: "date", required: false, input: false } } },
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: true,
      minPasswordLength: 10,
      maxPasswordLength: 128,
      revokeSessionsOnPasswordReset: true,
      resetPasswordTokenExpiresIn: 60 * 30,
      sendResetPassword: async ({ user, url }) => {
        const m = actionEmail({
          title: "استعادة كلمة المرور",
          body: "تلقينا طلباً لإعادة تعيين كلمة مرور حسابك في أش كار. الرابط صالح لمدة ٣٠ دقيقة.",
          cta: "تعيين كلمة مرور جديدة",
          url,
        });
        await sendEmail({ to: user.email, subject: "استعادة كلمة المرور — أش كار", ...m });
      },
    },
    emailVerification: {
      sendOnSignUp: true,
      autoSignInAfterVerification: true,
      expiresIn: 60 * 60 * 24,
      sendVerificationEmail: async ({ user, url }) => {
        const m = actionEmail({
          title: "تأكيد البريد الإلكتروني",
          body: "مرحباً بك في أش كار. أكّد بريدك لتفعيل حساب مكتبك.",
          cta: "تأكيد البريد",
          url,
        });
        await sendEmail({ to: user.email, subject: "تأكيد بريدك — أش كار", ...m });
      },
    },
    session: {
      expiresIn: 60 * 60 * 24 * 7,
      updateAge: 60 * 60 * 24,
      freshAge: 60 * 15,
    },
    rateLimit: {
      enabled: true,
      storage: "database",
      window: 60,
      max: 60,
      customRules: {
        "/sign-in/email": { window: 60, max: 5 },
        "/sign-up/email": { window: 60, max: 3 },
        "/request-password-reset": { window: 300, max: 3 },
        "/send-verification-email": { window: 300, max: 3 },
      },
    },
    advanced: {
      useSecureCookies: isProd,
      cookiePrefix: "ashcar",
      defaultCookieAttributes: { httpOnly: true, sameSite: "lax", secure: isProd },
      crossSubDomainCookies: env.COOKIE_DOMAIN ? { enabled: true, domain: env.COOKIE_DOMAIN } : undefined,
      ipAddress: { ipAddressHeaders: ["x-forwarded-for", "x-real-ip"] },
    },
    databaseHooks: {
      session: {
        create: {
          after: async (s) => {
            const { eq } = await import("drizzle-orm");
            await getDb().update(schema.user).set({ lastLoginAt: new Date() }).where(eq(schema.user.id, s.userId));
          },
        },
      },
    },
    plugins: [tanstackStartCookies()],
  });
}

let instance: ReturnType<typeof createAuth> | undefined;
export function getAuth() {
  instance ??= createAuth();
  return instance;
}
