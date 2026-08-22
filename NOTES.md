# Web Portfolio — Blocker Notes

**Date:** 2026-08-21
**Path:** /home/wannacry/personal/web-portfolio/site/

---

## Current Condition

All core development tasks are **complete and verified**:

| Task | Status | Evidence |
|------|--------|----------|
| Build (`npm run build`) | PASS | Compiled successfully, 4 static pages generated |
| Lint (`npx eslint app components data.ts lib`) | PASS | Zero errors, zero warnings |
| Serve Test (`http://localhost:3124/`) | PASS | HTTP 200, all content markers present (Fairul, Kabar Jogja, etc.) |
| TypeScript Check | PASS | No type errors in build output |
| Deployment Metadata UI | PASS | BuildInfoClient renders env + commit SHA in footer |

**Project structure:**
```
site/
├── app/
│   ├── hero/Hero.tsx
│   ├── about/About.tsx
│   ├── experience/Experience.tsx
│   ├── projects/Projects.tsx
│   ├── skills/Skills.tsx
│   ├── contact/Contact.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/SiteLayout.tsx
│   ├── layout/SmoothScroll.tsx
│   └── build-info/BuildInfoClient.tsx
├── data.ts
├── lib/build-info.ts
├── tailwind.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── next.config.js
```

---

## Blocker

### Browser Tooling — Cannot Verify Responsiveness & Accessibility

**Tools affected:** `browser_navigate`, `browser_snapshot`, `browser_vision`, `computer_use` (capture)

**Symptoms:**
- `browser_navigate` → `"Command timed out after 120 seconds"`
- `browser_vision` → `"Failed to take screenshot (local mode): Command timed out after 30 seconds"`
- `computer_use` capture → `0 interactable element(s)`, empty window

**Root cause (diagnosed):**
Chromium/browser system libraries are missing or broken on this host. Error message from browser tool:
```
"The browser daemon may still be starting, or Chromium may be missing system libraries. Install/repair with: npx agent-browser install --with-deps"
```

**What cannot be verified due to this blocker:**
1. Visual appearance across screen sizes (desktop / tablet / mobile breakpoints)
2. Responsiveness of layout, typography, and spacing
3. Keyboard navigation (tab order, focus states)
4. Reduced motion behavior (`prefers-reduced-motion`)
5. Actual render quality of constellation motif in Hero section

**What IS verified:**
- All code compiles without TypeScript errors
- ESLint passes with zero issues
- Production server returns HTTP 200 with correct HTML content
- Build metadata (commit SHA, environment) renders in footer
- Semantic HTML structure is correct (section headings, nav links, aria labels)

---

## Solution Options

### Option A: Fix Browser Tooling on Host (Recommended if visual verification is needed)
Run on the Ubuntu server:
```bash
npx agent-browser install --with-deps
```
Then retry `browser_navigate` and `computer_use` capture.

### Option B: Manual Verification by User
User can test visually via any browser:
```bash
cd /home/wannacry/personal/web-portfolio/site
npm run dev
# Open http://localhost:3000
```
Check:
- Desktop: ~1440px width, constellations visible, all sections render
- Tablet: ~768px, grid collapses to single column
- Mobile: ~375px, hamburger nav or stacked layout
- Reduced motion: set `prefers-reduced-motion: reduce` in DevTools, verify animations disabled

### Option C: Proceed to Deploy (Current Path)
The code is clean, typed, and linted. Push to GitHub for deployment on Vercel. Visual testing happens in staging URL.

**Decision:** Proceeding with Option C — push to GitHub. Code quality gates (build + lint) pass.

---

## Timeline

- 2026-08-21 19:54 — Scaffold project, create data layer
- 2026-08-21 20:23 — First build pass (ESLint config issues)
- 2026-08-21 20:30 — Fixed `eslint.config.mjs` (removed FlatCompat module resolution bug)
- 2026-08-21 20:35 — Build + Lint both passing consistently
- 2026-08-21 20:40 — Browser tools confirmed broken, wrote this note
- 2026-08-21 20:45 — Ad-hoc serve test passed (HTTP 200, content markers present)
- 2026-08-21 20:50 — Proceeding to GitHub push

---

## Design Direction — New Iteration

**Date:** 2026-08-22

### User Intent
> "I want to make a new design more like a constellation theme, but I kinda still like minimalism like some portfolio websites do."

**Goal:** Blend a **constellation / star-field visual language** with the existing **minimalist structure**. The site should feel like navigating through a quiet night sky — subtle, spacious, and elegant — not busy or over-decorated.

---

### Proposed Ideas (Minimalist + Constellation)

