export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  slug: string;
}

export const articles: ArticleItem[] = [
  {
    id: "harness-engineering-principles",
    title: "Engineering AI Coding Harnesses Without Context Rot",
    excerpt: "Why delegating architectural planning and memory tracking to a supervisory desktop layer keeps your coding harness sharp across complex repositories.",
    date: "Aug 12, 2026",
    readingTime: "6 min read",
    category: "AI & Architecture",
    tags: ["LLM Tooling", "Context Management", "Electron"],
    slug: "engineering-ai-coding-harnesses",
  },
  {
    id: "sub-pixel-windows-overlays",
    title: "Building 60fps Ambient Desktop Overlays with Rust and Direct2D",
    excerpt: "Overcoming Win32 window clipping, transparency glitches, and CPU spikes when crafting non-intrusive peripheral notification tools.",
    date: "Jul 28, 2026",
    readingTime: "8 min read",
    category: "Systems & Rust",
    tags: ["Rust", "Win32", "Direct2D", "Performance"],
    slug: "sub-pixel-windows-overlays-rust",
  },
  {
    id: "offline-first-erp-design",
    title: "Why Local SQLite Won Over the Cloud for Cosmetics Manufacturing",
    excerpt: "Replacing fragile legacy spreadsheets with an offline desktop ERP that survives internet outages and eliminates recurring subscription costs.",
    date: "Jun 14, 2026",
    readingTime: "5 min read",
    category: "Product & Architecture",
    tags: ["Local-First", "SQLite", "Desktop ERP"],
    slug: "offline-first-erp-design-sqlite",
  },
  {
    id: "micro-interactions-design-taste",
    title: "Restraint Over Decoration: Deconstructing Developer-First UI Taste",
    excerpt: "How single-hue opacity stepping, hairline borders, and intentional command-line ergonomics outperform generic marketing gradients.",
    date: "May 20, 2026",
    readingTime: "4 min read",
    category: "Design & UX",
    tags: ["Design Systems", "Typography", "Frontend"],
    slug: "restraint-over-decoration-design-taste",
  },
];
