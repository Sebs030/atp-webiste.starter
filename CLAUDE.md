# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (also used to verify correctness)
npm run lint     # ESLint via next lint
npm run start    # serve the production build locally
```

There are no tests. Use `npm run build` as the verification gate after every change.

## Architecture

**Next.js 16.4.6 — App Router only.** All routing lives under `app/`. There is no `pages/` directory. The app is a single-page homepage template deployed to **Azure Static Web Apps hybrid mode** (RSC-capable; no static export required).

**Page structure:** `app/layout.tsx` wraps every page with `<Navbar>` + `<Footer>`. `app/page.tsx` composes the homepage from section components in `components/sections/`.

**Styling — Tailwind CSS v4 (CSS-first).** There is no `tailwind.config.ts`. All configuration lives in `app/globals.css`:
- `@import "tailwindcss"` — must be the first import; this is what actually loads the Tailwind engine via `@tailwindcss/postcss`.
- `@theme inline { … }` — maps CSS variables to Tailwind utility tokens (colors, radii, fonts).
- CSS custom properties in `:root` / `.dark` define the color palette using `oklch()`.

**Component library — shadcn/ui "base-nova" style.** This style is built on `@base-ui/react` primitives, **not Radix UI**. Key behavioral differences:
- Use the `render` prop instead of `asChild` to change the rendered element: `<Button render={<a href="…" />}>`.
- When rendering `<Button>` as a non-`<button>` element (e.g. `<a>`), always pass `nativeButton={false}` to suppress the Base UI semantic warning.
- The `form` shadcn component does not exist in base-nova; use `react-hook-form` + `zod` directly.

**`cn()` utility** lives in `lib/utils.ts` and is implemented with `clsx` + `tailwind-merge`. Always import from `@/lib/utils`, never from the `cn` package.

**lucide-react v1.78.0** removed brand icons (Facebook, LinkedIn, Instagram). Use `Globe` or other generic icons as replacements.

**No test suite.** No testing framework is installed.
