/**
 * One-shot migration runner (used by the `migrate` service in compose.prod.yml).
 * Uses MIGRATION_DATABASE_URL (DDL role). Never run automatically by the app.
 */
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";

const url = process.env.MIGRATION_DATABASE_URL;
if (!url) {
  console.error("MIGRATION_DATABASE_URL is required");
  process.exit(1);
}

const pool = new pg.Pool({ connectionString: url, max: 1, application_name: "ashcar-migrate" });
try {
  await migrate(drizzle(pool), {
    migrationsFolder: "./drizzle",
    migrationsTable: "__drizzle_migrations",
    migrationsSchema: "drizzle",
  });
  console.log("migrations: applied successfully");
} catch (err) {
  console.error("migrations: FAILED", err instanceof Error ? err.message : err);
  process.exitCode = 1;
} finally {
  await pool.end();
}
