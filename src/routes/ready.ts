import { createFileRoute } from "@tanstack/react-router";

/** Readiness: config + PostgreSQL + migrations + MinIO. Reports pass/fail only, no details. */
export const Route = createFileRoute("/ready")({
  server: {
    handlers: {
      GET: async () => {
        const { runReadinessChecks } = await import("@/server/readiness.server");
        const checks = await runReadinessChecks();
        const ok = Object.values(checks).every((c) => c === "ok");
        return Response.json(
          { status: ok ? "ready" : "not_ready", checks },
          { status: ok ? 200 : 503, headers: { "cache-control": "no-store" } },
        );
      },
    },
  },
});
