"use client";

import { profile } from "@/content/profile";
import { Terminal } from "lucide-react";

export function CapabilitiesSection(): React.ReactNode {
  return (
    <section id="capabilities" className="border-b border-[var(--border)] py-12">
      {/* Section Header */}
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">05</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-faint)]">
              Core Competencies
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Capabilities &amp; Tech Stack
          </h2>
        </div>
      </div>

      {/* 4 Core Capabilities Grid */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {profile.capabilities.map((cap, idx) => (
          <div
            key={cap.title}
            className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 transition-all hover:border-[var(--border-hover)]"
          >
            <div className="mb-2.5 flex items-center justify-between">
              <span className="rounded-[4px] border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                {cap.tag}
              </span>
              <span className="font-mono text-xs text-[var(--text-faint)]">0{idx + 1}</span>
            </div>

            <h3 className="mb-2 text-base font-bold text-[var(--text-primary)]">
              {cap.title}
            </h3>

            <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              {cap.body}
            </p>
          </div>
        ))}
      </div>

      {/* Structured Stack Matrix */}
      <div className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-5">
        <div className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-3 font-mono text-xs font-bold text-[var(--text-primary)]">
          <Terminal className="h-4 w-4 text-[var(--accent)]" />
          <span>Full-Stack &amp; Tooling Matrix</span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.stack.map((group) => (
            <div key={group.category} className="space-y-2">
              <div className="font-mono text-xs font-bold text-[var(--accent)]">
                {group.category}
              </div>
              <ul className="space-y-1.5 font-mono text-xs text-[var(--text-secondary)]">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-[var(--border-hover)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
