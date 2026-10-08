import { z } from "zod";

/**
 * Server-only environment. Read lazily (inside handlers) — never at module
 * scope in client-reachable code. Values are never logged.
 */
const bool = z
  .enum(["true", "false", "1", "0"])
  .transform((v) => v === "true" || v === "1");

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  HOST: z.string().default("0.0.0.0"),
  PORT: z.coerce.number().int().positive().default(3000),
  APP_URL: z.string().url(),
  TRUSTED_ORIGINS: z.string().default(""),

  DATABASE_URL: z.string().startsWith("postgres"),
  DB_POOL_MIN: z.coerce.number().int().min(0).default(0),
  DB_POOL_MAX: z.coerce.number().int().positive().default(10),

  BETTER_AUTH_SECRET: z.string().min(32, "BETTER_AUTH_SECRET must be at least 32 chars"),
  BETTER_AUTH_URL: z.string().url(),
  COOKIE_DOMAIN: z.string().optional(),

  FIELD_ENCRYPTION_KEY: z.string().min(32, "FIELD_ENCRYPTION_KEY must be at least 32 chars"),
  IP_HASH_SECRET: z.string().min(32, "IP_HASH_SECRET must be at least 32 chars"),

  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().int().positive().optional(),
  SMTP_SECURE: bool.optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_FROM_NAME: z.string().default("ASH CAR"),
  SMTP_FROM_EMAIL: z.string().email().optional(),

  S3_ENDPOINT: z.string().url().optional(),
  S3_REGION: z.string().default("us-east-1"),
  S3_BUCKET_PRIVATE: z.string().optional(),
  S3_ACCESS_KEY: z.string().optional(),
  S3_SECRET_KEY: z.string().optional(),
  S3_FORCE_PATH_STYLE: bool.optional(),
  S3_SIGNED_URL_TTL_SECONDS: z.coerce.number().int().positive().default(300),

  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
});

export type ServerEnv = z.infer<typeof schema>;

const WEAK = /^(changeme|secret|password|test|example|x+)$/i;

export function parseEnv(source: Record<string, string | undefined>): ServerEnv {
  const result = schema.safeParse(source);
  if (!result.success) {
    // Report variable NAMES only, never values.
    const names = result.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`);
    throw new Error(`Invalid server environment:\n- ${names.join("\n- ")}`);
  }
  const env = result.data;
  if (env.NODE_ENV === "production") {
    for (const key of ["BETTER_AUTH_SECRET", "FIELD_ENCRYPTION_KEY", "IP_HASH_SECRET"] as const) {
      if (WEAK.test(env[key])) throw new Error(`${key} is a weak placeholder value`);
    }
    if (!env.APP_URL.startsWith("https://")) throw new Error("APP_URL must be https in production");
  }
  for (const key of Object.keys(source)) {
    if (key.startsWith("VITE_") && /SECRET|PASSWORD|KEY|DATABASE/i.test(key)) {
      throw new Error(`Secret-looking variable must not use the VITE_ prefix: ${key}`);
    }
  }
  return env;
}

let cached: ServerEnv | undefined;
export function getEnv(): ServerEnv {
  cached ??= parseEnv(process.env);
  return cached;
}
