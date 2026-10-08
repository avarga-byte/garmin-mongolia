import productSpecifications from '../productSpecifications.json'
import { featuredProducts } from './home'

// Products with full detail pages. Anything else in the featured list gets a basic page.
const detailedProducts = [
  { id: 'enduro-4', name: 'ENDURO™ 4', kicker: 'Нарны цэнэглэлттэй GPS ухаалаг цаг', image: 'https://res.garmin.com/homepage/88360/en_US/88360-FC.png', priceLabel: 'Үнэ лавлах', sku: '010-04799-00', specKey: 'enduro', battery: 'Нарны цэнэглэлтээр 90 хүртэл хоног', water: '10 ATM', highlight: 'GPS + MAPS', description: 'Нарны цэнэглэлт, GPS, гүйцэтгэл ба бэлтгэлийн функцтэй, хөнгөн хийцтэй ухаалаг цаг. Нарны цэнэглэлтээр 90 хүртэл хоног ажиллана.' },
  { id: 'fenix-9', name: 'fēnix® 9 Pro – 51 mm', kicker: 'Олон төрлийн спортын GPS ухаалаг цаг', image: 'https://res.garmin.com/homepage/92958/92958-FP-V2-1.jpg', priceLabel: 'Үнэ лавлах', sku: '010-04337-00', imageSku: '010-04337-15', specKey: 'fenix', battery: '31 хүртэл хоног', water: '10 ATM', highlight: 'GPS + MAPS', description: 'Титан их бие, LTE болон хиймэл дагуулын холболтын сонголт, эрүүл мэндийн хяналт, GPS-тэй олон төрлийн спортын цаг. Батерей 31 хүртэл хоног ажиллана.' },
  { id: 'cirqa', name: 'CIRQA™ Smart Band', kicker: 'Дэлгэцгүй ухаалаг бугуйвч', image: 'https://res.garmin.com/homepage/85883/85883-FT.jpg', priceLabel: 'Үнэ лавлах', sku: '010-04675-00', specKey: 'cirqa', battery: '10 хүртэл хоног', water: 'Усанд сэлэлт · 5 ATM', highlight: 'SCREENLESS', description: 'Хөдөлгөөнийг автоматаар таньж, эрүүл мэнд болон стрессийг өдөр шөнөгүй хянах дэлгэцгүй ухаалаг бугуйвч. Батерей 10 хүртэл хоног ажиллана.' },
  { id: 'approach-s72', name: 'Approach® S72 – 47 mm', kicker: 'Гольфын ухаалаг цаг', image: 'https://res.garmin.com/homepage/88129/88129-FP.jpg', priceLabel: 'Үнэ лавлах', sku: '010-04148-00', specKey: 'approach', battery: '16 хүртэл хоног', water: '5 ATM', highlight: 'AMOLED', description: 'AMOLED дэлгэц, 43,000 гаруй урьдчилан ачаалсан талбай, гольфын хэмжилт болон газрын зурагтай ухаалаг цаг. Батерей 16 хүртэл хоног ажиллана.' },
]

const GALLERY_VIEWS = ['cf-xl', 'rf-xl', 'lf-xl', 'pd-01-xl', 'pd-02-xl', 'pd-03-xl']

const galleryFor = (product) => product.sku
  ? GALLERY_VIEWS.map((view) => `https://res.garmin.com/transform/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_800,q_auto,w_800/c_pad,h_800,w_800/Product_Images/en/products/${product.imageSku || product.sku}/v/${view}`)
  : [product.image]

export const enduroStories = [
  ['88358-D-1.jpg', 'ХАМГИЙН ХҮНД НӨХЦӨЛД ЗОРИУЛСАН ENDURO™ 4', 'БАТ БӨХ САПФИР ШИЛ · LED ГЭРЭЛ · ДААВУУ БҮС'],
  ['88358-D-2.jpg', 'УДААН АЖИЛЛАХ БАТЕРЕЙ', 'НАРНЫ ЦЭНЭГЛЭЛТЭЭР 90 ХҮРТЭЛ ХОНОГ АЖИЛЛАНА¹'],
  ['88358-D-3.jpg', 'ЗАМЫГ ДАГА, ЭСВЭЛ ӨӨРИЙН ЗАМААР ЯВ', 'ТАЛБИВ БҮРИЙН БАЙР ЗҮЙН ЗУРАГ'],
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

export const relatedProducts = (id) => detailedProducts.filter((product) => product.id !== id).map((product) => ({ ...product, href: `/p/${product.id}` }))
