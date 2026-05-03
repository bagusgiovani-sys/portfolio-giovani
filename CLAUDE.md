# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

No test suite exists.

## Architecture

**Stack:** Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS v4, Framer Motion.

**Single-page portfolio.** `src/app/page.tsx` renders all 9 sections sequentially (Hero → About → Skills → WhyMe → Projects → Experience → Testimonials → FAQ → Contact). The entire page is `'use client'` due to the SplashScreen state gate.

**Content is centralized.** `src/lib/data.ts` is the single source of truth for all portfolio content — text, images paths, links, skill levels, experience entries. When updating content, edit data.ts, not the section components. Exceptions: `WhyMeSection.tsx` has a local `comparisons` array (should be using `whyMeData` from data.ts but currently doesn't), and `Footer.tsx` hardcodes `socialLinks` locally.

**CSS token system has two layers** — both defined in `src/app/globals.css`:
1. `@theme { --color-brand-one … }` — custom brand palette (brown/tan brand colors, purple primary, orange secondary). Use these for all new styling: `bg-brand-one`, `text-brand-four`, `bg-primary`, etc.
2. `:root { --background: oklch(…) }` — shadcn/ui-generated tokens. Tailwind utility classes like `bg-background`, `text-foreground`, `text-muted-foreground` map here via `@theme inline`.

**Carousel pattern** is used in both `SkillSection` and `ProjectSection` — shows 3 cards (left/center/right), desktop has hover activation + nav buttons, mobile has swipe-only via the `useSwipe` hook. `NavButton` is a sub-component duplicated in both files.

**Animations:** Framer Motion `whileInView` with `viewport={{ once: true }}` for scroll-triggered entrance. `DraggableTicker` in `AboutSection` uses manual `requestAnimationFrame` (not Framer Motion) for performance.

**Contact form** posts to a hardcoded Formspree endpoint in `ContactSection.tsx` (not in data.ts or env vars).

## Known Issues

- `/assets/icons/feedback/` directory does not exist — testimonial logo images are broken 404s
- `src/lib/data.ts` line 7: unused import `{ sub }` from `framer-motion/client`
- Projects 5 and 6 in `projectsData` have placeholder `https://example.com/` links
- `contactData.socials` in data.ts has `#` placeholders (Footer.tsx uses real URLs instead)
- `globals.css` `.gradient-primary` and `.text-gradient` reference `--color-primary-700` / `--color-primary-500` which are not defined — these classes are broken
- `AboutSection.tsx` line 490 has a corrupted Tailwind class with excess whitespace
