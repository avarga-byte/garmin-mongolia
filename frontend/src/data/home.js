import { media } from './site'

export const heroSlides = [
  { title: 'FĒNIX® 9', copy: 'Олон төрлийн спортод зориулсан хамгийн дэвшилтэт цаг.', desktop: '87582-homebanner-lg-1.webp', mobile: '87582-homebanner-sm-1.webp', href: '/p/fenix-9' },
  { title: 'CIRQA™ SMART BAND', copy: 'Дэлгэцэд сатааралгүй, өдөржин эрүүл мэндээ хяна.', desktop: '85883-homebanner-lg.webp', mobile: 'Banner 2.webp', href: '/p/cirqa' },
  { title: 'APPROACH® Z10', copy: '6 дахин томруулдаг авсаархан зай хэмжигч.', desktop: 'homebanner-lg-12.webp', mobile: 'homebanner-sm-10.webp', href: '/p/approach-z10' },
  { title: 'FORERUNNER® 70 | 170', copy: 'Гүйж эхэлж буй хүмүүст зориулсан GPS цаг.', desktop: '84290-homebanner-lg-1.webp', mobile: '84290-homebanner-sm-1.webp', href: '/p/forerunner-170' },
  { title: 'GARMIN CATALYST™ R1', copy: 'Уралдааны замд зориулсан арын радар.', desktop: '86762-homebanner-lg.webp', mobile: '86762-homebanner-sm.webp', href: '/p/catalyst-r1' },
  { title: 'LIVESCOPE™ 2 HD', copy: 'Өгөөшинд загас хэрхэн хариу үйлдэл үзүүлж байгааг шууд хараарай.', desktop: '82420-homebanner-lg.webp', mobile: '82420-homebanner-sm.webp', href: '/p/livescope-2' },
  { title: 'D2™ MACH 2 PRO', copy: 'Хиймэл дагуул болон LTE холболттой нисгэгчийн цаг.', desktop: '85088-1-D.webp', mobile: '85088-3-M.webp', href: '/p/d2-mach-2-pro' },
  { title: 'DESCENT™ MK3I', copy: 'Хоёр өнгийн титан их биетэй шумбалтын компьютер.', desktop: '83354-homebanner-lg.webp', mobile: '83354-homebanner-sm.webp', href: '/p/descent-mk3i' },
  { title: 'INSTINCT® 3 ALPINE RUSH', copy: 'Хязгаарлагдмал өнгөтэй, бат бөх цаг.', desktop: 'homebanner-lg-11.webp', mobile: 'homebanner-sm-9.webp', href: '/p/instinct-3-alpine' },
  { title: 'VENU® 4', copy: 'Өдөр тутмын эрүүл мэндийн мэдээллээ бугуйндаа аваарай.', desktop: '77986-homebanner-lg.webp', mobile: '77986-homebanner-sm.webp', href: '/p/venu-4' },
  { title: 'INSTINCT® 3 SUPERNOVA', copy: 'Гадаа орчинд тохирсон шинэ өнгө.', desktop: '77215-homebanner-lg.webp', mobile: '77215-homebanner-sm.webp', href: '/p/instinct-3-supernova' },
].map((slide) => ({ ...slide, desktop: media(slide.desktop), mobile: media(slide.mobile) }))

