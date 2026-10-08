import { defineConfig } from "drizzle-kit";

// Migrations run with the privileged MIGRATION_DATABASE_URL role only.
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema/index.ts",
  out: "./drizzle",
  casing: "snake_case",
  schemaFilter: ["public", "auth"],
  migrations: { table: "__drizzle_migrations", schema: "drizzle" },
  dbCredentials: { url: process.env.MIGRATION_DATABASE_URL ?? "" },
  strict: true,
  verbose: true,
});
