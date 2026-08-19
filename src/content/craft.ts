export interface CraftItem {
  id: string;
  title: string;
  type: "ui-ux" | "logo" | "component" | "interaction";
  description: string;
  year: number;
  tags: string[];
  metrics?: string;
  palette?: string[];
  previewSnippet?: string;
}

export const craftItems: CraftItem[] = [
  {
    id: "madhav-glass-ui",
    title: "Madhav Glassmorphic Side-Panel System",
    type: "ui-ux",
    description: "Multi-layered translucent desktop UI system engineered with sub-pixel borders, custom titlebar controls, and spring-driven folding cards.",
    year: 2026,
    tags: ["Desktop UX", "Win32", "Glassmorphism", "Micro-interactions"],
    metrics: "60fps Fluid Framerate",
    palette: ["#080808", "#14B8A6", "#2DD4BF", "#E6FAF8"],
  },
  {
    id: "capkit-studio-hud",
    title: "CapKit Precision Studio HUD & Annotation Palette",
    type: "ui-ux",
    description: "Non-intrusive floating canvas controls with magnetic snapping, radial color picker, and zero-distraction shortcut overlays.",
    year: 2026,
    tags: ["UI/UX", "Canvas Tools", "Design Systems"],
    metrics: "Single Keystroke Invocation",
    palette: ["#0D0D0C", "#2DD4BF", "#0F766E"],
  },
  {
    id: "hari-ai-cockpit",
    title: "Hari AI Multi-Harness Cockpit Interface",
    type: "ui-ux",
    description: "Dense 2-pane telemetry layout for monitoring parallel Claude Code, Codex, and Cursor instances with diff-level breadcrumbs.",
    year: 2026,
    tags: ["Developer Tool", "Information Architecture", "Dark Mode"],
    metrics: "Zero Context Contamination",
  },
  {
    id: "vedherbz-erp-system",
    title: "VedHerbz Manufacturing Design System",
    type: "ui-ux",
    description: "High-density data grid with batch validation states, multi-step compounding wizards, and high-contrast printable QC certificates.",
    year: 2026,
    tags: ["B2B ERP", "High Density UI", "Accessible Formats"],
    metrics: "100% Offline Capable",
  },
  {
    id: "logo-madhav",
    title: "Madhav Thought-Sync Identity",
    type: "logo",
    description: "Geometric monogram combining the letter 'M' with dual-wave synchronization arches representing telegram and desktop bridge.",
    year: 2026,
    tags: ["Brand Identity", "Vector Geometry", "Symbol"],
    palette: ["#14B8A6", "#080808"],
  },
  {
    id: "logo-capkit",
    title: "CapKit Framing Mark",
    type: "logo",
    description: "Calm lens-bracket glyph designed on an 8x8 pixel grid for high legibility at 16px taskbar and 512px app icon sizes.",
    year: 2026,
    tags: ["App Icon", "Pixel Grid", "Branding"],
    palette: ["#2DD4BF", "#0D0D0C"],
  },
  {
    id: "logo-freesiteshub",
    title: "FreeSitesHub Compass",
    type: "logo",
    description: "Open-source exploration beacon symbolizing free builder resources across the open web.",
    year: 2026,
    tags: ["Identity", "Web Icon", "Monochrome"],
  },
  {
    id: "interaction-spring-tabs",
    title: "Inertial Tab Switcher & Underline Slider",
    type: "interaction",
    description: "Physics-based tab navigation with dynamic width tracking and zero-jank hardware-accelerated transforms.",
    year: 2026,
    tags: ["Motion", "Physics Interaction", "CSS GPU"],
    metrics: "320ms Cubic Bezier",
  },
];
