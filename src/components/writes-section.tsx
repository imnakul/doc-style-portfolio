"use client";

import { articles } from "@/content/writes";
import { BookOpen, Clock, ArrowUpRight } from "lucide-react";

export function WritesSection(): React.ReactNode {
  return (
    <section id="writes" className="border-b border-[var(--border)] py-12">
      {/* Section Header */}
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">04</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-faint)]">
              Writing &amp; Architecture
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Articles &amp; Engineering Essays
          </h2>
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-3">
        {articles.map((art) => (
          <div
            key={art.id}
            className="group flex flex-col justify-between gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-4 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-sub)] sm:flex-row sm:items-center"
          >
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                  {art.category}
                </span>
                <span className="font-mono text-xs text-[var(--text-faint)]">· {art.date}</span>
                <span className="flex items-center gap-1 font-mono text-xs text-[var(--text-faint)]">
                  <Clock className="h-3 w-3" />
                  <span>{art.readingTime}</span>
                </span>
              </div>

              <h3 className="text-sm font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)] sm:text-base">
                {art.title}
              </h3>

              <p className="max-w-2xl text-xs leading-relaxed text-[var(--text-secondary)]">
                {art.excerpt}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-1 font-mono text-xs font-medium text-[var(--text-muted)] group-hover:text-[var(--accent)]">
              <span>Read</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
