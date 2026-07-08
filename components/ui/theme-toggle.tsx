"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Marks that we're past hydration, since the resolved theme is only
    // known client-side. This one-shot flag can't be derived from props/state,
    // so the setState-in-effect lint rule doesn't apply here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("h-9 w-9 rounded-full", className)} aria-hidden />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent",
        className,
      )}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
