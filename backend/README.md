# Kartsho Backend

Express API for career applications and related backend routes.

## Hostinger Setup

- Create a separate Node.js app for `backend/`
- Root directory: `backend`
- Start command: `node server.js`
- Install command: `npm install`
- Build command: none

## Environment Variables

- `NODE_ENV=production`
- `PORT=5000`
- `CLIENT_URL=https://kartsho.com`
- `FRONTEND_URLS=https://kartsho.com,https://www.kartsho.com`
- `MONGODB_URI=...`
- Any mail or upload credentials required by the backend services

## Routes

- `GET /` returns a JSON health response
- `GET /api/test` returns the backend test payload
- `POST /api/careers/apply` handles the career application form
