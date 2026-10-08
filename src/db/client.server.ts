import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { sql } from "drizzle-orm";
import pg from "pg";
import * as schema from "./schema";
import { getEnv } from "@/server/env.server";

export type Db = NodePgDatabase<typeof schema>;

let pool: pg.Pool | undefined;
let db: Db | undefined;

/** Lazy pool using the restricted application role (DATABASE_URL). */
export function getPool(): pg.Pool {
  if (!pool) {
    const env = getEnv();
    pool = new pg.Pool({
      connectionString: env.DATABASE_URL,
      min: env.DB_POOL_MIN,
      max: env.DB_POOL_MAX,
      application_name: "ashcar-app",
    });
  }
  return pool;
}

export function getDb(): Db {
  db ??= drizzle(getPool(), { schema, casing: "snake_case" });
  return db;
}

/**
 * Runs `fn` in a transaction with the acting user bound for RLS policies
 * (current_setting('app.current_user_id')). SET LOCAL scope = this transaction only.
 */
export async function withUser<T>(userId: string, fn: (tx: Db) => Promise<T>): Promise<T> {
  return getDb().transaction(async (tx) => {
    await tx.execute(sql`select set_config('app.current_user_id', ${userId}, true)`);
    return fn(tx as unknown as Db);
  });
}
