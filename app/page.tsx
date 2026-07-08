import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <span className="text-lg font-semibold tracking-tight">M-SICA</span>
        <ThemeToggle />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Catalogue sua jornada musical
        </h1>
        <p className="max-w-md text-foreground/70">
          Em construção. Pesquise artistas, acompanhe discografias e registre
          o que você ouve.
        </p>
      </main>
    </div>
  );
}
