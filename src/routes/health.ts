import { createFileRoute } from "@tanstack/react-router";

/** Liveness: process is up. No DB query, no secrets. */
export const Route = createFileRoute("/health")({
  server: {
    handlers: {
      GET: () =>
        Response.json(
          { status: "ok", uptime_s: Math.round(process.uptime()) },
          { headers: { "cache-control": "no-store" } },
        ),
    },
  },
});
