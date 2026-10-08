import { media } from './site'

export const heroSlides = [
  { title: 'FĒNIX® 9', copy: 'Our most capable multisport smartwatch yet.', desktop: '87582-homebanner-lg-1.webp', mobile: '87582-homebanner-sm-1.webp', href: '/p/fenix-9' },
  { title: 'CIRQA™ SMART BAND', copy: 'All-day tracking with no screen to distract you.', desktop: '85883-homebanner-lg.webp', mobile: 'Banner 2.webp', href: '/p/cirqa' },
  { title: 'APPROACH® Z10', copy: 'A pocket-size rangefinder with 6x zoom.', desktop: 'homebanner-lg-12.webp', mobile: 'homebanner-sm-10.webp', href: '/p/approach-z10' },
  { title: 'FORERUNNER® 70 | 170', copy: 'Simple GPS running watches for new runners.', desktop: '84290-homebanner-lg-1.webp', mobile: '84290-homebanner-sm-1.webp', href: '/p/forerunner-170' },
  { title: 'DESCENT™ MK3I', copy: 'Dive computer in two-tone titanium.', desktop: '83354-homebanner-lg.webp', mobile: '83354-homebanner-sm.webp', href: '/p/descent-mk3i' },
  { title: 'INSTINCT® 3 ALPINE RUSH', copy: 'Rugged watches in limited-edition colours.', desktop: 'homebanner-lg-11.webp', mobile: 'homebanner-sm-9.webp', href: '/p/instinct-3-alpine' },
  { title: 'VENU® 4', copy: 'Everyday health insights on your wrist.', desktop: '77986-homebanner-lg.webp', mobile: '77986-homebanner-sm.webp', href: '/p/venu-4' },
  { title: 'INSTINCT® 3 SUPERNOVA', copy: 'Bold new colours for the outdoors.', desktop: '77215-homebanner-lg.webp', mobile: '77215-homebanner-sm.webp', href: '/p/instinct-3-supernova' },
].map((slide) => ({ ...slide, desktop: media(slide.desktop), mobile: media(slide.mobile) }))

const productFilters = {
  'fenix-9-pro': { categories: ['smartwatches', 'sports-fitness', 'outdoor-recreation'], series: 'fenix-instinct', activities: ['Hiking', 'Running', 'Cycling', 'Strength'] },
  'fenix-9': { categories: ['smartwatches', 'sports-fitness', 'outdoor-recreation'], series: 'fenix-instinct', activities: ['Hiking', 'Running', 'Cycling', 'Strength'] },
  cirqa: { categories: ['smartwatches', 'sports-fitness'], activities: ['Running', 'Strength'] },
  'approach-z10': { categories: ['sports-fitness'], activities: ['Golfing'] },
  'forerunner-170': { categories: ['smartwatches', 'sports-fitness'], series: 'forerunner', activities: ['Running'] },
  'descent-mk3i': { categories: ['smartwatches', 'sports-fitness', 'outdoor-recreation'], activities: ['Diving', 'Swimming'] },
  'instinct-3-alpine': { categories: ['smartwatches', 'outdoor-recreation'], series: 'fenix-instinct', activities: ['Hiking', 'Running', 'Cycling'] },
  'tactix-8': { categories: ['smartwatches', 'outdoor-recreation'], activities: ['Hiking', 'Running', 'Swimming'] },
  'varia-820': { categories: ['sports-fitness'], activities: ['Cycling'] },
  'approach-j1': { categories: ['smartwatches', 'sports-fitness'], activities: ['Golfing'] },
  'approach-g82': { categories: ['sports-fitness'], activities: ['Golfing'] },
  'xero-l60i': { categories: ['outdoor-recreation'], activities: ['Hiking'] },
  'venu-x1': { categories: ['smartwatches', 'sports-fitness'], series: 'venu-vivoactive', activities: ['Running', 'Strength', 'Swimming'] },
}

