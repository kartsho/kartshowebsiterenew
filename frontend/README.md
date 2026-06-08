# Kartsho Frontend

Legacy mirror of the Kartsho frontend.

Use the repository root for builds and deployments.

## Development

- `npm install`
- `npm run dev`

## Production

- `npm run build`
- Deploy the generated `dist/` folder
- Prefer the repository root `package.json` for production deployment.

## Deployment Notes

- Live layout and asset-path fixes were published in commit `6fee29d`.
- Hostinger needs the built `dist/` output, not just the source files.
- The app uses SPA routing, so the deployed server must rewrite all routes to `index.html`.
- API requests must be excluded from the SPA rewrite. `/api/*` should reach the backend, not `index.html`.
- Static assets like `noise.svg`, PDFs, and the favicon are now base-aware so they work under live hosting too.

## Recent Fixes

- Fixed the gym route import casing issue for Linux deployments.
- Fixed Hostinger production layout breaking from stale root-relative asset paths.
- Added `.htaccess` for SPA fallback on Apache hosting.
