"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Terminal, Github, Twitter, Globe, Mail, Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  index: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview", index: "00" },
  { id: "activity", label: "Activity", index: "01" },
  { id: "develop", label: "Build & Projects", index: "02" },
  { id: "craft", label: "Craft & UI/UX", index: "03" },
  { id: "writes", label: "Writes & Notes", index: "04" },
  { id: "capabilities", label: "Stack & Systems", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];

export function SidebarNav(): React.ReactNode {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPos = window.scrollY + 180;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Top Navigation Bar */}
      <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b border-[var(--border)] bg-[var(--bg-page)]/90 px-4 backdrop-blur-md lg:hidden">
        <button
          type="button"
          onClick={() => scrollToSection("overview")}
          className="flex items-center gap-2.5 text-left"
          aria-label="Nakul Srivastava home"
        >
          <div className="relative flex h-7 w-7 shrink-0 overflow-hidden rounded-[6px]">
            <Image
              src="/logo-darkmode.png"
              alt="Nakul Srivastava Logo"
              width={28}
              height={28}
              className="theme-logo-dark h-full w-full object-cover"
              priority
            />
            <Image
              src="/logo-lightmode.png"
              alt="Nakul Srivastava Logo"
              width={28}
              height={28}
              className="theme-logo-light h-full w-full object-cover"
              priority
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
            Nakul Srivastava
          </span>
        </button>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-14 z-30 border-b border-[var(--border)] bg-[var(--bg-page)] p-4 shadow-xl lg:hidden">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center justify-between rounded-[8px] px-3 py-2 text-left text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[var(--text-faint)]">{item.index}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sticky Sidebar (240px) */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col justify-between border-r border-[var(--border)] bg-[var(--bg-page)] p-5 lg:flex">
        <div className="space-y-6">
          {/* Header & Moniker with Theme-Adaptive Logo */}
          <div className="space-y-1.5 border-b border-[var(--border)] pb-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-[8px]">
                  <Image
                    src="/logo-darkmode.png"
                    alt="Nakul Srivastava Logo"
                    width={32}
                    height={32}
                    className="theme-logo-dark h-full w-full object-cover"
                    priority
                  />
                  <Image
                    src="/logo-lightmode.png"
                    alt="Nakul Srivastava Logo"
                    width={32}
                    height={32}
                    className="theme-logo-light h-full w-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
                    Nakul Srivastava
                  </h1>
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">Frontend &amp; AI Systems</p>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-[4px] border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2 py-0.5 font-mono text-[10px] font-medium text-[var(--accent)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                <span>Open for Roles</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            <div className="px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
              Navigation
            </div>
            <nav className="space-y-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex w-full items-center justify-between rounded-[8px] px-2.5 py-1.5 text-left text-[13px] font-medium transition-all ${
                      isActive
                        ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] shadow-sm"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                    <span
                      className={`font-mono text-[10px] transition-colors ${
                        isActive ? "text-[var(--accent)] font-semibold" : "text-[var(--text-faint)] group-hover:text-[var(--text-muted)]"
                      }`}
                    >
                      {item.index}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Sidebar Footer Controls & Links */}
        <div className="space-y-4 border-t border-[var(--border)] pt-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-[var(--text-muted)]">Theme</span>
            <ThemeToggle />
          </div>

          {/* Social Links Matrix */}
          <div className="grid grid-cols-4 gap-1.5">
            <a
              href="https://github.com/imnakul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 items-center justify-center rounded-[6px] border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://x.com/imnakul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 items-center justify-center rounded-[6px] border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
              aria-label="Twitter / X Profile"
              title="X / Twitter"
            >
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://peerlist.io/imnakul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 items-center justify-center rounded-[6px] border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
              aria-label="Peerlist Profile"
              title="Peerlist"
            >
              <Globe className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://contact.nakulsrivastava.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 items-center justify-center rounded-[6px] border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
              aria-label="Direct Contact"
              title="Contact"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="font-mono text-[10px] text-[var(--text-faint)]">
            v2026.8 · built with taste
          </div>
        </div>
      </aside>
    </>
  );
}
