# Bagus Giovani — Portfolio

Personal portfolio of Bagus Giovani, Frontend Developer specializing in React, TypeScript, and Next.js.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript 5**
- **Tailwind CSS v4** · **Framer Motion** · **Lucide React**
- Contact form via [Formspree](https://formspree.io)

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # add NEXT_PUBLIC_FORMSPREE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev      # dev server
npm run build    # production build
npm run lint     # ESLint
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_URL` | Formspree endpoint for the contact form |

## Project Structure

All portfolio content lives in `src/lib/data.ts` — edit that file to update text, links, skills, projects, and testimonials without touching component files.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers a production deploy automatically.
