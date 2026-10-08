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

## Garmin-style URL and integration scheme

- Mongolia: `/mn-MN/`, `/mn-MN/c/{category}`, `/mn-MN/p/{part-number}`
- English: `/en-MN/`, `/en-MN/c/{category}`, `/en-MN/p/{part-number}`
- API v1: `/api/v1/config`, `/api/v1/categories`, `/api/v1/products`, `/api/v1/products/{id}`, `/api/v1/cart/quote`

Country suggests the first language; the language control overrides and persists it. See `backend/README.md` for response shapes and the live-commerce connection point. Existing catalog API credentials/endpoints are not in this repo, so product/catalog/checkout APIs are contracts, not claimed live integrations yet.
