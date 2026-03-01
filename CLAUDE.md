# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

This repo is transitioning: `portifolio-next/` is the old Next.js portfolio (reference only). The **active project** is `blog/`, a heavily customized [AstroPaper](https://github.com/satnaing/astro-paper) theme that will become both the blog and the new portfolio. All new work goes in `blog/`.

## Working directory

Always run commands from inside `blog/`:

```bash
cd blog
```

## Commands (blog/)

```bash
pnpm install          # install deps (requires pnpm)
pnpm run dev          # dev server at http://localhost:4321
pnpm run build        # astro check + build + pagefind index generation
pnpm run preview      # preview the production build (needed to test search)
pnpm run lint         # ESLint
pnpm run format       # Prettier
```

> The Pagefind search index is only built during `pnpm run build`. Run `pnpm run preview` after to test `⌘K` search locally.

## i18n

All UI strings are centralized in `blog/src/i18n/index.ts`. Import with:

```ts
import { t, MONTHS } from "@/i18n";
```

- `t("key")` returns the Portuguese (pt-BR) translation
- `MONTHS` is a 0-indexed array of month names in Portuguese
- `src/config.ts` has `lang: "pt-BR"` and `timezone: "America/Sao_Paulo"`

When adding new UI strings to components: add the key+value to `src/i18n/index.ts` first, then use `t("key")` in the template. **Do not** use `t()` inside `<script>` tags (client-side JS) — hardcode the Portuguese string directly there.

## Architecture

### Tech stack

- **Astro 5** with MDX, Tailwind CSS 4 (Vite plugin), Pagefind (static search), Satori (OG images)
- **TypeScript** throughout; Astro content collections with Zod schemas

### Key configuration files

| File | Purpose |
|---|---|
| `src/config.ts` | Single `SITE` constant — site URL, author, feature flags (`showGalleries`, `showArchives`, `introAudio`, etc.) |
| `src/constants.ts` | `SOCIALS` and `SHARE_LINKS` arrays (icons + hrefs) |
| `src/content.config.ts` | Zod schemas for `blog` and `galleries` collections; defines `BLOG_PATH` and `GALLERY_PATH` |
| `astro.config.ts` | Astro integrations, Shiki code transformers, experimental local fonts (`Wotfard`, `Cascadia Code`, `Cartograph CF` + Google `Sriracha`) |

### Content

- **Posts:** `src/data/blog/*.md` or `*.mdx` — required frontmatter: `title`, `pubDatetime`, `description`, `tags`
- **Galleries:** `src/data/galleries/<slug>/index.md` + image files alongside it — images ordered alphabetically (use numeric prefixes `01-`, `02-` for ordering)

### Layouts

- `src/layouts/Layout.astro` — root layout; includes global backdrop effects (grid, ambient glow, cursor glow, noise), `SearchModal`, and all font `<Font>` tags
- `src/layouts/PostDetails.astro` — post detail with glassmorphism TOC, prev/next aurora navigation
- `src/layouts/Main.astro`, `AboutLayout.astro` — used by listing and about pages

### Design system

The entire site uses a **Terminal/Cyberpunk** aesthetic. Key patterns used across components:

- **Glassmorphism:** `backdrop-filter: blur(...)`, semi-transparent backgrounds, subtle borders
- **Mouse-reactive aurora:** radial gradient glows that follow cursor position via JS setting CSS vars (`--mouse-x`/`--mouse-y`, `--mx`/`--my`, etc.)
- **oklab gradients:** all gradients use `color-mix(in oklab, ...)` to avoid banding
- **Noise texture:** `/public/noise.png` overlaid globally via `Layout.astro`

### Fonts

| Variable | Font | Usage |
|---|---|---|
| `--font-wotfard` | Wotfard (local) | Body text |
| `--font-cartograph` | Cartograph CF (local) | Code, mono labels |
| `--font-cascadia-code` | Cascadia Code (local) | Logo SVG, some mono |
| `--font-sriracha` | Sriracha (Google) | Italics, `h3`, `.spicy` class |

### Feature flags in `src/config.ts`

- `showGalleries: false` — disables `/galleries` routes and hides nav link
- `showArchives: false` — hides `/archives` and removes it from sitemap
- `introAudio.enabled: false` — removes the audio player from the hero completely

### Search

Powered by Pagefind. The `⌘K` / `Ctrl+K` modal (`src/components/SearchModal.astro`) lazy-loads the Pagefind UI on first open. The search page at `/search` is a separate full-page experience. Both require a production build to function.

### Image galleries

`GalleryEmbed` is registered globally in `PostDetails.astro`'s render components map — usable in `.mdx` posts without importing:

```mdx
<GalleryEmbed slug="my-gallery" />
<GalleryEmbed slug="my-gallery" limit={4} cols={2} showLink={false} />
```
