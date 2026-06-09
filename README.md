# Kartsho Frontend

React + Vite frontend for the Kartsho site.

## Source Of Truth

- Deploy from the repository root.
- Use the root [`package.json`](./package.json), not `frontend/package.json`, for production builds.
- The `frontend/` folder is kept as a legacy mirror for compatibility and should not be used as the deploy entry point.

## Development

- `npm install`
- `npm run dev`

## Production

- `npm run build`
- Deploy the generated `dist/` folder
- On Hostinger, point the frontend app at the repository root and publish the root `dist/` output.
- Deploy `backend/` as a separate Node.js app with `server.js` as the entry point.

## Deployment Notes

- Live layout and asset-path fixes were published in commit `6fee29d`.
- Hostinger needs the built `dist/` output, not just the source files.
- The app uses SPA routing, so the deployed server must rewrite all routes to `index.html`.
- API requests must be excluded from the SPA rewrite. `/api/*` should reach the backend, not `index.html`.
- Static assets like `noise.svg`, PDFs, and the favicon are now base-aware so they work under live hosting too.
- If you see a `frontend/` build path in logs, switch it back to the repository root. The root app is the canonical one now.
- Production API base URL defaults to `https://api.kartsho.com`. Set `VITE_API_URL` in Hostinger if you need to override it.
- Add `CLIENT_URL=https://kartsho.com` and `FRONTEND_URLS=https://kartsho.com,https://www.kartsho.com` in the backend environment.
- The backend accepts `MONGODB_URI`, `MONGODB_URL`, or `MONGO_URI` for the MongoDB connection string.

## Recent Fixes

- Fixed the gym route import casing issue for Linux deployments.
- Fixed Hostinger production layout breaking from stale root-relative asset paths.
- Added `.htaccess` for SPA fallback on Apache hosting.
