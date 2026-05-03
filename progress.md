# progress.md — Development Log

---

## Session: 2026-05-03

### Completed this session
- [x] Full codebase audit — all files read and analyzed
- [x] Created `CLAUDE.md` — architecture guide, commands, known issues
- [x] Created `fixes.md` — 27 issues catalogued with file paths and fixes
- [x] Architecture scored at **6.0 / 10** (see rating breakdown below)

### Architecture Rating — 2026-05-03

| Dimension | Score | Notes |
|-----------|-------|-------|
| Folder structure | 7/10 | Clean Next.js layout; missing types/ dir |
| Component design | 6/10 | Carousel pattern duplicated; page.tsx forces CSR |
| Data management | 7/10 | Good data.ts pattern; several components ignore it |
| Code quality | 6/10 | Dead import, dead code, placeholder data in prod |
| CSS / design system | 5/10 | Two conflicting token systems; 3 dark mode mechanisms |
| Performance | 6/10 | Unoptimized img tag, no debounce, infinite loops |
| Accessibility | 4/10 | No reduced-motion, cursor:none, no ARIA on modal |
| TypeScript | 7/10 | Strict mode; satisfies keyword; some casts |
| SEO | 5/10 | Only basic title/description; no OG/Twitter/sitemap |
| Testing | 0/10 | No tests at all |
| **Overall** | **~6/10** | |

---

## To-Do List (prioritized)

### P0 — Broken in production right now
- [x] **Fix broken testimonial icons** — logos defined in data.ts but never rendered by component; not a runtime 404 (downgraded, cleaned up in audit)
- [x] **Fix .gradient-primary / .text-gradient CSS** — classes never used in any component; not causing visible bugs (downgraded)
- [x] **Fix corrupted Tailwind class** — `AboutSection.tsx:490` fixed: `bg-black/20` ✓ (2026-05-03)
- [x] **Replace example.com project links** — projects 5 & 6 set to `#` pending real URLs (2026-05-03)

### P1 — Dead code & data consistency
- [x] Delete unused import `{ sub }` from `data.ts:7` (`fixes.md` #6) — done 2026-05-03
- [x] Remove `const [, forceUpdate] = useState(0)` from `AboutSection.tsx:205` (`fixes.md` #7) — done 2026-05-03
- [x] Remove `#__next` CSS block from `globals.css` (`fixes.md` #8) — done 2026-05-03
- [x] Consolidate `contactData.socials` — real URLs added, Footer reads from data.ts (`fixes.md` #5, #16) — done 2026-05-03
- [x] Wire `WhyMeSection.tsx` to use `whyMeData` from data.ts — added `detail` + `ComparisonItem` interface, removed local array (`fixes.md` #14) — done 2026-05-03
- [x] Fix `SplashScreen.tsx` to use `heroData.name` + `heroData.badges[0]` (`fixes.md` #15) — done 2026-05-03
- [x] Remove duplicate ticker item in `heroData.ticker` — replaced with 'Next.js Developer' (`fixes.md` #17) — done 2026-05-03

### P2 — Architecture / refactor
- [x] Fix `page.tsx` — `<SplashGate>` client component created; page.tsx is now a server component (`fixes.md` #19) — done 2026-05-04
- [x] Resolve dual CSS token system — removed 8 dead semantic tokens from `@theme` (overridden by `@theme inline`); fixed `.gradient-primary`/`.text-gradient` to use valid primary tokens (`fixes.md` #20) — done 2026-05-04
- [x] Dark mode — kept `@custom-variant dark` (used by Skeleton `dark:` utility); removed dead color vars from dark `@media` block, kept shadow overrides (`fixes.md` #21) — done 2026-05-04
- [x] Extract `<CardCarousel>` — generic render-prop carousel; SkillSection and ProjectSection now ~60% smaller (`fixes.md` #12) — done 2026-05-04
- [x] Move `NavButton` to `src/components/ui/NavButton.tsx` (`fixes.md` #11) — done 2026-05-04
- [ ] Extract `<ContactInfoList>` from ContactSection (`fixes.md` #13)
- [ ] Move Formspree endpoint to `.env.local` as `NEXT_PUBLIC_FORMSPREE_URL`

### P3 — Performance & accessibility
- [ ] Debounce resize listener in `HeroSection.tsx` (`fixes.md` #22)
- [ ] Replace `<img>` with `<Image>` for profile photo in HeroSection (`fixes.md` #23)
- [ ] Add `@media (prefers-reduced-motion)` for ticker animations (`fixes.md` #25)
- [ ] Fix `cursor: none` → `cursor: zoom-in` on map card (`fixes.md` #24)
- [ ] Add sr-only text to star ratings (`fixes.md` #26)
- [ ] Add `role="alertdialog"` to contact form modal (`fixes.md` #27)

### P4 — SEO & polish
- [ ] Add OpenGraph + Twitter card metadata in `layout.tsx`
- [ ] Add `robots.txt` and `sitemap.xml` to `/public`
- [ ] Update README.md — replace Next.js boilerplate with actual project docs
- [ ] Remove unused shadcn sidebar/chart CSS tokens from globals.css (`fixes.md` #9)
- [ ] Remove dead `footerData` export or wire it up (`fixes.md` #10)

### P5 — Future
- [ ] Add unit/integration tests (Vitest + Testing Library)
- [ ] Add Lighthouse CI to track performance scores
- [ ] Consider adding a resume/CV download link

---

*Last updated: 2026-05-03*
