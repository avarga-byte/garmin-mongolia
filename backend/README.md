# Storefront integration API

Base path: `/api/v1`. JSON; locale is explicit (`en` or `mn`). Web routes follow Garmin storefront patterns: `/c/{category-slug}`, `/p/{part-number}`, and locale prefix `/mn-MN` or `/en-MN`; product SKU routes and old prototype IDs both resolve. Garmin UAE uses `/c/...` and `/p/{part-number}` while Garmin global uses locale-prefixed category routes. `GET /config` returns `country`, `suggestedLocale`, `supportedLocales`, `currency`. Country is read from trusted `CF-IPCountry` (Cloudflare), then `X-Country-Code` from the trusted reverse proxy; query country exists for local preview only. Explicit locale saved by the visitor wins.

## Routes

- `GET /health` → `{ ok }`
- `GET /config` → locale suggestion and currency context
- `GET /products?locale=en|mn&category=...` → catalog cards
- `GET /products/:id-or-sku?locale=en|mn` → product detail
- `GET /categories?locale=en|mn` → categories
- `POST /cart/quote` → future commerce quote; currently returns `501 COMMERCE_PROVIDER_NOT_CONFIGURED`

Product schema target: `{ id, sku, slug, name, summary, description, images[], price:{amount,currency}, availability, variants[], specs[], locale }`. Catalog remains the source of truth; cached frontend data is prototype fallback. Never use browser country header supplied directly by arbitrary clients for price, tax, or shipping decisions.

Current repo has no credentials, API contract, catalog endpoint, or commerce integration for the live geoshop website. Replace the marked adapter stubs only after the live site's API/auth and stock/price ownership are confirmed. `api.js` deliberately exposes shapes without pretending a provider is connected.
