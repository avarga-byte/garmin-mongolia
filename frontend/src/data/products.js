import productSpecifications from '../productSpecifications.json'
import { featuredProducts } from './home'

// Products with full detail pages. Anything else in the featured list gets a basic page.
const GALLERY_VIEWS = ['cf-xl', 'rf-xl', 'lf-xl', 'pd-01-xl', 'pd-02-xl', 'pd-03-xl']
const galleryForSku = (sku) => GALLERY_VIEWS.map((view) => `https://res.garmin.com/transform/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_800,q_auto,w_800/c_pad,h_800,w_800/Product_Images/en/products/${sku}/v/${view}`)
const fenix9Rows = [
  ['010-04761-00', '43 mm', 'fēnix 9', 'No', 'Titanium with Fog Gray Silicone Band'],
  ['010-04761-10', '43 mm', 'fēnix 9', 'No', 'Titanium with Pebble Gray Silicone Band'],
  ['010-04762-00', '47 mm', 'fēnix 9', 'No', 'Titanium with Pebble Gray Silicone Band'],
  ['010-04762-10', '47 mm', 'fēnix 9', 'No', 'Carbon Gray DLC Titanium with Black Silicone Band'],
  ['010-04763-00', '51 mm', 'fēnix 9', 'No', 'Titanium with Pebble Gray Silicone Band'],
  ['010-04763-10', '51 mm', 'fēnix 9', 'No', 'Carbon Gray DLC Titanium with Black Silicone Band'],
  ['010-04335-15', '43 mm', 'Pro', 'No', 'Carbon Gray DLC Titanium with Black/Pebble Gray Silicone Band'],
  ['010-04335-25', '43 mm', 'Pro', 'No', 'Autumn Gold Titanium with Cream/French Gray Silicone Band'],
  ['010-04335-05', '43 mm', 'Pro', 'No', 'Titanium with Shell Pink/Autumn Orange Silicone Band'],
  ['010-04335-85', '43 mm', 'Pro', 'No', 'Titanium with Fog Gray/Dark Sandstone Silicone Band'],
  ['010-04336-25', '47 mm', 'Pro', 'No', 'Titanium with Graphite/Black Silicone Band'],
  ['010-04336-05', '47 mm', 'Pro', 'No', 'Titanium with Autumn Orange/Spark Orange Silicone Band'],
  ['010-04336-15', '47 mm', 'Pro', 'No', 'Carbon Gray DLC Titanium with Black/Pebble Gray Silicone Band'],
  ['010-04337-15', '51 mm', 'Pro', 'No', 'Carbon Gray DLC Titanium with Black/Pebble Gray Silicone Band'],
  ['010-04337-05', '51 mm', 'Pro', 'No', 'Titanium with Autumn Orange/Spark Orange Silicone Band'],
  ['010-04337-25', '51 mm', 'Pro', 'No', 'Titanium with Graphite/Black Silicone Band'],
  ['010-04338-05', '47 mm', 'Pro - Solar', 'No', 'Titanium with Pebble Gray/Silver Gray Silicone Band'],
  ['010-04339-05', '51 mm', 'Pro - Solar', 'No', 'Titanium with Pebble Gray/Silver Gray Silicone Band'],
  ['010-04335-10', '43 mm', 'Pro', 'Yes', 'Carbon Gray DLC Titanium with Black/Pebble Gray Silicone Band'],
  ['010-04335-00', '43 mm', 'Pro', 'Yes', 'Titanium with Shell Pink/Autumn Orange Silicone Band'],
  ['010-04335-20', '43 mm', 'Pro', 'Yes', 'Autumn Gold Titanium with Cream/French Gray Silicone Band'],
  ['010-04335-40', '43 mm', 'Pro', 'Yes', 'Autumn Gold Titanium with Bone Leather Band'],
  ['010-04335-80', '43 mm', 'Pro', 'Yes', 'Titanium with Fog Gray/Dark Sandstone Silicone Band'],
  ['010-04336-00', '47 mm', 'Pro', 'Yes', 'Titanium with Autumn Orange/Spark Orange Silicone Band'],
  ['010-04336-10', '47 mm', 'Pro', 'Yes', 'Carbon Gray DLC Titanium with Black/Pebble Gray Silicone Band'],
  ['010-04336-20', '47 mm', 'Pro', 'Yes', 'Titanium with Graphite/Black Silicone Band'],
  ['010-04336-40', '47 mm', 'Pro', 'Yes', 'Titanium with Walnut Leather Band'],
  ['010-04337-00', '51 mm', 'Pro', 'Yes', 'Titanium with Autumn Orange/Spark Orange Silicone Band'],
  ['010-04337-10', '51 mm', 'Pro', 'Yes', 'Carbon Gray DLC Titanium with Black/Pebble Gray Silicone Band'],
  ['010-04337-20', '51 mm', 'Pro', 'Yes', 'Titanium with Graphite/Black Silicone Band'],
  ['010-04337-40', '51 mm', 'Pro', 'Yes', 'Titanium with Walnut Leather Band'],
  ['010-04338-00', '47 mm', 'Pro - Solar', 'Yes', 'Titanium with Pebble Gray/Silver Gray Silicone Band'],
  ['010-04339-00', '51 mm', 'Pro - Solar', 'Yes', 'Titanium with Pebble Gray/Silver Gray Silicone Band'],
].map(([sku, caseSize, version, inReach, color]) => ({
  sku, options: { caseSize, version, inReach, color }, images: galleryForSku(sku),
  battery: version === 'Pro - Solar' ? (caseSize === '47 mm' ? 'Up to 34 days' : 'Up to 57 days') : version === 'Pro' ? (caseSize === '43 mm' ? 'Up to 10 days' : caseSize === '47 mm' ? 'Up to 18 days' : 'Up to 31 days') : (caseSize === '43 mm' ? 'Up to 10 days' : caseSize === '47 mm' ? 'Up to 16 days' : 'Up to 29 days'),
}))
const fenix9Colors = [
  ['Titanium with Fog Gray Silicone Band', '#d2d2d2'], ['Titanium with Pebble Gray Silicone Band', '#c6c0b1'],
  ['Carbon Gray DLC Titanium with Black Silicone Band', '#1b1b1b'], ['Titanium with Graphite/Black Silicone Band', '#4b4946'],
  ['Titanium with Autumn Orange/Spark Orange Silicone Band', '#dc713d'], ['Autumn Gold Titanium with Cream/French Gray Silicone Band', '#ded1bd'],
  ['Titanium with Shell Pink/Autumn Orange Silicone Band', '#e6a08b'], ['Titanium with Fog Gray/Dark Sandstone Silicone Band', '#b4aba0'],
  ['Carbon Gray DLC Titanium with Black/Pebble Gray Silicone Band', '#3b3b3b'], ['Titanium with Pebble Gray/Silver Gray Silicone Band', '#b9b8b4'],
  ['Autumn Gold Titanium with Bone Leather Band', '#e7ddc7'], ['Titanium with Walnut Leather Band', '#604737'],
].map(([label, color]) => ({ label, color }))

