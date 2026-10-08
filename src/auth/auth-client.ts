import { createAuthClient } from "better-auth/react";

/** Browser auth client. Same-origin; talks only to this app's /api/auth/*. */
export const authClient = createAuthClient({ basePath: "/api/auth" });
