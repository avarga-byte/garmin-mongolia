# Garmin storefront clone

Simple split: `frontend/` holds the React + Vite site; `backend/` holds Express API and production static serving.

## Run

```sh
cd frontend
npm install
npm run dev
```

Vite serves the app at http://localhost:5173. Start the Express production server on port 3000 with `npm run backend` after building (`npm run build`).

## Category pages

Category pages (`/c/:slug`, e.g. `/c/wearables-smartwatches`) render from `frontend/src/data/catalog.json`, a snapshot of garmin.ae category content and product listings. Refresh it with `npm run import:catalog` inside `frontend/`; add or remove categories in `frontend/scripts/import-catalog.mjs`.
