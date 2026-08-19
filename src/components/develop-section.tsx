"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/projects";
import {
  Code2,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Terminal,
  Copy,
  Check,
  FolderGit2,
  Layers,
  ArrowUpRight,
} from "lucide-react";

type FilterCategory = "all" | "desktop" | "ai" | "web" | "extension";

const CATEGORIES: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Builds" },
  { id: "desktop", label: "Desktop & Win32" },
  { id: "ai", label: "AI & Agents" },
  { id: "web", label: "Web & Products" },
  { id: "extension", label: "Extensions" },
];

export function DevelopSection(): React.ReactNode {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [expandedId, setExpandedId] = useState<string | null>("hari");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "desktop") return p.category === "desktop";
    if (activeCategory === "ai") return p.category === "ai" || p.category === "automation";
    if (activeCategory === "web") return p.category === "web" || p.category === "client";
    if (activeCategory === "extension") return p.category === "extension";
    return true;
  });

  const toggleExpand = (id: string): void => {
    setExpandedId(expandedId === id ? null : id);
  };

  const copyCommand = (cmd: string, id: string): void => {
    navigator.clipboard.writeText(cmd.replace(/^\$\s*/, ""));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="develop" className="border-b border-[var(--border)] py-12">
      {/* Section Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">02</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-faint)]">
              Engineered Products
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Build &amp; Systems Catalog
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-[6px] px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List Grid */}
      <div className="space-y-4">
        {filteredProjects.map((project) => {
          const isExpanded = expandedId === project.id;
          const statusColor =
            project.status === "live"
              ? "border-[var(--accent-border)] text-[var(--accent)] bg-[var(--accent-bg)]"
              : project.status === "wip"
              ? "border-teal-500/30 text-teal-400 bg-teal-500/10"
              : "border-[var(--border)] text-[var(--text-muted)] bg-[var(--bg-surface-sub)]";

          return (
            <div
              key={project.id}
              className={`group rounded-[8px] border bg-[var(--bg-surface)] p-5 transition-all ${
                isExpanded
                  ? "border-[var(--border-hover)] bg-[var(--bg-surface-sub)]"
                  : "border-[var(--border)] hover:border-[var(--border-hover)]"
              }`}
            >
              {/* Card Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {project.name}
                  </h3>

                  <span
                    className={`rounded-[4px] border px-1.5 py-0.2 font-mono text-[9px] font-bold uppercase tracking-wider ${statusColor}`}
                  >
                    {project.status}
                  </span>

                  {project.note && (
                    <span className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-1.5 py-0.2 font-mono text-[9px] text-[var(--text-muted)]">
                      {project.note}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--text-faint)]">
                    {project.year}
                  </span>

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-2 py-1 font-mono text-[11px] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-2 py-1 font-mono text-[11px] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                    >
                      <Github className="h-3 w-3" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Tagline */}
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                {project.tagline}
              </p>

              {/* Tags Strip */}
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-page)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CLI Command Box if available */}
              {project.cliCommand && (
                <div className="mt-3 flex items-center justify-between rounded-[6px] border border-[var(--border)] bg-[var(--bg-page)] px-3 py-1.5">
                  <code className="font-mono text-xs text-[var(--text-primary)] truncate">
                    {project.cliCommand}
                  </code>
                  <button
                    type="button"
                    onClick={() => copyCommand(project.cliCommand!, project.id)}
                    className="ml-2 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    aria-label={`Copy command for ${project.name}`}
                  >
                    {copiedId === project.id ? (
                      <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              )}

              {/* Expandable Problem & Solution Section */}
              {(project.problem || project.solution) && (
                <div className="mt-3 border-t border-[var(--border)] pt-2">
                  <button
                    type="button"
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[var(--accent)] hover:underline"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="h-3 w-3" />
                        <span>Hide Engineering Rationale</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-3 w-3" />
                        <span>Inspect Problem &amp; Solution Rationale</span>
                      </>
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 grid grid-cols-1 gap-3 rounded-[6px] border border-[var(--border)] bg-[var(--bg-page)] p-3.5 sm:grid-cols-2">
                      <div className="space-y-1">
                        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                          The Friction / Problem
                        </div>
                        <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                          {project.problem}
                        </p>
                      </div>

                      <div className="space-y-1 sm:border-l sm:border-[var(--border)] sm:pl-3">
                        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-teal-400">
                          The Engineering Fix
                        </div>
                        <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
