import productSpecifications from '../productSpecifications.json'
import { findCatalogProduct, formatPrice } from './catalog'
import { featuredProducts } from './home'

// Products with full detail pages. Anything else in the featured list gets a basic page.
const detailedProducts = [
  { id: 'enduro-4', name: 'ENDURO™ 4', kicker: 'Ultraperformance GPS smartwatch', image: 'https://res.garmin.com/homepage/88360/en_US/88360-FC.png', price: '$899.99', sku: '010-04799-00', specKey: 'enduro', battery: 'Up to 36 days (90 days with solar)', water: '10 ATM', highlight: 'GPS + MAPS', description: 'Ultraperformance GPS smartwatch with solar power, GPS, performance and training features, a lightweight band, and up to 90 days of battery life.' },
  { id: 'fenix-9', name: 'fēnix® 9 Pro – 51 mm', kicker: 'Multisport GPS smartwatch', image: 'https://res.garmin.com/homepage/92958/92958-FP-V2-1.jpg', price: '$1,249.99', sku: '010-04337-00', imageSku: '010-04337-15', specKey: 'fenix', battery: 'Up to 31 days', water: '10 ATM', highlight: 'GPS + MAPS', description: 'Multisport smartwatch with a titanium case, LTE and satellite coverage, 24/7 health features, GPS, and a battery life of up to 31 days.' },
  { id: 'cirqa', name: 'CIRQA™ Smart Band', kicker: 'Screenless smart band', image: 'https://res.garmin.com/homepage/85883/85883-FT.jpg', price: '$199.99', sku: '010-04675-00', specKey: 'cirqa', battery: 'Up to 10 days', water: 'Swim, 5 ATM', highlight: 'SCREENLESS', description: 'Screenless smart band with automatic activity detection, 24/7 health monitoring, stress tracking, and up to 10 days of battery life.' },
  { id: 'approach-s72', name: 'Approach® S72 – 47 mm', kicker: 'Golf smartwatch', image: 'https://res.garmin.com/homepage/88129/88129-FP.jpg', price: '$799.99', sku: '010-04148-00', specKey: 'approach', battery: 'Up to 16 days', water: '5 ATM', highlight: 'AMOLED', description: 'Golf smartwatch with an AMOLED display, 43,000+ preloaded courses, golf biometric data, aerial imagery, and a battery life of up to 16 days.' },
]

const GALLERY_VIEWS = ['cf-xl', 'rf-xl', 'lf-xl', 'pd-01-xl', 'pd-02-xl', 'pd-03-xl']

const galleryFor = (product) => product.sku
  ? GALLERY_VIEWS.map((view) => `https://res.garmin.com/transform/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_800,q_auto,w_800/c_pad,h_800,w_800/Product_Images/en/products/${product.imageSku || product.sku}/v/${view}`)
  : [product.image]

export const enduroStories = [
  ['88358-D-1.jpg', 'ENDURO™ 4 IS BUILT FOR THE EXTREMES', 'DURABLE SAPPHIRE LENS · LED FLASHLIGHT · FABRIC BAND'],
  ['88358-D-2.jpg', 'ULTRALONG BATTERY LIFE', 'SOLAR CHARGING SUPPORTS UP TO 90 DAYS OF BATTERY LIFE¹'],
  ['88358-D-3.jpg', 'FOLLOW THE PATH OR GO YOUR OWN WAY', 'MULTICONTINENT TOPOGRAPHIC MAPS'],
  ['88358-D-4.jpg', 'TAKE ON THE TRAIL LIKE NEVER BEFORE', 'WITH GRADE-ADJUSTED PACE-BASED WORKOUTS'],
  ['88358-D-5.jpg', 'PUSH FURTHER AND PERFORM BETTER', '100+ ACTIVITY PROFILES · ENHANCED TRAINING TOOLS'],
  ['88358-D-6.jpg', 'EVERY ATHLETE HAS A STORY. YOURS IS AN EPIC.', 'ANALYZE AND SHARE MULTIDAY HEALTH AND ACTIVITY DATA IN ONE VIEW'],
].map(([file, title, copy]) => ({ image: `https://res.garmin.com/en/products/010-04799-00/g/${file}`, title, copy }))

export function findProduct(id) {
  const detailed = detailedProducts.find((product) => product.id === id)
  if (detailed) return { ...detailed, gallery: galleryFor(detailed), specifications: productSpecifications[detailed.specKey] || [], stories: id === 'enduro-4' ? enduroStories : [] }
  const featured = featuredProducts.find((product) => product.id === id)
  if (featured) return { ...featured, description: featured.copy, gallery: [featured.image], specifications: [], stories: [] }
  const listed = findCatalogProduct(id)
  if (listed) return { id, name: listed.title, kicker: listed.series?.title, description: listed.subtitle, image: listed.image, gallery: listed.gallery.length ? listed.gallery : [listed.image], price: formatPrice(listed.salePrice ?? listed.price), sku: listed.sku, specifications: [], stories: [] }
  return null
}

export const relatedProducts = (id) => detailedProducts.filter((product) => product.id !== id).map((product) => ({ ...product, href: `/p/${product.id}` }))
