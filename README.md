# Kartsho Frontend

React + Vite frontend for the Kartsho site.

## Development

- `npm install`
- `npm run dev`

## Production

- `npm run build`
- Deploy the generated `dist/` folder

## Deployment Notes

- Live layout and asset-path fixes were published in commit `6fee29d`.
- Hostinger needs the built `dist/` output, not just the source files.
- The app uses SPA routing, so the deployed server must rewrite all routes to `index.html`.
- Static assets like `noise.svg`, PDFs, and the favicon are now base-aware so they work under live hosting too.

## Recent Fixes

- Fixed the gym route import casing issue for Linux deployments.
- Fixed Hostinger production layout breaking from stale root-relative asset paths.
- Added `.htaccess` for SPA fallback on Apache hosting.
# kartshowebsiterenew
# kartshowebsiterenew
