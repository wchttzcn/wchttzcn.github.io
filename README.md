# wchttzcn.github.io

Personal site for M. Mücahit Tezcan. Astro + React (rendered at build time, zero client JS) + Tailwind CSS v4, TypeScript strict.

## Commands

```sh
npm install
npm run dev       # local dev server
npm run build     # outputs to dist/
npm run preview   # serve dist/ locally
```

## Content

- Edit text, links, experience and projects in `src/data/profile.ts`.
- Replace the CV by overwriting `public/cv/M-Mucahit-Tezcan-CV.pdf` (keep the filename).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repo go to Settings → Pages → Source: GitHub Actions.
