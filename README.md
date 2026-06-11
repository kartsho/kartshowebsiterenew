# Kartsho Frontend

React + Vite frontend for the Kartsho site.

## Source Of Truth

- Deploy from the repository root.
- Use the root [`package.json`](./package.json), not `frontend/package.json`, for production builds.
- `npm run build` now syncs `frontend/` into the root app before building, so edits in `frontend/src` and `frontend/public` are what Hostinger deploys.
- The root `dist/` folder is the deployment artifact.

## Development

- `npm install`
- `npm run dev`

## Production

- `npm run build`
- Deploy the generated `dist/` folder
- On Hostinger, either publish the root `dist/` output, or keep the app rooted at `./` and let the root [`.htaccess`](./.htaccess) rewrite requests into `dist/`.

## Deployment Notes

- Live layout and asset-path fixes were published in commit `6fee29d`.
- Hostinger needs the built `dist/` output, not just the source files.
- If the platform forces the root directory to `./`, the repository root `.htaccess` now routes the app and assets from `dist/`.
- The app uses SPA routing, so the deployed server must rewrite all routes to `index.html`.
- Static assets like `noise.svg`, PDFs, and the favicon are now base-aware so they work under live hosting too.
- If you see a `frontend/` build path in logs, switch it back to the repository root. The root build is the deploy step, and it syncs `frontend/` automatically first.

## Recent Fixes

- Fixed the gym route import casing issue for Linux deployments.
- Fixed Hostinger production layout breaking from stale root-relative asset paths.
- Added `.htaccess` for SPA fallback on Apache hosting.
