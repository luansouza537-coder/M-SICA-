import { signIn } from "@/auth";

export function SpotifySignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("spotify", { redirectTo: "/perfil" });
      }}
    >
      <button
        type="submit"
        className="w-full rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
      >
        Entrar com Spotify
      </button>
    </form>
  );
}
