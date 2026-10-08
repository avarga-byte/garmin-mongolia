import { writeFile } from 'node:fs/promises'

const BASE = 'https://www.garmin.ae'
const OUTPUT = new URL('../src/data/catalog.json', import.meta.url)

const CATEGORY_PATHS = [
  'wearables-smartwatches',
  'women-wearables',
  'sports-fitness',
  'sports-fitness/fashion-hybrid-smartwatches',
  'sports-fitness/luxury-smartwatches',
  'sports-fitness/running-smartwatches',
  'sports-fitness/multisport-smartwatches',
  'sports-fitness/swimming-smartwatches',
  'sports-fitness/dive-computers-smartwatches',
  'sports-fitness/golf-gps-devices-smartwatches',
  'sports-fitness/activity-fitness-trackers',
  'sports-fitness/kids-wearables-fitness-activity-trackers',
  'sports-fitness/cycling',
  'sports-fitness/indoor-trainers',
  'sports-fitness/scales-monitors',
  'sports-fitness/indoor-training-accessories',
  'marathon-season',
  'gaming',
  'wearables-smartwatches-accessories',
  'cycling-accessories',
  'apps',
  'outdoor-recreation',
  'optics',
  'outdoor-recreation/adventure-smartwatches',
  'outdoor-recreation/handhelds',
  'outdoor-recreation/satellite-communicators',
  'outdoor-recreation/ranging',
  'outdoor-recreation/dog-tracking',
]

const get = async (path) => {
  const response = await fetch(BASE + path, { headers: { 'user-agent': 'Mozilla/5.0' } })
  if (!response.ok) throw new Error(`${response.status} ${path}`)
  return response.json()
}

const plain = (html) => (html ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const paragraphs = (html) => (html ?? '').split(/<\/p>|<br\s*\/?>/i).map(plain).filter(Boolean).join('\n')
const richText = (nodes = []) => nodes.map((node) => node.text ?? richText(node.children)).join('')
const imageUrl = (image) => image?.url || null
const slugOf = (path) => path.split('/').at(-1)
const EXCLUDED = /quatix|D2™|Catalyst|zūmo|Tread®|dēzl|DriveSmart|DriveTrack|Fusion|LiveScope/i
const allowed = (item) => !EXCLUDED.test(item.title)
function localLink(url = '') {
  const value = url.replace(/^https?:\/\/(www\.)?garmin\.ae/, '')
  if (/^\/p\/?\d/.test(value)) return value.replace(/^\/p\/?/, '/p/')
  if (value.startsWith('/c/')) return `/c/${value.split(/[?#]/)[0].split('/').filter(Boolean).at(-1)}${value.match(/\?[^#]*/)?.[0] ?? ''}`
  if (/^[?#]./.test(value)) return `${value.replace(/#.*/, '')}#products`
  return value || '#'
}

function block(raw) {
  switch (raw.blockType) {
    case 'largeImageBlock':
      return { type: 'banner', image: imageUrl(raw.image) }
    case 'heroSlider': {
      const [slide] = raw.heroSlider.items
      return { type: 'banner', image: imageUrl(slide.image), mobileImage: imageUrl(slide.mobileImage) }
    }
    case 'videoBlock':
      return { type: 'video', image: imageUrl(raw.fallBackImage), video: raw.videoUrl }
    case 'series':
      return { type: 'series', title: plain(raw.title), image: imageUrl(raw.image) }
    case 'Headline':
      return { type: 'headline', text: plain(raw.heading), size: raw.size }
    case 'Paragraph':
      return { type: 'paragraph', text: raw.Text }
    case 'smallIconGrid':
      return { type: 'icons', items: raw.items.map((item) => ({ title: plain(item.title), image: imageUrl(item.image) })) }
    case 'button':
      return { type: 'button', label: raw.label, href: localLink(raw.link?.url) }
    case 'threeColumnBlock': {
      const { columns, items } = raw.threeColumnBlockItems
      return { type: 'tiles', columns: Number(columns) || 3, items: items.map((item) => ({ title: plain(item.title), copy: plain(item.description), image: imageUrl(item.image), href: localLink(item.link?.url), titleHref: item.link?.url === '#' ? plain(item.title) : null })) }
    }
    case 'mediaBlock':
      return { type: 'media', title: plain(raw.heading), text: richText(raw.text), image: imageUrl(raw.media), imageSide: raw.imagePosition === 'right' ? 'right' : 'left' }
    case 'featuredSlider':
      return { type: 'slider', items: raw.featured_slider.items.map((item) => ({ title: plain(item.title), copy: plain(item.description), image: imageUrl(item.image), href: localLink(item.links?.[0]?.link?.url) })).filter(allowed) }
    default:
      return null
  }
}

const products = {}
const categories = []

for (const path of CATEGORY_PATHS) {
  const slug = slugOf(path)
  const category = await get(`/api/category?slug=${slug}`)
  const skus = []
  for (let page = 1; ; page++) {
    const listing = await get(`/api/graphQl/products?id=${category.id}&draft=false&series=null&activity=null&features=null&sortBy=null&page=${page}&FILTER_USERPROFILE_MARQGEN2=false&catv=2`)
    for (const doc of listing.docs) {
      if (EXCLUDED.test(doc.CseriesName || doc.title)) continue
      skus.push(doc.sku)
      products[doc.sku] ??= {
        sku: doc.sku,
        title: plain(doc.CseriesName || doc.title),
        subtitle: plain(doc.excerpt),
        price: doc.price,
        salePrice: doc.salePrice,
        isNew: Boolean(doc.newProudct),
        image: doc.seriesImageUrl || doc.featuredImageUrl,
        gallery: doc.images.map((image) => image.featuredImage?.url).filter(Boolean).slice(0, 6),
        series: doc.series && { id: doc.series.id, title: plain(doc.series.title) },
        features: doc.features.map(({ id, title }) => ({ id, title: plain(title) })),
        activities: doc.activity.map(({ id, title }) => ({ id, title: plain(title) })),
      }
    }
    if (!listing.hasNextPage) break
  }
  const blocks = (list = []) => list.map(block).filter(Boolean)
  categories.push({
    slug,
    path: `/c/${slug}`,
    parent: path.includes('/') ? path.split('/')[0] : null,
    title: plain(category.heading || category.title),
    description: typeof category.description === 'string' ? paragraphs(category.description) : '',
    banner: imageUrl(category.featuredImage),
    top: blocks(category.layoutTop),
    bottom: blocks(category.layoutBottom),
    products: [...new Set(skus)],
  })
  console.log(`${slug}: ${skus.length} products`)
}
function byTitle(title) {
  const words = title.toLowerCase().replace(/ smartwatches$| products$/, '')
  return categories.find((category) => category.title.toLowerCase().includes(words))
    ?? categories.find((category) => words.split(/\W+/).every((word) => category.slug.includes(word.slice(0, 5))))
}
for (const category of categories) {
  for (const section of [...category.top, ...category.bottom]) {
    if (section.type !== 'tiles') continue
    for (const item of section.items) {
      if (item.titleHref) item.href = byTitle(item.titleHref)?.path ?? '#'
      delete item.titleHref
    }
  }
}

const series = (await get('/api/series')).map((item) => ({ id: item.id, title: plain(item.title), copy: plain(item.excerpt), image: imageUrl(item.image) }))

await writeFile(OUTPUT, JSON.stringify({ series, categories, products }))
console.log(`Wrote ${categories.length} categories and ${Object.keys(products).length} products`)
