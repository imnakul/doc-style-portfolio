"use client";

import { useState } from "react";
import { profile } from "@/content/profile";
import { Copy, Check, Terminal, Sparkles, Star, ArrowUpRight } from "lucide-react";

export function HeroSection(): React.ReactNode {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string): void => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="overview" className="border-b border-[var(--border)] pb-12 pt-4">
      {/* Top Banner Chip */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-[6px] border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2.5 py-1 text-xs text-[var(--accent)]">
        <span className="rounded-[4px] border border-[var(--accent-border)] px-1.5 py-0.2 font-mono text-[9px] font-bold uppercase tracking-wider">
          NEW
        </span>
        <span className="font-medium">
          Shipping Hari Desktop Copilot & CapKit v1.0
        </span>
      </div>

      {/* 2-Column Responsive Hero Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Column (Editorial / Narrative) */}
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              {profile.name}
            </h1>
            <p className="font-mono text-base font-medium text-[var(--text-secondary)] sm:text-lg">
              {profile.role}
            </p>
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base sm:leading-relaxed">
            {profile.intro.map((para, i) => (
              <p key={i} className="max-w-2xl">
                {para}
              </p>
            ))}
          </div>

          {/* Key Metrics Counter Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]" />
              <div>
                <div className="font-mono text-base font-bold text-[var(--text-primary)]">
                  12+ Products
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
                  Shipped End-to-End
                </div>
              </div>
            </div>

            <div className="h-6 w-px bg-[var(--border)]" />

            <div>
              <div className="font-mono text-base font-bold text-[var(--text-primary)]">
                60 fps Native
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
                Direct2D & Rust
              </div>
            </div>

            <div className="h-6 w-px bg-[var(--border)]" />

            <div>
              <div className="font-mono text-base font-bold text-[var(--text-primary)]">
                Local-First
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
                Zero Cloud Lock-in
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (IDE Command Snippets & Quick CTAs) */}
        <div className="space-y-4 lg:col-span-5">
          {/* Quick Install Widget 1: Skills CLI */}
          <div className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-4 transition-all hover:border-[var(--border-hover)]">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--text-primary)]">
                <Terminal className="h-3.5 w-3.5 text-[var(--accent)]" />
                <span>Evaluate Skills System</span>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-faint)]">skills.sh</span>
            </div>
            <p className="mb-3 text-xs leading-normal text-[var(--text-muted)]">
              Add Nakul&apos;s workflow skills directly into your agent project.
            </p>
            <div className="flex items-center justify-between rounded-[6px] border border-[var(--border)] bg-[var(--bg-page)] px-3 py-2">
              <code className="font-mono text-xs text-[var(--text-primary)] truncate">
                $ npx skills@latest add imnakul/skills
              </code>
              <button
                type="button"
                onClick={() => copyToClipboard("npx skills@latest add imnakul/skills", "skills")}
                className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] text-[var(--text-muted)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                aria-label="Copy install command"
              >
                {copiedCmd === "skills" ? (
                  <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Install Widget 2: Claude Code Plugin */}
          <div className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-4 transition-all hover:border-[var(--border-hover)]">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--text-primary)]">
                <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
                <span>Claude Code Plugin</span>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-faint)]">MCP / Tools</span>
            </div>
            <div className="flex items-center justify-between rounded-[6px] border border-[var(--border)] bg-[var(--bg-page)] px-3 py-2">
              <code className="font-mono text-xs text-[var(--text-primary)] truncate">
                $ claude plugins install imnakul-skills
              </code>
              <button
                type="button"
                onClick={() => copyToClipboard("claude plugins install imnakul-skills", "claude")}
                className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] text-[var(--text-muted)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                aria-label="Copy Claude plugin command"
              >
                {copiedCmd === "claude" ? (
                  <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5 pt-1 sm:flex-row">
            <a
              href="https://contact.nakulsrivastava.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-[8px] bg-[var(--accent)] px-4 py-2.5 text-xs font-bold text-[var(--accent-fg)] transition-opacity hover:opacity-90"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://github.com/imnakul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-2.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--text-muted)]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
