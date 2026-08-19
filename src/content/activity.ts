export interface NowItem {
  id: string;
  verb: "Working" | "Building" | "Shipping" | "Exploring";
  title: string;
  blurb: string;
  active: boolean;
  tag: string;
  timestamp: string;
}

export interface ActivityLog {
  date: string;
  title: string;
  summary: string[];
  categories: string[];
  intensity: number; // 0 to 4
  highlighted?: boolean;
}

export interface ContributionDay {
  date: string;
  count: number;
  intensity: 0 | 1 | 2 | 3 | 4;
}

export const nowItems: NowItem[] = [
  {
    id: "knoarc",
    verb: "Working",
    title: "Frontend Engineer & Product Associate",
    blurb: "Knoarc & Vega Visionary — architecting core student workspace, flashcards, and review systems.",
    active: true,
    tag: "Production",
    timestamp: "Active Today",
  },
  {
    id: "hari",
    verb: "Building",
    title: "Hari — Desktop AI Steering Copilot",
    blurb: "Multi-harness state tracking engine that coordinates Cursor, Claude Code, and Codex without polluting their context windows.",
    active: true,
    tag: "AI / Electron",
    timestamp: "Updated 2h ago",
  },
  {
    id: "capkit",
    verb: "Shipping",
    title: "CapKit Capture Toolkit v1.0",
    blurb: "Finalizing Studio HD canvas recording, scrolling capture pipelines, and local OCR markdown parsing.",
    active: true,
    tag: "Windows Utility",
    timestamp: "Shipped v0.9.4",
  },
  {
    id: "automations",
    verb: "Exploring",
    title: "Autonomous MCP Schedulers",
    blurb: "Investigating background daemon routines and cron-driven LLM synthesis for local file changes.",
    active: false,
    tag: "Research",
    timestamp: "Continuous",
  },
];

export const activityLogs: ActivityLog[] = [
  {
    date: "2026-08-18",
    title: "CapKit Studio recording engine & direct WebM conversion",
    summary: [
      "Optimized DirectX desktop frame grabber to sustain locked 60fps at 4K resolution.",
      "Integrated fast local FFmpeg wrapper for single-pass WebM and MP4 container encoding.",
      "Added multi-monitor boundary snapping during freehand crop mode.",
    ],
    categories: ["Desktop", "Win32", "Performance"],
    intensity: 4,
    highlighted: true,
  },
  {
    date: "2026-08-17",
    title: "Hari cross-harness state synchronization",
    summary: [
      "Built memory buffer parser to monitor filesystem diffs across active repo worktrees.",
      "Implemented context hygiene filters to keep Claude Code session prompts compact.",
      "Wrote bidirectional IPC bridge between Electron main process and background watcher.",
    ],
    categories: ["AI", "Electron", "Architecture"],
    intensity: 3,
  },
  {
    date: "2026-08-16",
    title: "Knoarc active recall card scheduler & review flow",
    summary: [
      "Refactored spaced repetition intervals using modified SM-2 algorithm in TypeScript.",
      "Shipped fluid keyboard navigation for rapid card flipping (Space / 1-4 difficulty keys).",
      "Added smooth optimistic UI updates with automatic rollback on network failure.",
    ],
    categories: ["Frontend", "UX", "Next.js"],
    intensity: 3,
  },
  {
    date: "2026-08-15",
    title: "Codex Ledger telemetry parser & token heatmaps",
    summary: [
      "Created token consumption heatmap visualizer grouping costs by tool type.",
      "Eliminated 120ms UI render lag during large SQLite log imports.",
    ],
    categories: ["Open Source", "Analytics"],
    intensity: 2,
  },
  {
    date: "2026-08-14",
    title: "Moving Text Rust overlay font rendering",
    summary: [
      "Added DirectWrite color glyph support for native Windows emojis.",
      "Implemented boundary collision padding to prevent ticker overlapping Windows taskbar.",
    ],
    categories: ["Rust", "Systems"],
    intensity: 4,
    highlighted: true,
  },
  {
    date: "2026-08-13",
    title: "Madhav Telegram sync queue resiliency",
    summary: [
      "Added offline message queue with exponential backoff retry on reconnect.",
      "Polished markdown syntax highlight colors for code blocks in quick notes.",
    ],
    categories: ["Productivity", "Telegram"],
    intensity: 2,
  },
];

// Generate 16 weeks of realistic contribution activity (112 days)
export function generateMockContributions(): ContributionDay[] {
  const days: ContributionDay[] = [];
  const today = new Date("2026-08-19");
  
  for (let i = 111; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    
    // Day of week weighting (more on weekdays)
    const dayOfWeek = d.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    let count = 0;
    const seed = (d.getFullYear() * 1000 + (d.getMonth() + 1) * 31 + d.getDate()) % 17;
    
    if (isWeekend) {
      count = seed % 3 === 0 ? Math.floor(seed / 3) : 0;
    } else {
      count = (seed % 9) + (seed > 8 ? 4 : 1);
    }

    // Explicit high days
    if (dateStr === "2026-08-18" || dateStr === "2026-08-14" || dateStr === "2026-08-11") {
      count = 14;
    }
    
    let intensity: 0 | 1 | 2 | 3 | 4 = 0;
    if (count > 0 && count <= 2) intensity = 1;
    else if (count > 2 && count <= 5) intensity = 2;
    else if (count > 5 && count <= 9) intensity = 3;
    else if (count > 9) intensity = 4;

    days.push({ date: dateStr, count, intensity });
  }

  return days;
}
