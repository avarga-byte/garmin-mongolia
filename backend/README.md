# Storefront integration API

Base path: `/api/v1`. JSON; locale is explicit (`en` or `mn`). Web routes follow Garmin storefront patterns: `/c/{category-slug}`, `/p/{part-number}`, and locale prefix `/mn-MN` or `/en-MN`; product SKU routes and old prototype IDs both resolve. Garmin UAE uses `/c/...` and `/p/{part-number}` while Garmin global uses locale-prefixed category routes. `GET /config` returns `country`, `suggestedLocale`, `supportedLocales`, `currency`. Country is read from trusted `CF-IPCountry` (Cloudflare), then `X-Country-Code` from the trusted reverse proxy; query country exists for local preview only. Explicit locale saved by the visitor wins.

## Routes

- `GET /integration` → Geoshop integration status, existing route map, identifier semantics, and product data contract. The current process does not proxy Geoshop: its backend still serves demo IDs and `/api/v1/products/:id` placeholders.
- `GET /health` → `{ ok }`
- `GET /config` → locale suggestion and currency context
- `GET /products?locale=en|mn&category=...` → catalog cards
- `GET /products/:id-or-sku?locale=en|mn` → product detail
- `GET /categories?locale=en|mn` → categories
- `POST /cart/quote` → future commerce quote; currently returns `501 COMMERCE_PROVIDER_NOT_CONFIGURED`

Product schema target: `{ id, sku, upc, slug, name, summary, description, images:[{url,alt,sortOrder}], price:{amount,currency}, availability, variantGroups:[{id,label,options:[{value,label}]}], variants:[{sku,upc,options:{groupId:value},price,availability,images[]}], specifications:[{title,rows}], inTheBox[], maps[], accessories[], compatibleDevices[], frequentlyBoughtTogether[], supportResources:{manual,software,support}, locale }`. `sku` is Garmin's `partNumber`; `upc` is the package barcode attached to that exact part number. Each size/color SKU is a separate Geoshop `GarminProduct` row, so each can have a UPC. Variant groups power selectors; variants define valid combinations and SKU; do not combine UPCs across sibling SKUs. Keep Geoshop authoritative for content, images, price and stock. The storefront must read through a server-side adapter and send cart quotes to Geoshop; never write price or stock from this demo API.

## Existing Geoshop contract (inspected)

- Public catalog: `GET /api/garmins` with `type`, `series`, `featured`, `isVisible` filters; detail: `GET /api/garmins/garmin?id={id}`.
- Admin products: `GET /api/admin/garmin/products`; create: `POST /api/garmins`; edit: `PATCH /api/garmins/garmin?id={id}`. Admin UI is `/admin/garmin`; create/edit form sends name, part number, type, series, MNT price, stock buckets, description/features/specifications, and uploaded image references.
- Images: admin requests a signed upload via `GET /api/auth/cloudinary-sign?folder=...`, uploads to Cloudinary, then saves URL/public ID in product `images`.
- UPC: schema has nullable `GarminProduct.upc`; finance/admin links via `POST /api/admin/garmin/upc` using `{ upc, partNumber }`. UPC must be 12–14 digits and part number must match exactly one product. Barcode receiving uses the same relationship and rejects UPC conflicts.
- The `/garmin` storefront is not a second product admin. Integrate its customer-facing surfaces into Geoshop's Next app and reuse the existing authenticated admin, catalog, image and inventory routes. Add a small read-only public projection/adapter for the richer Garmin-clone UI; preserve the existing route semantics and ACLs.
- Missing adapter work before seamless integration: expose UPC and full product/variant/gallery/specification/support projection consistently from the public read endpoint; translate Geoshop inventory into safe availability (do not expose internal stock buckets); add a server-side cart/quote handoff to Geoshop's existing cart/order path; add localized product copy fields or translation lookup. Keep uploads and all writes in authenticated Geoshop admin APIs.

Image upload is not enabled yet. Once admin authentication and storage are configured, add an authenticated multipart upload endpoint that validates image type and size and returns `{ url, alt }`; store the resulting URL in `images[]`. Do not store image bytes in product JSON or expose a public upload route.

Current repo has no credentials, API contract, catalog endpoint, or commerce integration for the live geoshop website. Replace the marked adapter stubs only after the live site's API/auth and stock/price ownership are confirmed. `api.js` deliberately exposes shapes without pretending a provider is connected.