const detailedProducts = [
  { id: 'enduro-4', name: 'ENDURO™ 4', kicker: 'Нарны цэнэглэлттэй GPS ухаалаг цаг', image: 'https://res.garmin.com/homepage/88360/en_US/88360-FC.png', priceLabel: 'Contact for price', sku: '010-04799-00', specKey: 'enduro', battery: 'Нарны цэнэглэлтээр 90 хүртэл хоног', water: '10 ATM', highlight: 'GPS + MAPS', description: 'Нарны цэнэглэлт, GPS, гүйцэтгэл ба бэлтгэлийн функцтэй, хөнгөн хийцтэй ухаалаг цаг. Нарны цэнэглэлтээр 90 хүртэл хоног ажиллана.' },
  { id: 'fenix-9', name: 'fēnix® 9', kicker: 'Олон төрлийн спортын GPS ухаалаг цаг', image: 'https://res.garmin.com/homepage/92958/92958-FP-V2-1.jpg', priceLabel: 'Contact for price', sku: '010-04761-00', skuAliases: ['010-04337-00'], imageSku: '010-04761-00', specKey: 'fenix', water: '10 ATM', highlight: 'GPS + MAPS', badge: 'NEW', breadcrumbs: [{ label: 'Outdoor Recreation', href: '/c/outdoor-recreation' }, { label: 'Adventure Watches', href: '/c/adventure-watches' }], description: 'AMOLED дэлгэц, титан хүрээ, индранил шил, эрүүл мэнд болон биеийн байдлын хяналттай олон төрлийн спортын GPS ухаалаг цаг.', variants: fenix9Rows, variantGroups: [
    { id: 'caseSize', label: 'Case Size', options: ['43 mm', '47 mm', '51 mm'] },
    { id: 'version', label: 'Version', options: ['fēnix 9', 'Pro', 'Pro - Solar'] },
    { id: 'inReach', label: 'inReach® Connectivity', options: ['No', 'Yes'] },
    { id: 'color', label: 'Color', display: 'swatches', options: fenix9Colors },
  ] },
  { id: 'cirqa', name: 'CIRQA™ Smart Band', kicker: 'Дэлгэцгүй ухаалаг бугуйвч', image: 'https://res.garmin.com/homepage/85883/85883-FT.jpg', priceLabel: 'Contact for price', sku: '010-04675-00', specKey: 'cirqa', battery: '10 хүртэл хоног', water: 'Усанд сэлэлт · 5 ATM', highlight: 'SCREENLESS', description: 'Хөдөлгөөнийг автоматаар таньж, эрүүл мэнд болон стрессийг өдөр шөнөгүй хянах дэлгэцгүй ухаалаг бугуйвч. Батерей 10 хүртэл хоног ажиллана.' },
  { id: 'approach-s72', name: 'Approach® S72 – 47 mm', kicker: 'Гольфын ухаалаг цаг', image: 'https://res.garmin.com/homepage/88129/88129-FP.jpg', priceLabel: 'Contact for price', sku: '010-04148-00', specKey: 'approach', battery: '16 хүртэл хоног', water: '5 ATM', highlight: 'AMOLED', description: 'AMOLED дэлгэц, 43,000 гаруй урьдчилан ачаалсан талбай, гольфын хэмжилт болон газрын зурагтай ухаалаг цаг. Батерей 16 хүртэл хоног ажиллана.' },
]

