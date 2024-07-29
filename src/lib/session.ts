import { auth } from "@/lib/auth";
import { Session } from "@/lib/types";

export default async function getSession(): Promise<Session> {
  const session = await auth();

  return session;
}
