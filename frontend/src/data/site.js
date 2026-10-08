// Shared site-wide content: header navigation, top bar and footer.
// Copy is written for this project; images are referenced by URL from the Garmin UAE CDN.

const MEDIA = 'https://staginggarmin.garmin.ae/media'

export const media = (file) => `${MEDIA}/${encodeURI(file)}`

export const announcement = 'Free delivery on orders above AED 300 | Easy payment plans available*'

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
      { title: 'Maps', links: [['Outdoor Maps', `${GARMIN_UK}/c/outdoor-maps/`], golfCourseLocator] },
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
          ['Adventure Watches', '/c/adventure-smartwatches'],
          ['Sportsman & Tactical', '/c/ranging'],
          ['Dog Tracking', '/c/dog-tracking'],
          ['Optics', '/c/optics'],
          ['Equine', '/p/010-02922-01'],
        ],
      },
      { title: 'Maps', links: [['Outdoor Maps', `${GARMIN_UK}/c/outdoor-maps/`], wearableMaps] },
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
]

const isExternal = (href) => /^https?:/.test(href)

export const linkProps = (href) => (isExternal(href) ? { href, target: '_blank', rel: 'noreferrer' } : { href })

export const footerColumns = [
  { title: 'Customer Service', links: ['Garmin Support Centre', 'Contact Us', 'Store Locator', 'Warranty Information', 'Bulk Enquiry', 'Deals and Promotions', 'Shipping & Returns Policy', 'Partner With Us'] },
  { title: 'Company', links: ['About Us', 'Blog', 'Store Locator', "FAQ's", 'Sustainability'] },
  { title: 'Platforms', links: ['Garmin Connect', 'Garmin Express', 'Connect IQ', 'Garmin Explore'] },
]

export const legalLinks = ['Site Map', 'Terms of Use', 'Privacy', 'Compliance']

export const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