export const featuredProducts = [
  { id: 'fenix-9-pro', name: 'FĒNIX® 9 PRO', copy: 'inReach® мессежийн сонголттой титан спорт цаг.', image: 'image - 2026-08-25T163145.411.webp' },
  { id: 'fenix-9', name: 'FĒNIX® 9', copy: 'Дэвшилтэт бэлтгэлийн функцтэй GPS спорт цаг.', image: 'image - 2026-08-25T163148.682.webp' },
  { id: 'cirqa', name: 'CIRQA™ SMART BAND', copy: 'Нойр, стресс, хөдөлгөөнийг хянах дэлгэцгүй бугуйвч.', image: 'image - 2026-07-22T092851.059.webp' },
  { id: 'approach-z10', name: 'APPROACH® Z10', copy: 'Зайн хэмжилтийг гольфын цагтай синк хийнэ.', image: 'image - 2026-08-03T152533.574.webp' },
  { id: 'livescope-2', name: 'LIVESCOPE™ 2 AND 2 HD', copy: 'Өргөн хамрах хүрээ, тод дүрстэй бодит цагийн сонар.', image: 'image - 2026-07-14T104349.806.webp' },
  { id: 'forerunner-170', name: 'FORERUNNER® 70 | 170', copy: 'Гүйлтийн үндсэн функц болон хөгжим сонсох сонголттой цаг.', image: 'Forerunner 170.webp' },
  { id: 'descent-mk3i', name: 'DESCENT™ MK3I', copy: 'Агаарын системтэй AMOLED шумбалтын компьютер.', image: 'Descent Mk3i (1).webp' },
  { id: 'catalyst-r1', name: 'GARMIN CATALYST™ R1', copy: 'Хурдны замд зориулсан уралдааны радар.', image: 'GARMIN CATALYSTâ¢ R1.webp' },
  { id: 'instinct-3-alpine', name: 'INSTINCT® 3 ALPINE RUSH', copy: 'Улирлын өнгөтэй, аялалд зориулсан бат бөх цаг.', image: 'Instinct-3-Alpine-Rush-Collection.webp' },
  { id: 'tactix-8', name: 'TACTIX® 8 – CERAKOTE®', copy: 'Элэгдэлд тэсвэртэй бүрхүүлтэй тактикийн AMOLED цаг.', image: 'Tactix-8---Cerakote.webp' },
  { id: 'varia-820', name: 'VARIA™ REARVUE 820', copy: 'Радар, арын гэрлийг нэг авсаархан төхөөрөмжид.', image: 'Varia_Rearvue-820.webp' },
  { id: 'approach-j1', name: 'APPROACH® J1', copy: 'Залуу гольфчдод зориулсан өнгөлөг GPS цаг.', image: 'Approach-J1 (1).webp' },
  { id: 'approach-g82', name: 'APPROACH® G82', copy: 'Дасгал, тоглолтод зориулсан цохилт хэмжигч, гар GPS.', image: 'Approach-G82 (1).webp' },
  { id: 'xero-l60i', name: 'XERO® L60i', copy: 'Газрын зураг, чиглүүлэлттэй зай хэмжигч.', image: 'Xero-L60i (1).webp' },
  { id: 'venu-x1', name: 'VENU® X1', copy: 'Том AMOLED дэлгэцтэй нимгэн GPS цаг.', image: 'Venu X1 (1).webp' },
  { id: 'quatix-8-pro', name: 'QUATIX® 8 PRO', copy: 'Хиймэл дагуул, LTE-тэй завины ухаалаг цаг.', image: 'Quatix-8-Pro.webp' },
].map((product) => ({ ...product, image: media(product.image), href: `/p/${product.id}` }))

// White cards laid out two per row.
export const promoCardsTop = [
  { title: 'Тод AMOLED дэлгэцтэй Forerunner® гүйлтийн цаг', image: media('66317-Homecard.webp'), href: '/c/running' },
  { title: 'Суурилуулсан чанга яригч, микрофонтой fēnix® 8', image: media('73263-POD-FENIX-8.webp'), href: '/c/multisport' },
]

export const promoCardsBottom = [
  { title: 'Ухаалаг цаг шинээр сонирхож байна уу? Өөрт тохирохыг олоорой.', image: media('46074-which_watch.webp'), href: '/c/smartwatches' },
  { title: 'Адал явдал бүрд бэлэн бат бөх төхөөрөмж.', image: media('Banner - 1.webp'), href: '/c/outdoor-recreation' },
]

// Image tiles with the title over a dark gradient.
export const lifestyleTiles = [
  { title: 'Garmin Tacx® дотор дугуйн дасгал', image: media('TacxÂ® NEO 3M Smart 1.webp'), href: '/c/indoor-trainers' },
  { title: 'Тойрог бүрд зориулсан гольфын төхөөрөмж', image: media('74662-golf-pod2.webp'), href: '/c/golf' },
  { title: 'Эмэгтэйчүүдэд зориулсан зүүдэг төхөөрөмж', image: media('82782-womens_wearables.webp'), href: '/c/women-wearables' },
]

export const cyclingBanner = { title: 'Дугуйн компьютер, радар, чадал хэмжигч', image: media('74662-1050-cycling-POD.webp'), href: '/c/cycling' }
export const kidsBanner = { title: 'Хүүхдэд зориулсан зүүдэг төхөөрөмж', image: media('82782-kids-pod-V3.webp'), href: '/c/kids-wearables' }

export const categories = [
  { title: 'Ухаалаг цаг', image: media('74662-smartwatch-pod.webp'), href: '/c/smartwatches' },
  { title: 'Автомашин', image: media('74662-automotive-pod.webp'), href: '/c/automotive' },
  { title: 'Спорт ба фитнес', image: media('74662-sports-and-fitness-pod.webp'), href: '/c/sports-fitness' },
  { title: 'Аялал, адал явдал', image: media('46074-outdoor_recreation.jpg'), href: '/c/outdoor-recreation' },
  { title: 'Далайн төхөөрөмж', image: media('74662-marine-pod.webp'), href: '/c/marine' },
  { title: 'Нисэх', image: media('46074-aviation.webp'), href: '/c/aviation' },
]
