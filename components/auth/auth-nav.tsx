import Link from "next/link";
import { auth } from "@/auth";

export async function AuthNav() {
  const session = await auth();

  if (session?.user) {
    return (
      <Link href="/perfil" className="text-sm font-medium hover:text-primary">
        {session.user.name ?? session.user.email}
      </Link>
    );
  }

  return (
    <Link href="/login" className="text-sm font-medium hover:text-primary">
      Entrar
    </Link>
  );
}
