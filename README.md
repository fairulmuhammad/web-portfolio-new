# Fairul — Software Engineer Portfolio

Personal portfolio website showcasing backend, infrastructure, and DevOps engineering work.

**Live Demo:** https://fairulmuhammad.vercel.app (pending deployment)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Scroll:** Lenis (smooth scrolling)
- **Deployment:** Vercel

## Quick Start

```bash
# Clone and enter the site directory
git clone https://github.com/fairulmuhammad/web-portfolio.git
cd web-portfolio/site

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build & Verify

```bash
npm run build    # Must pass
npm run lint     # Must pass
```

## Project Structure

```
site/
├── app/                    # Next.js App Router pages
│   ├── hero/Hero.tsx       # Landing section with constellation animation
│   ├── about/About.tsx     # Personal bio
│   ├── experience/         # Work history & education
│   ├── projects/           # Featured projects (Kabar Jogja, Internship Tracker, etc.)
│   ├── skills/Skills.tsx   # Technology categories
│   ├── contact/Contact.tsx # Email + social links
│   ├── layout.tsx          # Root layout with fonts + metadata
│   └── page.tsx            # Landing page (scrolls through all sections)
├── components/             # Shared UI components
│   ├── layout/SiteLayout.tsx
│   ├── layout/SmoothScroll.tsx
│   └── build-info/BuildInfoClient.tsx
├── data.ts                 # Single source of truth for all portfolio content
├── lib/build-info.ts       # Server-side build metadata (never exposed to browser)
├── tailwind.config.ts      # Tailwind v4 theme configuration
├── tsconfig.json           # TypeScript strict configuration
├── eslint.config.mjs       # ESLint flat config (Next.js + TypeScript)
└── next.config.js          # Next.js production config (standalone output)
```

## Content Updates

Edit `data.ts` to update portfolio content — do not modify component files for content changes.

## Design System

- **Accent color:** `#B4A7D6` (Soft Lavender)
- **Background:** Deep space dark (`#07070d` → `#0e0e16`) with interactive constellation canvas & shooting stars
- **Typography:** Inter (headings/body), JetBrains Mono (labels/metadata)
- **Visual motif:** Constellation & celestial network (multi-depth starfield, meteors, glowing node cards)

## Deployment

Deploys automatically to Vercel on push to `main`.

No custom server, no Docker, no external databases required.

## License

Private portfolio — not licensed for reuse.
