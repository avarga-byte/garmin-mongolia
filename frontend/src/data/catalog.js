// Category pages and product listings snapshotted from garmin.ae (see scripts/import-catalog.mjs).
import catalog from './catalog.json'
import { slugify } from './site'

export const { series } = catalog

// Menu labels and older home-page links mapped to the garmin.ae category slugs.
const aliases = {
  smartwatches: 'wearables-smartwatches',
  'all-smartwatches': 'wearables-smartwatches',
  'wearables-for-women': 'women-wearables',
  'marq-luxury-collection': 'luxury-smartwatches',
  running: 'running-smartwatches',
  multisport: 'multisport-smartwatches',
  'multisport-triathlon': 'multisport-smartwatches',
  adventure: 'adventure-smartwatches',
  swimming: 'swimming-smartwatches',
  diving: 'dive-computers-smartwatches',
  golf: 'golf-gps-devices-smartwatches',
  'fitness-health-tracking': 'activity-fitness-trackers',
  'kids-wearables': 'kids-wearables-fitness-activity-trackers',
  accessories: 'wearables-smartwatches-accessories',
  'smartwatch-accessories': 'wearables-smartwatches-accessories',
  'tacx-indoor-cycling': 'indoor-trainers',
  'scales-heart-rate-monitors': 'scales-monitors',
  'handheld-gps': 'handhelds',
  rangefinders: 'ranging',
  'car-navigators': 'cars',
  'motorcycle-navigators': 'motorcycles',
  'truck-navigators': 'trucks',
  'racing-radar': 'motorsports',
  'dash-cams': 'dash-cams-reverse-cameras',
  fishfinders: 'chartplotters',
  'marine-smartwatches': 'handhelds-wearables-marine',
  'aviator-smartwatches': 'aviation',
}

export function findCategory(slug) {
  const key = aliases[slug] ?? slug
  return catalog.categories.find((category) => category.slug === key) ?? null
}

// Link for a menu label: the matching category page, or a best-guess slug that shows "not found".
export const categoryHref = (label) => findCategory(slugify(label))?.path ?? `/c/${slugify(label)}`

export const categoryProducts = (category) => category.products.map((sku) => catalog.products[sku])

export const findCatalogProduct = (sku) => catalog.products[sku] ?? null

export const formatPrice = (amount) => `AED ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
