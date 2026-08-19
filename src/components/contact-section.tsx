"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Github, Twitter, Globe, Check, Copy } from "lucide-react";

export function ContactSection(): React.ReactNode {
  const [copied, setCopied] = useState(false);

  const copyEmail = (): void => {
    navigator.clipboard.writeText("contact@nakulsrivastava.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[var(--accent)]">06</span>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-faint)]">
            Initiate Contact
          </span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          Get in Touch &amp; Collaborate
        </h2>
      </div>

      {/* Terminal Contact Box */}
      <div className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 transition-all hover:border-[var(--border-hover)]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">
              Let&apos;s build something focused.
            </h3>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              Available for Product &amp; Frontend Engineering roles, high-craft freelance, or AI tool architecture collaborations.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://contact.nakulsrivastava.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-[8px] bg-[var(--accent)] px-4 py-2 text-xs font-bold text-[var(--accent-fg)] transition-opacity hover:opacity-90"
              >
                <span>Direct Contact Portal</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-1.5 rounded-[8px] border border-[var(--border)] bg-[var(--bg-page)] px-3 py-2 font-mono text-xs text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Socials Grid */}
          <div className="space-y-2.5 rounded-[6px] border border-[var(--border)] bg-[var(--bg-page)] p-4 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
              Networks &amp; Profiles
            </div>

            <div className="space-y-1.5">
              <a
                href="https://github.com/imnakul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[4px] p-1 text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
              >
                <span className="flex items-center gap-2">
                  <Github className="h-3.5 w-3.5" />
                  <span>github.com/imnakul</span>
                </span>
                <ArrowUpRight className="h-3 w-3 text-[var(--text-faint)]" />
              </a>

              <a
                href="https://x.com/imnakul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[4px] p-1 text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
              >
                <span className="flex items-center gap-2">
                  <Twitter className="h-3.5 w-3.5" />
                  <span>x.com/imnakul</span>
                </span>
                <ArrowUpRight className="h-3 w-3 text-[var(--text-faint)]" />
              </a>

              <a
                href="https://peerlist.io/imnakul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[4px] p-1 text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
              >
                <span className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5" />
                  <span>peerlist.io/imnakul</span>
                </span>
                <ArrowUpRight className="h-3 w-3 text-[var(--text-faint)]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
        <div className="font-mono text-xs text-[var(--text-faint)]">
          © {new Date().getFullYear()} Nakul Srivastava. All rights reserved.
        </div>
        <div className="font-mono text-xs text-[var(--text-muted)]">
          Designed with <span className="text-[var(--accent)]">aihero.dev</span> taste DNA · Next.js 15
        </div>
      </footer>
    </section>
  );
}
