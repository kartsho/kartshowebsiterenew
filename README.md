# Kartsho Frontend

React + Vite frontend for the Kartsho site.

## Source Of Truth

- Edit the app inside `src/` and `public/`.
- Run `npm run dev` or `npm run build` from the repository root.
- The root Vite config reads the root app directly, so HMR and production builds read the same files.
- Deploy the `dist/` folder that Vite generates.

## Development

- `npm install`
- `npm run dev`

## Production

- `npm run build`
- Build output is written to the repository root `dist/` folder.
- On Hostinger, keep the app rooted at `./` and set the output directory to `dist`.

## Deployment Notes

- Live layout and asset-path fixes were published in commit `6fee29d`.
- Hostinger needs the built output, not just the source files.
- The app uses SPA routing, so the deployed server must rewrite all routes to `index.html`.
- Static assets like `noise.svg`, PDFs, and the favicon live in `public/` so they work under live hosting too.

## Recent Fixes

- Fixed the gym route import casing issue for Linux deployments.
- Fixed Hostinger production layout breaking from stale root-relative asset paths.
- Added `.htaccess` for SPA fallback on Apache hosting.