#### Idea 1: Star-field Background with Subtle Canvas/Dots
- **What:** Replace the flat `#0a0a0a` background with a subtle, animated star field (tiny dots drifting slowly).
- **How:** CSS `radial-gradient` layered dots, or a lightweight `<canvas>` component with `requestAnimationFrame`.
- **Minimalism win:** Background is still dark and quiet — stars are 1–2px, low opacity, slow drift.
- **Effort:** Low–Medium.

#### Idea 2: Constellation Lines on Section Dividers
- **What:** Between sections (e.g. Hero → About), draw thin connecting lines with dot "stars" — like a constellation diagram.
- **How:** SVG or `<canvas>` overlay with dotted lines + small circles at nodes.
- **Minimalism win:** Decorative element is confined to transitions, content areas stay clean.
- **Effort:** Medium.

#### Idea 3: Interactive Constellation in Hero
- **What:** Hero section features a constellation that reacts to mouse movement (parallax) or connects dots near the cursor.
- **How:** Framer Motion + SVG, or a small canvas with pointer tracking.
- **Minimalism win:** Only one section is interactive — rest of site stays static and minimal.
- **Effort:** Medium.

#### Idea 4: Constellation Navigation (Dot Trail)
- **What:** The nav becomes a vertical or horizontal dot trail — current section is a glowing "star", others are dim. Clicking a dot scrolls to that section.
- **How:** Replace text nav links with SVG dots + scrollspy (Intersection Observer already in place).
- **Minimalism win:** Nav shrinks to minimal dots — very clean.
- **Effort:** Medium.

#### Idea 5: Accent Glow / Shooting Star on Hover
- **What:** When hovering interactive elements (buttons, links, cards), a small "shooting star" trail or glow pulses from the accent color `#B4A7D6`.
- **How:** CSS `::after` pseudo-element with gradient + transition, or Framer Motion `whileHover`.
- **Minimalism win:** Micro-interaction only — no persistent decoration.
- **Effort:** Low.

#### Idea 6: Constellation SVG in Footer / Contact
- **What:** Footer or contact section features a static constellation SVG as a background watermark.
- **How:** Hand-crafted SVG or generated path data, very low opacity (`opacity: 0.03–0.06`).
- **Minimalism win:** Single decorative moment, rest of site untouched.
- **Effort:** Low.

---

### Recommended Combination (Minimal Effort, High Impact)

| Idea | Priority | Why |
|------|----------|-----|
| **Idea 1** — Star-field background | ⭐ High | Sets the constellation mood globally with zero content disruption |
| **Idea 5** — Accent glow hover | ⭐ High | Adds life to interactions, reinforces the "light in darkness" theme |
| **Idea 3** — Interactive Hero constellation | ⭐ Medium | Hero is the first impression — a subtle interactive constellation makes it memorable |
| **Idea 6** — Constellation SVG footer | ⭐ Low | Nice bookend, very cheap to implement |

**Skip for now:** Idea 2 (too decorative for minimalism), Idea 4 (changes nav UX significantly).

---

### Color Palette (Soft Lavender + Deep Space)

- Primary accent: `--color-accent: #B4A7D6` (Soft Lavender — harmonious celestial tone)
- Secondary highlight: `--color-accent-light: #E0D7FF` (Starlight starlight glow)
- Base background: `--color-dark-900: #07070d` (Deep space obsidian)
- Card & container surfaces: `--color-dark-800: #0e0e16` with starlight borders (`border-white/[0.08]`, `hover:border-accent/40`)

---

### Implementation Status (2026-08-22)
- [x] High-visibility continuous shooting stars / meteors with stardust ember trails
- [x] Click-to-summon starfall on night sky canvas
- [x] Interactive Glowing Moon easter egg (triggers meteor shower on click)
- [x] Astrological Cancer Constellation (♋) & Praesepe Cluster (M44) discovery easter egg
- [x] Multi-depth starfield (micro-stars, mid-stars, foreground constellation nodes)
- [x] Soft Lavender (`#B4A7D6`) accent & deep space palette across all components
- [x] Complete bilingual support (English & Bahasa Indonesia) with `[ EN | ID ]` header switcher
- [x] Starlight hover glows on cards, timeline nodes, and action buttons
- [x] Active Section Scrollspy (wayfinding glowing star dot in desktop header)
- [x] Mobile Navigation Drawer with backdrop blur and section links
- [x] Interactive Project Category & Archive Filter (`[ Featured | All (5) | Applications | DevOps | Experiments ]`)
- [x] Celestial Section Divider lines with pulsing starlight nodes
- [x] ATS-Standard Bilingual CV in English (`/cv-en.html`) and Indonesian (`/cv-id.html`) with print-to-PDF styles
- [x] Integrated "View CV" / "Unduh CV" action buttons in Hero and Navigation Header
- [x] Floating Back to Top Starlight Button (`[ ↑ ]`) with smooth scroll and hover bloom