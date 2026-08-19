export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: "all" | "desktop" | "web" | "ai" | "automation" | "extension" | "client";
  tags: string[];
  status: "live" | "wip" | "delivered" | "paused";
  tier: "featured" | "strong" | "rest";
  year: number;
  note?: string;
  detail?: string;
  problem?: string;
  solution?: string;
  cliCommand?: string;
  links: {
    live?: string;
    github?: string;
    releases?: string;
  };
}

export const projects: Project[] = [
  {
    id: "hari",
    name: "Hari",
    tagline: "An always-on desktop copilot that sits above Claude Code, Codex, and Cursor — it plans, remembers, and steers across projects without writing code itself, keeping each harness context clean.",
    category: "ai",
    tags: ["Desktop", "AI Copilot", "Electron", "Local-first"],
    status: "wip",
    tier: "featured",
    year: 2026,
    detail: "Dual surfaces — Mind for offline recall, Live for a cross-project steering cockpit.",
    problem: "Juggling multiple coding harnesses across projects means constantly losing mental context: what was I doing, why, and where did I leave off.",
    solution: "An always-on desktop copilot that plans, remembers, and steers — never touching file edits directly, preserving each harness's context window.",
    cliCommand: "$ npx hari@latest attach",
    links: {
      github: "https://github.com/imnakul/hari",
    },
  },
  {
    id: "madhav",
    name: "Madhav",
    tagline: "A glass Windows side-panel that captures notes, ideas, and tasks the instant they surface — syncing bidirectionally with Telegram so capture follows you on every device.",
    category: "desktop",
    tags: ["Windows", "Telegram", "Productivity", "Win32"],
    status: "live",
    tier: "featured",
    year: 2026,
    detail: "Five thought categories, markdown preview, collapsible cards, and smart task folding.",
    problem: "Switching away from active work to note down fleeting thoughts breaks flow state; mobile notes stay stranded and never sync back.",
    solution: "A hotkey-invoked translucent Windows side-panel linked to Telegram with bidirectional instant sync and markdown cards.",
    cliCommand: "$ winget install imnakul.madhav",
    links: {
      live: "https://madhav-five.vercel.app",
      releases: "https://madhav.nakulsrivastava.com",
    },
  },
  {
    id: "capkit",
    name: "CapKit",
    tagline: "A calm, Windows-first capture toolkit: hit a single shortcut, grab anything, annotate in place, then pin, record, or showcase — one uninterrupted flow replacing disjointed utilities.",
    category: "desktop",
    tags: ["Windows", "Capture", "OCR", "Studio Recording"],
    status: "wip",
    tier: "featured",
    year: 2026,
    detail: "Scrolling capture, live Screen Draw, Studio HD recording, and instant OCR to markdown.",
    problem: "Screenshot tools are either too basic (lacking instant OCR or scrolling capture) or bloated with heavy multi-layered menus.",
    solution: "A lightweight capture toolkit with instant in-place annotation, scrolling grab, and direct markdown OCR export.",
    cliCommand: "$ capkit --record --studio",
    links: {},
  },
  {
    id: "vedherbz-erp",
    name: "VedHerbz ERP",
    tagline: "An offline desktop ERP that replaced a fragile spreadsheet workflow for a cosmetics manufacturer — BOM, batch formulations, QC certificates, and role security on a local SQLite database.",
    category: "desktop",
    tags: ["ERP", "Electron", "SQLite", "Local-first"],
    status: "delivered",
    tier: "featured",
    year: 2026,
    note: "Client Work",
    detail: "Zero internet dependency; encrypted roles, automatic backups, and packaged Windows installer.",
    problem: "A cosmetics manufacturer ran critical raw materials, formulations, batch manufacturing, and QC certificates entirely in spreadsheets, causing costly data discrepancies.",
    solution: "An offline desktop ERP built on local SQLite with granular role permissions, batch traceability, and automated PDF certificate generation.",
    links: {},
  },
  {
    id: "codex-ledger",
    name: "Codex Ledger",
    tagline: "A privacy-first, local-only analytics dashboard that translates invisible AI API usage into readable telemetry — models, runtimes, token velocity, and real cost per task.",
    category: "ai",
    tags: ["Analytics", "Local-first", "Open Source", "TypeScript"],
    status: "live",
    tier: "featured",
    year: 2026,
    detail: "Zero telemetry leaves your machine; parses local JSON logs in realtime.",
    problem: "AI development spending is opaque — impossible to tell which model variations or prompts generate ROI vs. token waste.",
    solution: "A local dashboard that parses model calls in real time, graphs spend per directory, and identifies token anomalies without cloud uploads.",
    cliCommand: "$ npx codex-ledger --port 3344",
    links: {
      github: "https://github.com/imnakul/codex-analytics",
    },
  },
  {
    id: "moving-text",
    name: "Moving Text",
    tagline: "A featherweight Rust overlay that scrolls ambient reminders along screen edges — click-through, always-on-top, rendered at 60fps via Direct2D with full Unicode & emoji support.",
    category: "desktop",
    tags: ["Rust", "Win32", "Direct2D", "60fps"],
    status: "live",
    tier: "strong",
    year: 2026,
    detail: "Zero CPU overhead (<0.1%), click-through window layering, customizable velocity.",
    problem: "Traditional popup notifications either disappear too quickly or aggressively interrupt active code editing.",
    solution: "An ambient ticker along the screen border that remains readable in peripheral vision without consuming focus.",
    cliCommand: "$ cargo install moving-text",
    links: {
      github: "https://github.com/imnakul/movingtext",
    },
  },
  {
    id: "telegram-pc-control",
    name: "Telegram PC Control",
    tagline: "A lightweight Telegram automation daemon that securely controls a Windows workstation remotely — take desktop screenshots, trigger timed hibernation, or cancel background jobs.",
    category: "automation",
    tags: ["Telegram Bot", "Windows", "Automation", "Security"],
    status: "live",
    tier: "strong",
    year: 2026,
    problem: "Checking on rendering tasks or long-running compilations required spinning up heavy remote desktop software.",
    solution: "A headless background daemon responding only to verified user Telegram IDs for status screenshots and power management.",
    links: {},
  },
  {
    id: "wallpapers",
    name: "Wallpapers",
    tagline: "A 60fps glassmorphic 4K/8K wallpaper gallery with a zero-credit sync pipeline — drop images into a folder, MD5-hash against a manifest, and sync only new assets to Cloudinary.",
    category: "web",
    tags: ["Next.js", "Cloudinary", "Motion", "Tailwind CSS"],
    status: "live",
    tier: "strong",
    year: 2026,
    links: {
      live: "https://wallpapers-beryl.vercel.app",
    },
  },
  {
    id: "remind-me-gopal",
    name: "Remind me Gopal",
    tagline: "A lightweight browser extension that turns any web selection into a persistent reminder with one right-click. Zero account, no external cloud, survives browser restarts.",
    category: "extension",
    tags: ["Browser Extension", "Vanilla JS", "Local Storage"],
    status: "live",
    tier: "strong",
    year: 2025,
    problem: "Bookmarking or sending links to note apps has high friction, causing interesting articles and code snippets to be forgotten.",
    solution: "Context-menu right-click reminder engine that highlights the source text and restores scroll position upon notification click.",
    links: {},
  },
  {
    id: "knoarc",
    name: "Knoarc",
    tagline: "An adaptive learning workspace that turns reading into reviewable material — captures highlights and active-recall flashcards without breaking focus.",
    category: "web",
    tags: ["Next.js", "EdTech", "Spaced Repetition", "TypeScript"],
    status: "live",
    tier: "strong",
    year: 2026,
    links: {
      live: "https://knoarc.vercel.app",
      github: "https://github.com/imnakul/knoarc-frontend",
    },
  },
  {
    id: "naarithread",
    name: "Naarithread",
    tagline: "An ecommerce platform with a custom headless CMS, inventory tracking, and integrated AI assistant for customer styling queries.",
    category: "client",
    tags: ["Ecommerce", "Headless CMS", "AI Assistant", "Next.js"],
    status: "live",
    tier: "strong",
    year: 2026,
    note: "Client Work",
    links: {
      live: "https://naarithread-flame.vercel.app",
    },
  },
  {
    id: "freesiteshub",
    name: "Freesiteshub",
    tagline: "A curated index of free tools, open-source resources, and APIs for builders and creators — maintained continuously with live uptime checks.",
    category: "web",
    tags: ["Directory", "Curated Tools", "Next.js"],
    status: "live",
    tier: "strong",
    year: 2026,
    links: {
      live: "https://freesiteshub.vercel.app",
    },
  },
];
