"use client";

import { useMemo, useState } from "react";
import { nowItems, activityLogs } from "@/content/activity";
import type { GithubContributions, GithubDay, GithubEvent } from "@/lib/github";
import { GitCommit, Calendar, GitPullRequest, Star, ArrowUpRight, Clock, Layers, Sparkles } from "lucide-react";

interface ActivitySectionProps {
  initialContributions: GithubContributions;
  initialEvents: GithubEvent[];
}

type TabType = "overview" | "timeline" | "dailylog";

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "Just now";
    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    return `${months}mo ago`;
  } catch {
    return dateString;
  }
}

function formatDateDisplay(dateStr: string): string {
  try {
    const d = new Date(`${dateStr}T00:00:00`);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return dateStr;
  }
}

export function ActivitySection({
  initialContributions,
  initialEvents,
}: ActivitySectionProps): React.ReactNode {
  const [tab, setTab] = useState<TabType>("overview");
  const [hoveredDay, setHoveredDay] = useState<GithubDay | null>(null);

  // Structure days into weeks (columns of 7 days)
  const { weeks, monthHeaders } = useMemo(() => {
    const allDays = initialContributions.days || [];
    const groupedWeeks: GithubDay[][] = [];
    const headers: { month: string; colIndex: number }[] = [];

    let currentWeek: GithubDay[] = [];
    let lastMonth = -1;

    for (let i = 0; i < allDays.length; i++) {
      const day = allDays[i];
      currentWeek.push(day);

      const d = new Date(`${day.date}T00:00:00`);
      const m = d.getMonth();
      if (m !== lastMonth) {
        headers.push({ month: MONTH_NAMES[m], colIndex: groupedWeeks.length });
        lastMonth = m;
      }

      if (currentWeek.length === 7 || i === allDays.length - 1) {
        groupedWeeks.push(currentWeek);
        currentWeek = [];
      }
    }

    return { weeks: groupedWeeks, monthHeaders: headers };
  }, [initialContributions.days]);

  return (
    <section id="activity" className="border-b border-[var(--border)] py-12">
      {/* Section Header with View Mode Switcher */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">01</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-faint)]">
              GitHub &amp; Engineering Telemetry
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Activity &amp; Commit Timeline
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-1">
          <button
            type="button"
            onClick={() => setTab("overview")}
            className={`rounded-[6px] px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
              tab === "overview"
                ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => setTab("timeline")}
            className={`flex items-center gap-1 rounded-[6px] px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
              tab === "timeline"
                ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <GitCommit className="h-3 w-3 text-[var(--accent)]" />
            <span>GitHub Timeline</span>
          </button>
          <button
            type="button"
            onClick={() => setTab("dailylog")}
            className={`rounded-[6px] px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
              tab === "dailylog"
                ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            Daily Log
          </button>
        </div>
      </div>

      {/* Real GitHub Contribution Heatmap Widget */}
      <div className="mb-8 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-2">
            <GitCommit className="h-4 w-4 text-[var(--accent)]" />
            <a
              href="https://github.com/imnakul"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 font-mono text-xs font-bold text-[var(--text-primary)] hover:underline"
            >
              <span>@imnakul on GitHub</span>
              <ArrowUpRight className="h-3 w-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
            </a>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">
              · {initialContributions.total.toLocaleString()} contributions in the last year
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-faint)]">
            <span>Less</span>
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-[2px] border border-[var(--border)] bg-[var(--heatmap-empty)]" />
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
            {/* Month Labels Row */}
            <div className="flex gap-1 pl-6">
              {weeks.map((_, colIdx) => {
                const header = monthHeaders.find((h) => h.colIndex === colIdx);
                return (
                  <div key={colIdx} className="h-3 w-2.5 text-left">
                    {header && (
                      <span className="block font-mono text-[9px] text-[var(--text-faint)]">
                        {header.month}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Days Grid with Weekday Labels */}
            <div className="flex gap-1.5">
              <div className="flex flex-col justify-between py-0.5 font-mono text-[9px] text-[var(--text-faint)]">
                <span>Sun</span>
                <span>Tue</span>
                <span>Thu</span>
                <span>Sat</span>
              </div>

              <div className="flex gap-1">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((day) => {
                      const bgClass =
                        day.level === 0
                          ? "bg-[var(--heatmap-empty)] border border-[var(--border)]"
                          : day.level === 1
                          ? "bg-[var(--heatmap-1)]"
                          : day.level === 2
                          ? "bg-[var(--heatmap-2)]"
                          : day.level === 3
                          ? "bg-[var(--heatmap-3)]"
                          : "bg-[var(--heatmap-4)]";

                      return (
                        <button
                          key={day.date}
                          type="button"
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          aria-label={`${day.count} contributions on ${day.date}`}
                          className={`h-2.5 w-2.5 rounded-[2px] transition-transform hover:scale-125 focus:outline-none ${bgClass}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hover Tooltip Status Bar */}
        <div className="mt-2 flex h-5 items-center font-mono text-[11px] text-[var(--text-muted)]">
          {hoveredDay ? (
            <span>
              <strong className="text-[var(--accent)] font-semibold">{hoveredDay.count} {hoveredDay.count === 1 ? "contribution" : "contributions"}</strong> on{" "}
              <span className="text-[var(--text-primary)]">{formatDateDisplay(hoveredDay.date)}</span>
            </span>
          ) : (
            <span>Hover over any cell to view exact daily commit contributions</span>
          )}
        </div>
      </div>

      {/* Tab 1: Overview (Live Now items + Quick Highlights) */}
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

      {/* Tab 2: Real GitHub Timeline Feed */}
      {tab === "timeline" && (
        <div className="space-y-3">
          <div className="mb-3 flex items-center justify-between font-mono text-xs text-[var(--text-faint)]">
            <span>Latest Public Commits &amp; Activity (@imnakul)</span>
            <span>Live GitHub Synced</span>
          </div>

          <div className="space-y-2.5">
            {initialEvents.map((event) => {
              const isPush = event.type === "PushEvent";
              const isStar = event.type === "WatchEvent";

              return (
                <div
                  key={event.id}
                  className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-4 transition-all hover:border-[var(--border-hover)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-2.5">
                    <div className="flex items-center gap-2">
                      {isPush ? (
                        <GitCommit className="h-3.5 w-3.5 text-[var(--accent)]" />
                      ) : isStar ? (
                        <Star className="h-3.5 w-3.5 text-[var(--accent)]" />
                      ) : (
                        <GitPullRequest className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                      )}

                      <a
                        href={event.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1 font-mono text-xs font-bold text-[var(--text-primary)] hover:underline"
                      >
                        <span>{event.repoName}</span>
                        <ArrowUpRight className="h-3 w-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
                      </a>

                      <span className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-1.5 py-0.2 font-mono text-[9px] text-[var(--text-muted)]">
                        {event.type.replace("Event", "")}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 font-mono text-xs text-[var(--text-faint)]">
                      <Clock className="h-3 w-3" />
                      <span>{formatRelativeTime(event.createdAt)}</span>
                    </div>
                  </div>

                  {/* Commits list if available */}
                  {event.commits && event.commits.length > 0 ? (
                    <div className="mt-3 space-y-1.5">
                      {event.commits.map((c) => (
                        <div key={c.sha} className="flex items-start gap-2 text-xs">
                          <code className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--accent)]">
                            {c.sha}
                          </code>
                          <span className="text-[var(--text-secondary)] leading-relaxed">{c.message}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-2 text-xs text-[var(--text-secondary)]">
                      {isStar ? `Starred ${event.repoName}` : `Activity recorded in ${event.repoName}`}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Daily Engineering Log */}
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
