# UX Portfolio

My current personal portfolio site showcasing UX research, strategy, and design engineering case studies. Built with Vue 3 and Vite, deployed on Netlify.

## Tech Stack

- **Vue 3** (Composition API with `<script setup>`)
- **Vite 2.8** for build tooling
- **Vue Router 4** with lazy-loaded case study routes
- **Bootstrap 5** for layout and grid
- **Pinia** for state management
- **Netlify** for hosting (SPA redirect configured)

## Case Studies

- NIH
- New Orleans Bingo
- Global Direct
- Ochsner Building
- Ochsner A/B Testing
- Lao Zi
- Astro Report
- Big Idea Radar

## Development

```sh
npm install
npm run dev       # Start dev server with HMR
npm run build     # Production build to /dist
npm run preview   # Preview production build on port 5050
```

## Project Structure

```
src/
├── assets/          # Images and base CSS (design system)
├── components/      # Shared components (Navbar, Footer, Hero, Background, etc.)
├── router/          # Vue Router config with scroll behavior
├── stores/          # Pinia stores
└── views/           # HomeView, AboutView, and case study pages
```
