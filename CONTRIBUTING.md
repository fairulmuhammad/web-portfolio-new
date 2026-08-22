# Contributing to Fairul's Portfolio

Thank you for your interest in contributing to this portfolio website. This document provides guidelines for anyone who wants to help improve it.

## Project Overview

This is a personal portfolio website for a software engineer specializing in backend, infrastructure, and DevOps. Built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis.

**Stack:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis (smooth scroll)
- Vercel (deployment)

## How to Contribute

### 1. Fork and Clone

```bash
git clone https://github.com/fairulmuhammad/web-portfolio.git
cd web-portfolio/site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Run Build and Lint

Before submitting changes, ensure:

```bash
npm run build    # Must pass
npm run lint     # Must pass (zero errors)
```

TypeScript errors are not acceptable — fix them before pushing.

### 5. Make Your Changes

Follow these rules:

- **Keep it simple.** Readable code over clever code.
- **No new dependencies** without explicit approval.
- **Separate content from UI.** Edit `data.ts` to change portfolio content, not component files.
- **Follow the design system.** Use tokens from `app/globals.css` (--color-accent, --color-dark-900, etc.).
- **Respect accessibility.** All interactive elements must have proper `aria-label` and keyboard focus states.
- **Motion has purpose.** Only use Framer Motion where it improves UX. No decorative animations.

### 6. Commit Messages

Use conventional commits:

```
feat: add new project card component
fix: resolve hero animation flicker on mobile
docs: update EXPERIENCE.md with latest internship
chore: upgrade tailwindcss to v4
```

### 7. Submit a Pull Request

- Describe what changed and why.
- Include screenshots if visual changes are made.
- Confirm `npm run build` and `npm run lint` pass locally.

## Content Updates

To update portfolio content (projects, experience, skills), edit only `data.ts`:

```typescript
// Edit this file to update CV content
export const projects = [...]
export const experiences = [...]
export const skillGroups = [...]
```

Do not hardcode content inside component files.

## Design Tokens

Primary accent color: `#B4A7D6` (Soft Lavender)

Custom colors defined in `app/globals.css`:
- `--color-accent`: #B4A7D6 (soft lavender)
- `--color-accent-light`: #E0D7FF (starlight lavender)
- `--color-dark-900`: #07070d (deep space black)
- `--color-dark-800`: #0e0e16 (midnight dark)
- `--color-gray-400`: #a3a3a3 (muted text)

Fonts:
- `--font-inter`: Inter (headings, body)
- `--font-mono`: JetBrains Mono (labels, metadata)

## Known Issues

- Browser automation tools (playwright/chromium) not available on dev server — visual testing must be done manually via browser or Vercel preview URL.
- See `NOTES.md` for detailed blocker documentation.

## Questions?

Open an issue or reach out to the project owner directly.
