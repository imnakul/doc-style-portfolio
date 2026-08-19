"use client";

import { useState } from "react";
import { craftItems, type CraftItem } from "@/content/craft";

type CraftType = "all" | "ui-ux" | "logo" | "interaction";

const CRAFT_FILTERS: { id: CraftType; label: string }[] = [
  { id: "all", label: "All Craft" },
  { id: "ui-ux", label: "UI / UX Systems" },
  { id: "logo", label: "Logos & Monograms" },
  { id: "interaction", label: "Motion & Micro-interactions" },
];

export function CraftSection(): React.ReactNode {
  const [filter, setFilter] = useState<CraftType>("all");

  const filteredItems = craftItems.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section id="craft" className="border-b border-[var(--border)] py-12">
      {/* Section Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">03</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-faint)]">
              Visual Craft &amp; Systems
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Craft, UI/UX &amp; Identities
          </h2>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-1 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-1">
          {CRAFT_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-[6px] px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
                filter === f.id
                  ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Craft Cards 2-Column Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 transition-all hover:border-[var(--border-hover)]"
          >
            <div>
              {/* Card Meta Top */}
              <div className="mb-2.5 flex items-center justify-between">
                <span className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  {item.type}
                </span>
                <span className="font-mono text-xs text-[var(--text-faint)]">{item.year}</span>
              </div>

              {/* Title & Description */}
              <h3 className="mb-2 text-base font-bold text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>

            {/* Bottom Meta, Metrics & Swatches */}
            <div className="mt-4 space-y-3 border-t border-[var(--border)] pt-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-1.5 py-0.2 font-mono text-[9px] text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.metrics && (
                  <span className="rounded-[4px] border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--accent)]">
                    {item.metrics}
                  </span>
                )}
              </div>

              {/* Color Swatch Preview if available */}
              {item.palette && (
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="font-mono text-[10px] text-[var(--text-faint)]">Palette:</span>
                  <div className="flex items-center gap-1">
                    {item.palette.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        style={{ backgroundColor: color }}
                        className="h-3 w-5 rounded-[2px] border border-[var(--border)]"
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
