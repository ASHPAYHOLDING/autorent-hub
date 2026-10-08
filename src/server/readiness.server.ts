type Result = "ok" | "fail" | "not_configured";

/** Minimum number of applied migrations the running code requires. Bump with each new migration. */
export const REQUIRED_MIGRATIONS = 2;

export async function runReadinessChecks(): Promise<Record<string, Result>> {
  const out: Record<string, Result> = { config: "fail", database: "fail", migrations: "fail", storage: "fail" };
  let env;
  try {
    const { getEnv } = await import("./env.server");
    env = getEnv();
    out.config = "ok";
  } catch {
    return out;
  }
  try {
    const { getPool } = await import("@/db/client.server");
    const pool = getPool();
    await pool.query("select 1");
    out.database = "ok";
    const r = await pool.query<{ n: string }>("select count(*)::text as n from drizzle.__drizzle_migrations");
    out.migrations = Number(r.rows[0]?.n ?? 0) >= REQUIRED_MIGRATIONS ? "ok" : "fail";
  } catch {
    /* keep fail */
  }
  if (!env.S3_ENDPOINT) {
    out.storage = "not_configured";
  } else {
    try {
      const res = await fetch(new URL("/minio/health/live", env.S3_ENDPOINT), {
        signal: AbortSignal.timeout(2000),
      });
      out.storage = res.ok ? "ok" : "fail";
    } catch {
      out.storage = "fail";
    }
  }
  return out;
}
