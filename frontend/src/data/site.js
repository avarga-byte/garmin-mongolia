// Shared site-wide content: header navigation, top bar and footer.
// Copy is written for this project; images are referenced by URL from the Garmin UAE CDN.

const MEDIA = 'https://staginggarmin.garmin.ae/media'

export const media = (file) => `${MEDIA}/${encodeURI(file)}`

export const announcement = 'Free delivery on orders above AED 300 | Easy payment plans available*'

// Header menus, mirroring the garmin.ae navigation. Each link is [label, href]; absolute URLs open the
// matching Garmin page in a new tab, everything else is a page in this storefront.
const GARMIN_UK = 'https://www.garmin.com/en-GB'
const subscriptionPlans = ['Subscription Plans', `${GARMIN_UK}/c/subscription-plans/`]
const apps = ['Apps', '/c/apps']
const blog = ['Blog', 'https://www.garmin.ae/blog/']
const careers = ['Careers', `${GARMIN_UK}/careers/`]
const garminExpress = ['Garmin Express', `${GARMIN_UK}/software/express/`]
const garminTechnology = ['Garmin Technology', `${GARMIN_UK}/garmin-technology/`]
const wearableMaps = ['Wearable Maps', 'https://discover.garmin.com/en-GB/performance-data/wearable-maps/']
const golfCourseLocator = ['Golf Course Locator', `${GARMIN_UK}/golf-courses/`]
const basecamp = ['Basecamp', `${GARMIN_UK}/software/basecamp/`]

const forerunnerPromo = { title: 'FORERUNNER® 70 | 170', copy: 'Easy-to-use GPS running smartwatches', image: media('84290-TopNav.webp'), href: '/p/010-04307-00' }

