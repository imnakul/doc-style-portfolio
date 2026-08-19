# Design Map

## Spacing Scale
- Base unit: 4px
- Scale: 2px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 26px, 40px, 48px, 52px
- Section vertical gaps: 45px – 51px (~48px rhythm)
- Container padding: 0px (edge-aligned in 972px content viewport)

## Font Hierarchy
- `hero`: 52px / line-height 53px / weight 700 / letter-spacing -1.87px (`DM Sans`)
- `h2`: 20px / line-height 24px / weight 700 / letter-spacing -0.4px (`DM Sans`)
- `body-lead`: 18.5px / line-height 28.7px / weight 400 / max-width 658px (`DM Sans`)
- `card-title`: 16px / line-height 22px / weight 500 & 700 (`DM Sans`)
- `body`: 14px / line-height 20px / weight 400 (`DM Sans`)
- `nav-label`: 13px / weight 500 (`DM Sans`)
- `mono-code`: 13px / weight 400 (`JetBrains Mono`)
- `mono-meta`: 11px / weight 500 (`JetBrains Mono`)
- `micro-badge`: 9px / weight 500 / tracking 0.05em (`JetBrains Mono`)

## Color Palette
- `background`: #080808 (76.6% surface area, warm deep black)
- `surface-primary`: #0B0B0B (card containers and code boxes)
- `surface-secondary`: #0D0D0C
- `surface-elevated`: #100F0E
- `text-primary`: #F4F3F1 (rgb(244, 243, 241), warm off-white)
- `text-secondary`: rgba(244, 243, 241, 0.72)
- `text-muted`: rgba(244, 243, 241, 0.60)
- `text-faint`: rgba(244, 243, 241, 0.30) (for step numbers and subtle hints)
- `accent`: #F5C451 (rgb(245, 196, 81), warm amber/gold for CTAs and metrics)
- `accent-surface`: rgba(245, 196, 81, 0.07) (badge fill)
- `accent-border`: rgba(245, 196, 81, 0.35) (1px badge/input stroke)
- `border`: rgba(255, 255, 255, 0.08) (1px solid hairline)
- `border-hover`: rgba(255, 255, 255, 0.12)

## Image Ratios
- `thumbnail`: 1:1 (62px × 62px circular/square avatar)

## Component Tokens
- `radius-badge`: 4px (micro badges such as `NEW`)
- `radius-sm`: 6px (secondary pill buttons and code chips)
- `radius-md`: 8px – 9px (primary CTA buttons: `Get the free course` 8px, `Start the email course` 9px)
- `radius-pill`: 11px (navigation active item highlights)
- `shadow`: none (0px 0px 0px rgba(0,0,0,0); depth generated via 1px hairlines and surface tones)
- `grid`: 2-column documentation layout (fixed left navigation ~240px + right content pane max-width 972px with 2-column 376px/460px asymmetrical content grids)
- `transitions`: `0.15s cubic-bezier(0.4, 0, 0.2, 1)` on color, background-color, and border-color

---

# Taste DNA

### Technical Terminal Aesthetics over Marketing Decor
- **Trigger**: When designing the hero and core value proposition on a developer tool landing page
- **Decision**: Chose an interactive IDE-style 2-column documentation layout with terminal command snippets (`$ npx skills@latest`, `JetBrains Mono`, copy button) over marketing illustration graphics, 3D renders, or gradient hero backdrops
- **Reason**: Because senior engineers evaluate technical tools through executable CLI commands and direct utility rather than abstract decorative marketing imagery
- **Evidence**: Zero hero illustrations or decorative gradient meshes; prominent terminal install boxes with 1px `rgba(255, 255, 255, 0.08)` borders; 108 computed instances of `JetBrains Mono` for commands, badges, and step indices

### Strict Single-Accent Sparsity over Multi-Color Visual Richness
- **Trigger**: When assigning color across navigation, badges, cards, metrics, and interactive elements
- **Decision**: Chose a strictly constrained warm gold (`#F5C451`) occupying under 0.5% of total surface area over multi-color category tags, rainbow gradients, or colored card backgrounds
- **Reason**: Because restricting accent color strictly to primary conversion actions (`Get the free course`, `Start the email course`) and high-signal indicators (`NEW` badge, star count) prevents cognitive noise and guides user focus immediately to key actions
- **Evidence**: Surface area analysis confirms `#080808` and `#0B0B0B` cover >95% of background area; `#F5C451` appears on only 2 primary buttons, 1 star icon, and 1px badge outlines

### Hairline Border Separation over Elevation Drop Shadows
- **Trigger**: When establishing visual boundaries and separation between content cards, sidebar, and sections
- **Decision**: Chose 1px solid hairline borders (`rgba(255, 255, 255, 0.08)`) with subtle surface brightness stepping (`#080808` to `#0B0B0B`) over diffused drop shadows or elevated cards
- **Reason**: Because hard hairlines reflect code editor precision and maintain visual calmness in high-density technical layouts where blurred drop shadows create visual muddiness
- **Evidence**: 0px box shadows across all cards and containers; 48 instances of `1px solid rgba(255, 255, 255, 0.08)` hairline dividers

### Opacity-Stepped Text Hierarchy over Multi-Font/Color Variation
- **Trigger**: When conveying depth, hierarchy, and reading precedence across dense technical information
- **Decision**: Chose single-hue opacity stepping of off-white `#F4F3F1` (`100%`, `72%`, `60%`, `52%`, `30%`) over introducing muted gray secondary palettes or multiple font families
- **Reason**: Because opacity steps on a single warm off-white anchor maintain consistent contrast ratios and color temperature across dark background layers without hue drift dissonance
- **Evidence**: 113 occurrences of `rgba(244, 243, 241, 0.60)`, 66 occurrences of `rgb(244, 243, 241)`, 32 occurrences of 0.72 alpha, 21 occurrences of 0.30 alpha, and 17 occurrences of 0.52 alpha
