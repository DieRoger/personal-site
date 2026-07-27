# Migration Analysis — Codebase Audit

**Date:** 2026-07-27
**Project:** Runjie Luo Portfolio V2

---

## Current Architecture Summary

- **Framework:** Next.js 16 (App Router) + TypeScript + TailwindCSS v4
- **CMS:** Sanity (3 schemas: content, project, tag)
- **Icons:** react-icons (feather icons: FiMenu, FiX, FiSearch)
- **Theme:** localStorage-based dark/light with `.dark` class strategy
- **Animation:** Framer Motion (used only in HeroSection)
- **Content:** Sanity CMS → Portable Text rendering

---

## What to Keep (Reusable)

| Component | Notes |
|-----------|-------|
| `layout/Header.tsx` | Structure reusable, needs shadcn/ui + lucide refit |
| `layout/Footer.tsx` | Simple, minimal changes needed |
| `layout/Navigation.tsx` | Good abstraction, needs route list update |
| `shared/Card.tsx` | Pattern reusable, replace with shadcn/ui Card |
| `app/layout.tsx` | Root structure, needs ThemeProvider + font swap |
| `app/robots.ts` | Ready, keep as-is |
| `app/sitemap.ts` | Will need content source change (MDX instead of Sanity) |
| `lib/constants.ts` | Good pattern, update routes |
| `next.config.ts` | Keep, remove Sanity image config later |

---

## What to Remove

| File/Dir | Reason |
|----------|--------|
| `sanity/` | Switch to MDX |
| `sanity.config.ts` | Switch to MDX |
| `sanity.cli.ts` | Switch to MDX |
| `sanity-typegen.json` | Switch to MDX |
| `src/lib/sanity/` | Switch to MDX |
| `src/lib/search.ts` | Fuse.js search not in V2 scope |
| `src/app/search/` | Removed from navigation |
| `src/app/garden/` | Removed from navigation |
| `src/app/admin/` | Sanity Studio removed |
| `src/app/api/revalidate/` | ISR webhook not needed for MDX |
| `src/components/shared/SanityImage.tsx` | Sanity dependency |
| `src/components/shared/SearchInput.tsx` | Search not in V2 |
| `src/app/blog/ContentList.tsx` | Will be replaced by MDX-based listing |
| `src/app/portfolio/ProjectList.tsx` | Will be replaced by new ProjectList |
| `src/components/home/HeroSection.tsx` | Full rewrite |
| `src/components/home/FeaturedProjects.tsx` | Full rewrite |
| `src/components/home/LatestPosts.tsx` | Full rewrite |
| `src/components/home/SkillCloud.tsx` | Full rewrite |
| `src/styles/theme.ts` | Replaced by CSS vars + shadcn/ui theme |
| `src/app/globals.css` | Orphaned file (never imported) |
| `src/components/layout/ThemeToggle.tsx` | Replaced by next-themes |
| `public/*.svg` | Boilerplate, replace with real assets |
| `.env.example` | Remove Sanity vars |

---

## Dependencies to Install

- `lucide-react` — replace react-icons
- `next-themes` — dark mode management
- `@radix-ui/*` — via shadcn/ui init
- `next-mdx-remote` — MDX rendering (or `next-mdx`)
- `rehype-pretty-code` or `shiki` — code highlighting
- `geist` — font (via next/font/google)

## Dependencies to Remove

- `@portabletext/react`
- `@sanity/code-input`
- `@sanity/image-url`
- `next-sanity`
- `sanity`
- `react-icons`
- `styled-components`
- `fuse.js`

---

## Migration Steps (Ordered)

```
Step 1:  Design System — Font, Color, Icons, Theme, shadcn/ui, Motion, Cleanup
Step 2:  Homepage — Hero, Skills, Featured Project, Blog
Step 3:  About — Timeline, Skills, Interests
Step 4:  Projects — Grid layout + Project Detail pages
Step 5:  Finalize — Resume, Contact, SEO, Analytics
```
