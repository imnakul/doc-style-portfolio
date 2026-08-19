export interface SocialLink {
  label: string;
  href: string;
  iconName?: string;
}

export interface Capability {
  title: string;
  body: string;
  tag: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  availability: string;
  intro: string[];
  currentRole: {
    title: string;
    company: string;
    dates: string;
  };
  socials: SocialLink[];
  capabilities: Capability[];
  stack: {
    category: string;
    items: string[];
  }[];
}

export const profile: Profile = {
  name: "Nakul Srivastava",
  role: "Product & Frontend Engineer",
  location: "Remote",
  availability: "Open to Frontend Engineer roles & select freelance",
  intro: [
    "I design and build products end to end — frontend-led, UX-obsessed, and comfortable reaching across web, desktop, mobile, extensions, and AI systems when a problem demands it.",
    "Lately I live at the edge of everyday friction: noticing recurring bottlenecks, then engineering the focused tool that eliminates them.",
    "Fast, accessible interfaces with obsessive attention to craft, micro-interactions, and visual clarity.",
  ],
  currentRole: {
    title: "Frontend Engineer & Product Associate",
    company: "Knoarc, Vega Visionary",
    dates: "Feb 2026 — Present",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/imnakul" },
    { label: "X / Twitter", href: "https://x.com/imnakul" },
    { label: "Peerlist", href: "https://peerlist.io/imnakul" },
    { label: "Contact", href: "https://contact.nakulsrivastava.com" },
  ],
  capabilities: [
    {
      title: "Product & UX Design",
      body: "Turning fuzzy problem statements into shipped, refined products — holistic user flows, multi-state edge cases, spatial hierarchy, and the discipline of what not to build.",
      tag: "Design Systems",
    },
    {
      title: "Frontend Engineering",
      body: "Next.js, TypeScript, Tailwind CSS, Motion, and Lenis. High-performance, accessible interfaces engineered with deliberate typography, fluid transitions, and zero unnecessary overhead.",
      tag: "Web & Mobile",
    },
    {
      title: "Systems & Desktop",
      body: "Electron, Rust, Win32 APIs, and local-first data architecture. Native desktop utilities and sidebars that live quietly on the machine, run at 60fps, and respect user focus.",
      tag: "Local-First",
    },
    {
      title: "AI & Automation",
      body: "LLM agents, Model Context Protocol (MCP), Telegram automation bots, and workflow schedulers — building deterministic AI tools that solve real operational friction.",
      tag: "Autonomous Tools",
    },
  ],
  stack: [
    {
      category: "Frontend & UI",
      items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Motion / Framer", "GSAP", "Lenis Scroll"],
    },
    {
      category: "Desktop & Systems",
      items: ["Electron", "Rust", "Win32 APIs", "Direct2D", "Node.js", "Chrome Extensions"],
    },
    {
      category: "Backend & Data",
      items: ["Supabase", "Firebase", "PostgreSQL", "SQLite", "Cloudflare Workers", "Cloudinary", "REST APIs"],
    },
    {
      category: "AI & Workflows",
      items: ["Model Context Protocol (MCP)", "Gemini API", "Claude Code / Tooling", "Automation Schedulers", "Vercel Analytics"],
    },
  ],
};
