# oyousaf.dev

Personal portfolio of Omar, a frontend web developer. It's a static Astro site with a project archive, a case-study page per project, and a small raymarched "watermelon" hero written in raw WebGL, with no 3D library.

**Live:** [https://oyousaf.dev](https://oyousaf.dev)

## Stack

- **Astro 7**: static output and cross-document view transitions, with fonts self-hosted through the Astro Fonts API (Fontsource).
- **TypeScript 6**.
- **Tailwind CSS 4**: CSS-first `@theme`, with light and dark themes.
- **Raw WebGL** for the hero field: about 4 KB, paused off screen, still under reduced motion.
- **EmailJS REST API** for the contact form, with no SDK. Preview mode applies in dev or when keys are missing.
- **Vercel** hosting with Vercel Analytics and security headers (`vercel.json`).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run lint` | ESLint |
| `npm run build` | Production build to `dist/` |
| `npm run resolve-favicons` | Print `favicon`/`accent` values for each project |

## Adding a project

1. Add an entry to the top of `projects` in `src/constants/index.ts`.
2. Save a 1600×1000 WebP of the live hero to `public/textures/project/project<N>.webp`.
3. Run `npm run resolve-favicons` and paste the project's `favicon`/`accent` into the entry.

The first six projects are featured cards; the rest appear in the archive. Every project gets a `/work/<slug>` page, plus sitemap and `llms.txt` entries.

## Environment

The contact form reads `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID` and `VITE_APP_EMAILJS_PUBLIC_KEY` at build time. These are set in the Vercel project.
