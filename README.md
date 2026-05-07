# Bagus Giovani — Frontend Engineer

> Scalable React/Next.js architecture. Pixel-perfect UI. Production-hardened.

Frontend engineer who builds things that hold up under pressure. I shipped an Instagram clone with optimistic UI and centralized error handling — then debugged a broken API live in production. I use AI as a tool. I own every architectural decision.

**[→ View the live portfolio](https://portfolio-giovani.vercel.app)**

---

## Philosophy

Most engineers treat AI like autocomplete. I treat it like a senior reviewer — useful for speed, accountable to me on correctness. Every architecture decision in this codebase went through deliberate reasoning, not prompt-and-paste.

---

## Featured Work

**Instagram Clone** — Not a tutorial project.
- Optimistic UI: state updates immediately, rolls back on failure
- Centralized error handling across all API boundaries
- Debugged a broken production API live — traced the root cause, shipped the fix

This portfolio itself is another example: 9 sections, centralized content in a single `data.ts`, Framer Motion scroll animations, a custom `requestAnimationFrame` ticker that runs at full speed regardless of OS settings.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Contact | Formspree |
| Deployment | Vercel |

---

## Architecture Decisions

**Single source of truth for content.** All portfolio data — text, image paths, links, skill levels, experience entries — lives in `src/lib/data.ts`. Update content without touching component files.

**Custom CSS token system.** Two-layer approach in `globals.css`: brand palette tokens (`--color-brand-one`, `--color-primary`) and shadcn/ui-compatible semantic tokens (`--background`, `--foreground`). Tailwind utility classes map to both via `@theme inline`.

**Carousel pattern.** `SkillSection` and `ProjectSection` share the same carousel architecture: 3-card view (left/center/right), desktop hover + nav buttons, mobile swipe via `useSwipe` hook.

**Performance-first ticker.** `DraggableTicker` in `AboutSection` uses manual `requestAnimationFrame` instead of Framer Motion — keeps animation smooth and decoupled from React's render cycle.

---

## Local Setup

```bash
npm install
cp .env.local.example .env.local   # add NEXT_PUBLIC_FORMSPREE_URL
npm run dev                         # → localhost:3000
```

```bash
npm run build   # production build
npm run lint    # ESLint
```

**Environment variables:**

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_URL` | Formspree endpoint for the contact form |

---

*Built by [Bagus Giovani](mailto:bagusgiovani@gmail.com)*
