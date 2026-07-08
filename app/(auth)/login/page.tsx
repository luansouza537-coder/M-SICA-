import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { SpotifySignInButton } from "@/components/auth/spotify-signin-button";

export const metadata: Metadata = {
  title: "Entrar — M-SICA",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Entrar</h1>
      <LoginForm />
      <div className="flex items-center gap-3 text-xs uppercase text-foreground/50">
        <div className="h-px flex-1 bg-border" />
        ou
        <div className="h-px flex-1 bg-border" />
      </div>
      <SpotifySignInButton />
    </div>
  );
}