export const navigation = [
  {
    label: 'Smartwatches',
    href: '/c/wearables-smartwatches',
    columns: [
      {
        title: 'Products',
        links: [
          ['All Smartwatches', '/c/wearables-smartwatches'],
          ['Wearables for Women', '/c/women-wearables'],
          ['Fashion & Hybrid Smartwatches', '/c/fashion-hybrid-smartwatches'],
          ['MARQ Luxury Watch Collection', '/c/luxury-smartwatches'],
          ['Running', '/c/running-smartwatches'],
          ['Marathon', '/c/marathon-season'],
          ['Gaming', '/c/gaming'],
          ['Multisport & Triathlete', '/c/multisport-smartwatches'],
          ['Adventure', '/c/adventure-smartwatches'],
          ['Swimming', '/c/swimming-smartwatches'],
          ['Diving', '/c/dive-computers-smartwatches'],
          ['Golf', '/c/golf-gps-devices-smartwatches'],
          ['Fitness & Health Tracking', '/c/activity-fitness-trackers'],
          ['Kids Wearables', '/c/kids-wearables-fitness-activity-trackers'],
        ],
      },
      { title: 'Maps', links: [['Outdoor Maps', '/c/outdoor-maps'], golfCourseLocator] },
      { title: 'Accessories & Plans', links: [['Accessories', '/c/wearables-smartwatches-accessories'], apps, subscriptionPlans] },
      { title: 'Discover', links: [garminTechnology] },
    ],
    promo: forerunnerPromo,
  },
  {
    label: 'Sports & Fitness',
    href: '/c/sports-fitness',
    columns: [
      {
        title: 'Products',
        links: [
          ['Running', '/c/running-smartwatches'],
          ['Cycling', '/c/cycling'],
          ['Tacx® Indoor Cycling', '/c/indoor-trainers'],
          ['Fitness & Health Tracking', '/c/activity-fitness-trackers'],
          ['Golf', '/c/golf-gps-devices-smartwatches'],
          ['Multisport & Triathlete', '/c/multisport-smartwatches'],
          ['Swimming', '/c/swimming-smartwatches'],
          ['Diving', '/c/dive-computers-smartwatches'],
          ['Scales & Heart Rate Monitors', '/c/scales-monitors'],
          ['Kids Wearables', '/c/kids-wearables-fitness-activity-trackers'],
          ['Marathon', '/c/marathon-season'],
          ['Gaming', '/c/gaming'],
        ],
      },
      { title: 'Maps', links: [['Cycling Maps', `${GARMIN_UK}/maps/updates/cycling/`], wearableMaps, ['Golf Maps', `${GARMIN_UK}/maps/updates/golf/`], golfCourseLocator] },
      {
        title: 'Accessories',
        links: [
          ['Wearables & Smartwatch Accessories', '/c/wearables-smartwatches-accessories'],
          ['Cycling Accessories', '/c/cycling-accessories'],
          ['Indoor Training Accessories', '/c/indoor-training-accessories'],
          apps,
        ],
      },
      {
        title: 'Discover',
        links: [
          blog,
          careers,
          ['Connect IQ', 'https://apps.garmin.com/en-GB/'],
          ['Garmin Coach', 'https://connect.garmin.com/en-GB/'],
          ['Garmin Connect', 'https://connect.garmin.com/en-GB/'],
          garminExpress,
          ['Garmin Enterprise Health Solutions', `${GARMIN_UK}/health/`],
          ['Garmin Pros', `${GARMIN_UK}/pros/`],
          garminTechnology,
          ['Who We Work With', 'https://discover.garmin.com/en-GB/who-we-work-with/'],
          subscriptionPlans,
        ],
      },
    ],
    promo: forerunnerPromo,
  },
  {
    label: 'Outdoor Recreation',
    href: '/c/outdoor-recreation',
    columns: [
      {
        title: 'Products',
        links: [
          ['Handhelds', '/c/handhelds'],
          ['Satellite Communicators', '/c/satellite-communicators'],
          ['Off-Road', '/c/off-road'],
          ['Adventure Watches', '/c/adventure-smartwatches'],
          ['Sportsman & Tactical', '/c/ranging'],
          ['Dog Tracking', '/c/dog-tracking'],
          ['Optics', '/c/optics'],
          ['Equine', '/p/010-02922-01'],
        ],
      },
      { title: 'Maps', links: [['Outdoor Maps', '/c/outdoor-maps'], wearableMaps] },
      { title: 'Accessories', links: [apps] },
      {
        title: 'Discover',
        links: [
          blog,
          careers,
          ['Connect IQ', 'https://apps.garmin.com/en-GB/'],
          ['Garmin Connect', 'https://connect.garmin.com/en-GB/'],
          garminExpress,
          ['Garmin Pros', `${GARMIN_UK}/pros/`],
          basecamp,
          ['inReach Account', 'https://explore.garmin.com/en-GB/'],
          garminTechnology,
          subscriptionPlans,
        ],
      },
    ],
    promo: { title: 'INSTINCT® 2X SOLAR', copy: 'Rugged GPS smartwatch with unlimited solar battery life', image: media('Instinct2XSolar-TopNav-Large.webp'), href: '/c/adventure-smartwatches' },
  },
  {
    label: 'Automotive',
    href: '/c/automotive',
    columns: [
      {
        title: 'Products',
        links: [
          ['Cars, Caravans/Motorhome & Cameras', '/c/cars'],
          ['Motorcycles', '/c/motorcycles'],
          ['Trucks', '/c/trucks'],
          ['Motorsports', '/c/motorsports'],
          ['Off-Road', '/c/off-road'],
          ['Dash & Backup Cameras', '/c/dash-cams-reverse-cameras'],
        ],
      },
      { title: 'Maps', links: [['Map Updates', `${GARMIN_UK}/maps/updates/automotive/`], ['Purchase New Maps', `${GARMIN_UK}/c/road-maps/`], ['In-Dash Maps', 'https://aoem.garmin.com/']] },
      { title: 'Accessories', links: [apps] },
      {
        title: 'Discover',
        links: [
          ['Automotive OEM Solutions', 'https://discover.garmin.com/en-GB/aoem/'],
          blog,
          basecamp,
          careers,
          garminExpress,
          ['RV OEM Solutions', `${GARMIN_UK}/rv-oem/overview/`],
          subscriptionPlans,
        ],
      },
    ],
    promo: { title: 'GARMIN CATALYST™ R1', copy: 'Rear-facing radar made for track days', image: media('GARMIN CATALYSTâ¢ R1.webp'), href: '/c/motorsports' },
  },
  {
    label: 'Marine',
    href: '/c/marine',
    columns: [
      {
        title: 'Products',
        links: [
          ['Chartplotters & Fishfinders', '/c/chartplotters'],
          ['Autopilots', '/c/autopilots'],
          ['Radar', '/c/radar'],
          ['Live Sonar', '/c/live-sonar'],
          ['Sonar Black Boxes', '/c/sonar-black-boxes'],
          ['Transducers', '/c/transducers'],
          ['Instruments & Instrument Packs', '/c/instruments-instrument-packs'],
          ['VHF & AIS', '/c/vhf-ais'],
          ['Cameras', '/c/marine-cameras'],
          ['Antennas & Sensors', '/c/antennas-sensors'],
        ],
      },
      {
        title: 'More Products',
        links: [
          ['Trolling Motors', '/c/trolling-motors'],
          ['Fusion Audio Entertainment', '/c/fusion-audio-entertainment'],
          ['Digital Switching', '/c/digital-switching-marine'],
          ['Handhelds & Wearables', '/c/handhelds-wearables-marine'],
          ['Connectivity', '/c/connectivity'],
          apps,
        ],
      },
      { title: 'Charts & Maps', links: [['Purchase', `${GARMIN_UK}/marinechart-mappurchase/`], ['Update', `${GARMIN_UK}/marine/types-of-updates/`]] },
      {
        title: 'Discover',
        links: [
          blog,
          ['Marine Brochures', `${GARMIN_UK}/marine/brochures/`],
          careers,
          garminExpress,
          ['Marine Software Updates', `${GARMIN_UK}/support/software/marine/`],
          ['Marine System Builder', `${GARMIN_UK}/marine-system-builder/`],
          ['OneHelm', `${GARMIN_UK}/marine/onehelm/`],
          subscriptionPlans,
        ],
      },
    ],
    promo: { title: 'FUSION® SIGNATURE SERIES 3', copy: 'Marine wake tower speakers', image: media('FusionWakeTower-lg-300x225-1.webp'), href: '/p/010-02439-01' },
  },
  {
    label: 'Aviation',
    href: '/c/aviation',
    columns: [
      {
        title: 'Products',
        links: [
          ['General Aviation', '/c/aviation'],
          ['Experimental', 'https://www.garmin.com/en-US/c/aviation/experimental/'],
          ['Portable GPS & Wearables', '/c/portable-gps'],
          apps,
          ['flyGarmin Services', 'https://fly.garmin.com/fly-garmin/'],
        ],
      },
      { title: 'Discover', links: [blog] },
    ],
    promo: { title: 'GARMIN AUTOLAND', copy: 'Protect your most precious cargo', image: media('top_nav_promo-large-autoland-2-225x300-1 (1).webp'), href: 'https://discover.garmin.com/en-GB/autonomi/' },
  },
]

const isExternal = (href) => /^https?:/.test(href)

// Anchor props for a link that may leave the storefront.
export const linkProps = (href) => (isExternal(href) ? { href, target: '_blank', rel: 'noreferrer' } : { href })

export const footerColumns = [
  { title: 'Customer Service', links: ['Garmin Support Centre', 'Contact Us', 'Store Locator', 'Warranty Information', 'Bulk Enquiry', 'Deals and Promotions', 'Shipping & Returns Policy', 'Partner With Us'] },
  { title: 'Company', links: ['About Us', 'Blog', 'Store Locator', "FAQ's", 'Sustainability'] },
  { title: 'Platforms', links: ['Garmin Connect', 'Garmin Express', 'Connect IQ', 'flyGarmin', 'Garmin Explore'] },
]

export const legalLinks = ['Site Map', 'Terms of Use', 'Privacy', 'Compliance']

export const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
