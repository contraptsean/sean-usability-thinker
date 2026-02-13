# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build to /dist
npm run preview   # Preview production build on port 5050
```

No test runner or linter is configured.

## Architecture

Vue 3 SPA portfolio site built with Vite 2.8, Vue Router 4, Bootstrap 5, and deployed to Netlify.

**Key patterns:**
- Components use `<script setup>` (Composition API). Do not use Options API.
- Path alias `@` maps to `./src` (configured in vite.config.js).
- All case study views are lazy-loaded via dynamic imports in the router.
- HomeView is the only eagerly-loaded route.
- The `netlify.toml` redirects all routes to `/` for SPA client-side routing.

**Component hierarchy:**
- `App.vue` renders: `GeometricBackground` + `TheNavbar` + `<RouterView>` + `TheFooter`
- `HomeView` renders: `IntroHero` + `ProjectsSection` (research/strategy cards) + `DesignSection` (engineering cards)
- Case study views are standalone pages using the `.case-study` article layout from `base.css`
- `AboutView` uses a full-width banded section layout (different from case studies)

**Design system** (`src/assets/base.css`):
- CSS custom properties for all colors, shadows, radii, transitions, spacing
- Two accent colors: green (`--color-accent`) for links/UI, blue (`--color-blue`) for card borders
- Typography: DM Serif Display for headings, Libre Franklin for body text
- Card tint variables `--color-card-1` through `--color-card-11` for subtle background variation
- `ProjectsSection` defines its own blue gradient palette inline (bg-color1 through bg-color8) in scoped styles
- `.home .card` styles handle all homepage project cards; `.case-study` styles handle article pages

**GeometricBackground.vue:**
- 9 layers of diamond shapes with scroll-triggered opacity
- Uses `position: fixed` so all percentage-based positioning is viewport-relative (not page-relative)
- Hidden on viewports < 900px
- Layer opacity controlled by `layerOpacity(threshold)` function based on `scrollProgress`

**Router scroll behavior:**
- Restores saved position on back navigation
- Smooth scrolls to hash anchors with 100px top offset
- Resets `document.body` focus for accessibility on route changes

## Conventions

- Image assets go in `src/assets/` and are referenced with `@/assets/` (not relative paths like `../assets/`)
- Case study views follow a consistent template: `.case-study.article.container` > `.row.justify-content-center` > `.col-lg-8` with `back-to-projects` link, `h1` header, and `article` content
- Bootstrap 5 grid classes used throughout (col-xl-6, col-lg-6, col-12, etc.)
- Fonts loaded via CDN in `index.html` (Google Fonts, Bootstrap Icons)
