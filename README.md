# Garmin storefront clone

Simple split: `frontend/` holds the React + Vite site; `backend/` holds Express API and production static serving.

## Run

```sh
cd frontend
npm install
npm run dev
```

Vite serves the app at http://localhost:5173. Start the Express production server on port 3000 with `npm run backend` after building (`npm run build`).

## Garmin-style URL and integration scheme

- Mongolia: `/mn-MN/`, `/mn-MN/c/{category}`, `/mn-MN/p/{part-number}`
- English: `/en-MN/`, `/en-MN/c/{category}`, `/en-MN/p/{part-number}`
- API v1: `/api/v1/config`, `/api/v1/categories`, `/api/v1/products`, `/api/v1/products/{id}`, `/api/v1/cart/quote`

Country suggests the first language; the language control overrides and persists it. See `backend/README.md` for response shapes and the live-commerce connection point. Existing catalog API credentials/endpoints are not in this repo, so product/catalog/checkout APIs are contracts, not claimed live integrations yet.
