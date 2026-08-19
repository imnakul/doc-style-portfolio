"use client";

import { useState } from "react";
import { nowItems, activityLogs, generateMockContributions, type ContributionDay } from "@/content/activity";
import { GitCommit, Activity as ActivityIcon, Calendar, ArrowRight } from "lucide-react";

export function ActivitySection(): React.ReactNode {
  const [tab, setTab] = useState<"overview" | "dailylog">("overview");
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [contributions] = useState<ContributionDay[]>(generateMockContributions);

  // Group contributions into 16 weeks (columns of 7 days)
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const totalContributions = contributions.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <section id="activity" className="border-b border-[var(--border)] py-12">
      {/* Section Header with Section Index and View Tabs */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">01</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-faint)]">
              Real-time Pulse
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Activity &amp; Commit Telemetry
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-1">
          <button
            type="button"
            onClick={() => setTab("overview")}
            className={`rounded-[6px] px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
              tab === "overview"
                ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => setTab("dailylog")}
            className={`rounded-[6px] px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
              tab === "dailylog"
                ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            Daily Engineering Log
          </button>
        </div>
      </div>

      {/* GitHub Heatmap Widget (Present across both tabs) */}
      <div className="mb-8 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-2">
            <GitCommit className="h-4 w-4 text-[var(--accent)]" />
            <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
              GitHub Contribution Heatmap
            </span>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">
              · {totalContributions} contributions in 16 weeks
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-faint)]">
            <span>Less</span>
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[var(--heatmap-empty)] border border-[var(--border)]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[var(--heatmap-1)]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[var(--heatmap-2)]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[var(--heatmap-3)]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[var(--heatmap-4)]" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Grid Overflow Container */}
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex flex-col gap-1">
            <div className="flex gap-1">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((day) => {
                    const bgClass =
                      day.intensity === 0
                        ? "bg-[var(--heatmap-empty)] border border-[var(--border)]"
                        : day.intensity === 1
                        ? "bg-[var(--heatmap-1)]"
                        : day.intensity === 2
                        ? "bg-[var(--heatmap-2)]"
                        : day.intensity === 3
                        ? "bg-[var(--heatmap-3)]"
                        : "bg-[var(--heatmap-4)]";

                    return (
                      <button
                        key={day.date}
                        type="button"
                        onMouseEnter={() => setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        aria-label={`${day.count} contributions on ${day.date}`}
                        className={`h-3 w-3 rounded-[2px] transition-transform hover:scale-125 focus:outline-none ${bgClass}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hover Tooltip Bar */}
        <div className="mt-2 flex h-5 items-center font-mono text-[11px] text-[var(--text-muted)]">
          {hoveredDay ? (
            <span>
              <strong className="text-[var(--text-primary)]">{hoveredDay.count} commits</strong> on{" "}
              {hoveredDay.date}
            </span>
          ) : (
            <span>Hover over any cell to view daily commit activity</span>
          )}
        </div>
      </div>

      {/* Tab 1: Overview */}
      {tab === "overview" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {nowItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-4 transition-all hover:border-[var(--border-hover)]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-[4px] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                        item.active
                          ? "border border-[var(--accent-border)] bg-[var(--accent-bg)] text-[var(--accent)]"
                          : "border border-[var(--border)] bg-[var(--bg-surface-sub)] text-[var(--text-muted)]"
                      }`}
                    >
                      {item.active && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />}
                      {item.verb}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--text-faint)]">{item.tag}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--text-faint)]">{item.timestamp}</span>
                </div>

                <h3 className="mb-1.5 text-sm font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {item.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Daily Engineering Log */}
      {tab === "dailylog" && (
        <div className="space-y-4">
          {activityLogs.map((log) => (
            <div
              key={log.date}
              className={`rounded-[8px] border bg-[var(--bg-surface)] p-5 transition-all ${
                log.highlighted
                  ? "border-[var(--accent-border)]/60 bg-[var(--bg-surface-sub)]"
                  : "border-[var(--border)] hover:border-[var(--border-hover)]"
              }`}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-2.5">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                    {log.date}
                  </span>
                  {log.highlighted && (
                    <span className="rounded-[4px] border border-[var(--accent-border)] bg-[var(--accent-bg)] px-1.5 py-0.2 font-mono text-[9px] font-bold text-[var(--accent)]">
                      HIGHLIGHT
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {log.categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <h4 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">
                {log.title}
              </h4>

              <ul className="space-y-1.5 pl-4 text-xs text-[var(--text-secondary)]">
                {log.summary.map((point, pIdx) => (
                  <li key={pIdx} className="list-disc leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
