import { getAuth } from "./auth.server";

export class UnauthorizedError extends Error {
  status = 401;
  constructor() {
    super("Unauthorized");
  }
}

/** Server-side session check — use in every protected server function / route. */
export async function getSessionFromRequest(request: Request) {
  return getAuth().api.getSession({ headers: request.headers });
}

export async function requireSession(request: Request) {
  const s = await getSessionFromRequest(request);
  if (!s) throw new UnauthorizedError();
  if (!s.user.emailVerified) throw new UnauthorizedError();
  return s;
}
