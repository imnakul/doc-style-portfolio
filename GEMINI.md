## Design Style (Teal Edition)
*Source: https://www.aihero.dev/skills — adapted with teal primary typography & accent*

### Tokens
- Backgrounds: `#080808` (root page background), `#0B0B0B` (card surface), `#0D0D0C` (secondary surface), `#100F0E` (elevated surface)
- Foreground: `#E6FAF8` / `#CCFBF1` (primary teal text), `rgba(204, 251, 241, 0.74)` (secondary text), `rgba(204, 251, 241, 0.52)` (muted text), `rgba(204, 251, 241, 0.30)` (faint indices)
- Accent: `#2DD4BF` (electric mint / teal), `rgba(45, 212, 191, 0.08)` (accent surface), `rgba(45, 212, 191, 0.35)` (accent border), `#042F2E` (accent foreground on CTA button)
- Borders: `1px solid rgba(204, 251, 241, 0.10)`, `rgba(204, 251, 241, 0.22)` (hover state)
- Radii: `4px` (micro badges), `6px` (chips/secondary buttons), `8px`–`9px` (CTAs/cards), `11px` (nav pills)
- Shadows: None (`0px 0px 0px rgba(0,0,0,0)`)
- Fonts: `DM Sans` (editorial/UI typography), `JetBrains Mono` (terminal commands, code snippets, metadata)
- Spacing unit: `4px` (scale: `2px`, `4px`, `6px`, `8px`, `10px`, `12px`, `16px`, `20px`, `26px`, `40px`, `48px`)

### Behavior
- When designing the hero and value proposition, always use an interactive IDE-style 2-column documentation layout with terminal command snippets ($ npx ..., copy button) rather than marketing illustrations.
- When assigning color across navigation, badges, and cards, always restrict accent color (#2DD4BF) to primary CTAs and high-priority indicators (<0.5% surface share).
- When separating content cards, sidebar, and sections, always use 1px solid hairline borders (rgba(204, 251, 241, 0.10)) with subtle surface luminosity steps rather than drop shadows.
- When establishing text hierarchy, always use single-hue opacity stepping of #E6FAF8 (100%, 74%, 52%, 30%) on dark backgrounds.

### Do Not
- Never use drop shadows or blur elevation on dark cards or containers.
- Never use multi-color category tags, rainbow gradients, or colored card backgrounds.
- Never center headings or body paragraphs across documentation or feature lists (maintain 100% left alignment).
- Never use marketing illustration graphics or 3D renders in hero sections when CLI/code snippets can convey direct utility.
