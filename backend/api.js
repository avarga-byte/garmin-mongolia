import express from 'express'

const router = express.Router()
const locales = ['en', 'mn']
const productIds = ['enduro-4', 'fenix-9', 'cirqa', 'approach-s72', 'fenix-9-pro', 'approach-z10', 'livescope-2', 'forerunner-170', 'descent-mk3i', 'catalyst-r1', 'instinct-3-alpine', 'tactix-8', 'varia-820', 'approach-j1', 'approach-g82', 'xero-l60i', 'venu-x1', 'quatix-8-pro']
const skus = { '010-04799-00': 'enduro-4', '010-04337-00': 'fenix-9', '010-04675-00': 'cirqa', '010-04148-00': 'approach-s72' }
const categories = ['smartwatches', 'sports-fitness', 'outdoor-recreation', 'automotive', 'marine', 'aviation']

router.get('/health', (_req, res) => res.json({ ok: true }))
router.get('/config', (req, res) => {
  const country = req.get('cf-ipcountry') || req.get('x-country-code') || (process.env.NODE_ENV !== 'production' ? req.query.country : null) || null
  res.json({ country, suggestedLocale: country === 'MN' ? 'mn' : 'en', supportedLocales: locales, currency: country === 'MN' ? 'MNT' : null })
})
router.get('/products', (req, res) => {
  const locale = locales.includes(req.query.locale) ? req.query.locale : 'en'
  res.json({ locale, items: productIds.map((id) => ({ id, href: `/p/${id}` })) })
})
router.get('/products/:id', (req, res) => {
  const id = skus[req.params.id] || req.params.id
  return productIds.includes(id)
    ? res.json({ id, sku: Object.keys(skus).find((sku) => skus[sku] === id) || null, locale: locales.includes(req.query.locale) ? req.query.locale : 'en', images: [], specifications: [], inTheBox: [], maps: [], accessories: [], compatibleDevices: [], frequentlyBoughtTogether: [], supportResources: { manual: null, software: null, support: null }, source: 'catalog-integration-pending' })
    : res.status(404).json({ error: 'PRODUCT_NOT_FOUND' })
})
router.get('/categories', (_req, res) => res.json({ items: categories.map((id) => ({ id, href: `/c/${id}` })) }))
router.post('/cart/quote', (_req, res) => res.status(501).json({ error: 'COMMERCE_PROVIDER_NOT_CONFIGURED' }))

export default router