export const featuredProducts = [
  { id: 'fenix-9-pro', name: 'FĒNIX® 9 PRO', copy: 'Titanium multisport watch with optional inReach® messaging.', image: 'image - 2026-08-25T163145.411.webp' },
  { id: 'fenix-9', name: 'FĒNIX® 9', copy: 'Multisport GPS watch with advanced training tools.', image: 'image - 2026-08-25T163148.682.webp' },
  { id: 'cirqa', name: 'CIRQA™ SMART BAND', copy: 'Screenless band for sleep, stress and activity.', image: 'image - 2026-07-22T092851.059.webp' },
  { id: 'approach-z10', name: 'APPROACH® Z10', copy: 'Rangefinder that syncs distances to your golf watch.', image: 'image - 2026-08-03T152533.574.webp' },
  { id: 'forerunner-170', name: 'FORERUNNER® 70 | 170', copy: 'Running watches with the essentials, plus optional music.', image: 'Forerunner 170.webp' },
  { id: 'descent-mk3i', name: 'DESCENT™ MK3I', copy: 'AMOLED dive computer with air integration.', image: 'Descent Mk3i (1).webp' },
  { id: 'instinct-3-alpine', name: 'INSTINCT® 3 ALPINE RUSH', copy: 'Tough outdoor watches in seasonal colours.', image: 'Instinct-3-Alpine-Rush-Collection.webp' },
  { id: 'tactix-8', name: 'TACTIX® 8 – CERAKOTE®', copy: 'Tactical AMOLED watch with a hard-wearing finish.', image: 'Tactix-8---Cerakote.webp' },
  { id: 'varia-820', name: 'VARIA™ REARVUE 820', copy: 'Bike radar and tail light in one compact unit.', image: 'Varia_Rearvue-820.webp' },
  { id: 'approach-j1', name: 'APPROACH® J1', copy: 'A colourful GPS golf watch for young golfers.', image: 'Approach-J1 (1).webp' },
  { id: 'approach-g82', name: 'APPROACH® G82', copy: 'Launch monitor and handheld GPS for practice and play.', image: 'Approach-G82 (1).webp' },
  { id: 'xero-l60i', name: 'XERO® L60i', copy: 'Rangefinder with mapping and navigation overlays.', image: 'Xero-L60i (1).webp' },
  { id: 'venu-x1', name: 'VENU® X1', copy: 'Thin GPS smartwatch with a large AMOLED display.', image: 'Venu X1 (1).webp' },
].map((product) => ({ ...product, ...productFilters[product.id], image: media(product.image), href: `/p/${product.id}` }))

// White cards laid out two per row.
export const promoCardsTop = [
  { title: 'Forerunner® running smartwatches with bright AMOLED displays', image: media('66317-Homecard.webp'), href: '/c/running' },
  { title: 'fēnix® 8 – AMOLED or solar, with a built-in speaker and mic', image: media('73263-POD-FENIX-8.webp'), href: '/c/multisport' },
]

export const promoCardsBottom = [
  { title: 'New to smartwatches? Find the right one for you.', image: media('46074-which_watch.webp'), href: '/c/smartwatches' },
  { title: 'Rugged gear for every adventure.', image: media('Banner - 1.webp'), href: '/c/outdoor-recreation' },
]

// Image tiles with the title over a dark gradient.
export const lifestyleTiles = [
  { title: 'Garmin Tacx® indoor training', image: media('TacxÂ® NEO 3M Smart 1.webp'), href: '/c/indoor-trainers' },
  { title: 'Golf devices for every round', image: media('74662-golf-pod2.webp'), href: '/c/golf' },
  { title: 'Wearables for women', image: media('82782-womens_wearables.webp'), href: '/c/women-wearables' },
]

export const cyclingBanner = { title: 'Bike computers, radar and power meters', image: media('74662-1050-cycling-POD.webp'), href: '/c/cycling' }
export const kidsBanner = { title: 'Wearables made for kids', image: media('82782-kids-pod-V3.webp'), href: '/c/kids-wearables' }

export const categories = [
  { title: 'Smartwatches', image: media('74662-smartwatch-pod.webp'), href: '/c/smartwatches' },
  { title: 'Sports & Fitness', image: media('74662-sports-and-fitness-pod.webp'), href: '/c/sports-fitness' },
  { title: 'Outdoor Recreation', image: media('46074-outdoor_recreation.jpg'), href: '/c/outdoor-recreation' },
]