const galleryFor = (product) => product.sku ? galleryForSku(product.imageSku || product.sku) : [product.image]

export const enduroStories = [
  ['88358-D-1.jpg', 'ХАМГИЙН ХҮНД НӨХЦӨЛД ЗОРИУЛСАН ENDURO™ 4', 'БАТ БӨХ САПФИР ШИЛ · LED ГЭРЭЛ · ДААВУУ БҮС'],
  ['88358-D-2.jpg', 'УДААН АЖИЛЛАХ БАТЕРЕЙ', 'НАРНЫ ЦЭНЭГЛЭЛТЭЭР 90 ХҮРТЭЛ ХОНОГ АЖИЛЛАНА¹'],
  ['88358-D-3.jpg', 'ЗАМЫГ ДАГА, ЭСВЭЛ ӨӨРИЙН ЗАМААР ЯВ', 'ТАЛБАЙ БҮРИЙН БАЙР ЗҮЙН ЗУРАГ'],
  ['88358-D-4.jpg', 'ЗАМЫН ӨГСҮҮР, ХУРДАНД ТОХИРУУЛАН БЭЛТГЭ', 'ӨГСҮҮРИЙН НӨХЦӨЛД ТОХИРУУЛСАН ДАСГАЛ'],
  ['88358-D-5.jpg', 'ИЛҮҮ ХОЛ ЯВЖ, ИЛҮҮ САЙЖИР', '100+ ХӨДӨЛГӨӨНИЙ ТӨРӨЛ · ДЭВШИЛТЭТ БЭЛТГЭЛИЙН ХЭРЭГСЭЛ'],
  ['88358-D-6.jpg', 'ТАМИРЧИН БҮР ТҮҮХТЭЙ. ТАНЫХ БОЛ АЯЛАЛ.', 'ЭРҮҮЛ МЭНД, ХӨДӨЛГӨӨНИЙ ОЛОН ӨДРИЙН МЭДЭЭГ НЭГ ДОР ХАРААРАЙ'],
].map(([file, title, copy]) => ({ image: `https://res.garmin.com/en/products/010-04799-00/g/${file}`, title, copy }))

export function findProduct(id) {
  const detailed = detailedProducts.find((product) => product.id === id)
  if (detailed) return { ...detailed, gallery: galleryFor(detailed), specifications: productSpecifications[detailed.specKey] || [], stories: id === 'enduro-4' ? enduroStories : [] }
  const featured = featuredProducts.find((product) => product.id === id)
  if (featured) return { ...featured, description: featured.copy, gallery: [featured.image], specifications: [], stories: [] }
  return null
}

export const findProductBySku = (sku) => {
  const product = detailedProducts.find((item) => item.sku === sku || item.skuAliases?.includes(sku) || item.variants?.some((variant) => variant.sku === sku))
  const resolved = product ? findProduct(product.id) : null
  return resolved ? { ...resolved, initialVariantSku: sku } : null
}
export const productPath = (product) => `/p/${product.sku || detailedProducts.find(({ id }) => id === product.id)?.sku || product.id}`

export const comparePath = (ids) => `/compare?products=${ids.map(encodeURIComponent).join(',')}`

export const allProducts = () => [...new Set([...detailedProducts, ...featuredProducts].map(({ id }) => id))].map(findProduct)

export const relatedProducts = (id) => detailedProducts.filter((product) => product.id !== id).map((product) => ({ ...product, href: productPath(product) }))
