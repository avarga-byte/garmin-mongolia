import express from 'express'

const router = express.Router()
const locales = ['en', 'mn']
const fenix9Skus = '010-04761-10 010-04762-00 010-04762-10 010-04763-00 010-04763-10 010-04335-15 010-04335-25 010-04335-05 010-04335-85 010-04336-25 010-04336-05 010-04336-15 010-04337-15 010-04337-05 010-04337-25 010-04338-05 010-04339-05 010-04335-10 010-04335-00 010-04335-20 010-04335-40 010-04335-80 010-04336-00 010-04336-10 010-04336-20 010-04336-40 010-04337-00 010-04337-10 010-04337-20 010-04337-40 010-04338-00 010-04339-00'.split(' ')
const productIds = ['enduro-4', 'fenix-9', 'cirqa', 'approach-s72', 'fenix-9-pro', 'approach-z10', 'forerunner-170', 'descent-mk3i', 'instinct-3-alpine', 'tactix-8', 'varia-820', 'approach-j1', 'approach-g82', 'xero-l60i', 'venu-x1']
const skus = { '010-04799-00': 'enduro-4', '010-04761-00': 'fenix-9', ...Object.fromEntries(fenix9Skus.map((sku) => [sku, 'fenix-9'])), '010-04337-00': 'fenix-9', '010-04675-00': 'cirqa', '010-04148-00': 'approach-s72' }
const categories = ['smartwatches', 'sports-fitness', 'outdoor-recreation']

// Contract mirrors Geoshop's Prisma GarminProduct + Image + Specification records.
// Public reads must be projected by the authenticated Geoshop adapter; never accept
// stock or price writes from this storefront.
const productSchema = {
  id: 'string', sku: 'part number string', upc: 'string|null', slug: 'string', name: 'string',
  summary: 'string', description: 'string', images: [{ url: 'string', alt: 'string', sortOrder: 'number' }],
  price: { amount: 'number', currency: 'MNT' }, availability: { inStock: 'boolean', quantity: 'number' },
  variantGroups: [{ id: 'string', label: 'string', options: [{ value: 'string', label: 'string' }] }],
  variants: [{ sku: 'part number string', upc: 'string|null', options: 'object keyed by group id', images: ['image'] }],
  specifications: [{ title: 'string', rows: [['label', 'value']] }],
  inTheBox: ['string'], maps: ['object'], accessories: ['object'], compatibleDevices: ['object'],
  frequentlyBoughtTogether: ['object'], supportResources: { manual: 'url|null', software: 'url|null', support: 'url|null' },
}

router.get('/integration', (_req, res) => res.json({
  source: 'geoshop.mn', publicBasePath: '/api/garmins', adminBasePath: '/api/admin/garmin',
  state: 'adapter-required', productSchema,
  endpoints: {
    products: 'GET /api/garmins?type=&series=&featured=&isVisible=true',
    product: 'GET /api/garmins/garmin?id={productId}',
    adminProducts: 'GET /api/admin/garmin/products (admin session)',
    create: 'POST /api/garmins (admin session)',
    update: 'PATCH /api/garmins/garmin?id={productId} (admin session)',
    images: 'POST /api/auth/cloudinary-sign then upload to Cloudinary; save returned image on product',
    linkUpc: 'POST /api/admin/garmin/upc {upc,partNumber} (finance/admin session)',
  },
  identifiers: { sku: 'Garmin partNumber', upc: 'package barcode attached to one GarminProduct partNumber; variants are separate products' },
  commerce: 'price, availability, cart quote, and orders need a Geoshop-owned server-side adapter',
}))

router.get('/health', (_req, res) => res.json({ ok: true }))
router.get('/config', (req, res) => {
  const country = req.get('cf-ipcountry') || req.get('x-country-code') || (process.env.NODE_ENV !== 'production' ? req.query.country : null) || null
  res.json({ country, suggestedLocale: country === 'MN' ? 'mn' : 'en', supportedLocales: locales, currency: country === 'MN' ? 'MNT' : null })
})
router.get('/products', (req, res) => {
  const locale = locales.includes(req.query.locale) ? req.query.locale : 'en'
  res.json({ locale, source: 'local-catalog-preview', integration: '/api/v1/integration', items: productIds.map((id) => ({ id, href: `/p/${id}` })) })
})
router.get('/products/:id', (req, res) => {
  const id = skus[req.params.id] || req.params.id
  return productIds.includes(id)
    ? res.json({ id, sku: skus[req.params.id] ? req.params.id : Object.keys(skus).find((sku) => skus[sku] === id) || null, locale: locales.includes(req.query.locale) ? req.query.locale : 'en', images: [], variantGroups: [], variants: [], specifications: [], inTheBox: [], maps: [], accessories: [], compatibleDevices: [], frequentlyBoughtTogether: [], supportResources: { manual: null, software: null, support: null }, source: 'catalog-integration-pending' })
    : res.status(404).json({ error: 'PRODUCT_NOT_FOUND' })
})
router.get('/categories', (_req, res) => res.json({ items: categories.map((id) => ({ id, href: `/c/${id}` })) }))
router.post('/cart/quote', (_req, res) => res.status(501).json({ error: 'COMMERCE_PROVIDER_NOT_CONFIGURED' }))

export default router
