"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle(): React.ReactNode {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark";
    setTheme(current);
  }, []);

  const toggleTheme = (): void => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {}
  };

  if (!mounted) {
    return (
      <div
        className="h-8 w-8 rounded-[6px] border border-[var(--border)] bg-[var(--bg-surface)]"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="group relative flex h-8 items-center gap-2 rounded-[6px] border border-[var(--border)] bg-[var(--bg-surface)] px-2.5 text-xs font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-3.5 w-3.5 text-[var(--accent)] transition-transform duration-200 group-hover:rotate-45" />
          <span className="font-mono text-[11px]">Light</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5 text-[var(--accent)] transition-transform duration-200 group-hover:-rotate-12" />
          <span className="font-mono text-[11px]">Dark</span>
        </>
      )}
    </button>
  );
}
