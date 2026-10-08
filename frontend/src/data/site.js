// Shared site-wide content: header navigation, top bar and footer.
// Shared Garmin storefront content and global product imagery.

const MEDIA = 'https://staginggarmin.garmin.ae/media'

export const media = (file) => `${MEDIA}/${encodeURI(file)}`

export const announcement = 'МОНГОЛ УЛС · ТӨГРӨГ (₮) · ХҮРГЭЛТ, ТӨЛБӨРИЙН НӨХЦӨЛИЙГ ЛАВЛАНА УУ'


export const announcements = { mn: announcement, en: 'Garmin GPS devices and wearables' }

export const navigation = [
  {
    label: 'Smartwatches',
    columns: [
      { title: 'Products', links: ['All Smartwatches', 'Wearables for Women', 'Fashion & Hybrid Smartwatches', 'MARQ Luxury Collection', 'Running', 'Multisport & Triathlon', 'Adventure', 'Swimming', 'Diving', 'Golf', 'Fitness & Health Tracking', 'Kids Wearables'] },
      { title: 'Maps', links: ['Outdoor Maps', 'Golf Course Locator'] },
      { title: 'Accessories & Plans', links: ['Accessories', 'Apps', 'Subscription Plans'] },
      { title: 'Discover', links: ['Garmin Technology'] },
    ],
    promo: { title: 'FORERUNNER® 70 | 170', copy: 'GPS running watches made simple', image: media('Forerunner 170.webp'), href: '/p/forerunner-170' },
  },
  {
    label: 'Sports & Fitness',
    columns: [
      { title: 'Products', links: ['Running', 'Cycling', 'Tacx® Indoor Cycling', 'Fitness & Health Tracking', 'Golf', 'Multisport & Triathlon', 'Swimming', 'Diving', 'Scales & Heart Rate Monitors', 'Kids Wearables'] },
      { title: 'Maps', links: ['Cycling Maps', 'Wearable Maps', 'Golf Maps', 'Golf Course Locator'] },
      { title: 'Accessories', links: ['Smartwatch Accessories', 'Cycling Accessories'] },
    ],
    promo: { title: 'APPROACH® Z10', copy: 'Pocket-size laser rangefinder', image: media('image - 2026-08-03T152533.574.webp'), href: '/p/approach-z10' },
  },
  {
    label: 'Outdoor Recreation',
    columns: [
      { title: 'Products', links: ['Adventure Smartwatches', 'Handheld GPS', 'Satellite Communicators', 'Rangefinders', 'Dog Tracking', 'Outdoor Sensors'] },
      { title: 'Maps', links: ['Outdoor Maps', 'Topographic Maps'] },
      { title: 'Accessories', links: ['Outdoor Accessories'] },
    ],
    promo: { title: 'INSTINCT® 3', copy: 'Rugged watches in limited colours', image: media('Instinct-3-Alpine-Rush-Collection.webp'), href: '/p/instinct-3-alpine' },
  },
]

export const footerColumns = [
  { title: 'Customer Service', links: ['Garmin Support Centre', 'Contact Us', 'Store Locator', 'Warranty Information', 'Bulk Enquiry', 'Deals and Promotions', 'Shipping & Returns Policy', 'Modern Slavery Statement', 'Whistleblowing Scheme', 'Partner With Us'] },
  { title: 'Company', links: ['About Us', 'Blog', 'Store Locator', "FAQ's", 'Sustainability'] },
  { title: 'Platforms', links: ['Garmin Connect', 'Garmin Express', 'Connect IQ', 'Garmin Explore'] },
]

export const legalLinks = ['Site Map', 'Terms of Use', 'Privacy', 'Compliance']

export const footerDestinations = {
  "FAQ's": '/faq',
  'Garmin Support Centre': 'https://support.garmin.com/',
  'Contact Us': '/contact',
  'Store Locator': 'https://www.garmin.com/en-US/dealerlocator/',
  'Warranty Information': '/consumer-limited-warranty',
  'Bulk Enquiry': '/bulk-enquiry',
  'Shipping & Returns Policy': '/shipping',
  'Modern Slavery Statement': '/modern-slavery-statement',
  'Whistleblowing Scheme': '/whistleblowing-scheme',
  'Partner With Us': 'https://www.garmin.com/en-US/authorized-sellers/',
  'About Us': '/about-garmin',
  Sustainability: 'https://www.garmin.com/en-US/sustainability/',
  Company: '/about-garmin',
  'Garmin Connect': 'https://connect.garmin.com/',
  'Garmin Express': 'https://www.garmin.com/en-US/software/express/',
  'Connect IQ': 'https://apps.garmin.com/en-US',
  'Garmin Explore': 'https://explore.garmin.com/',
  'Site Map': 'https://www8.garmin.com/siteIndex.html',
  'Terms of Use': '/terms',
  Privacy: '/privacy',
  Compliance: '/compliance',
  Blog: '/blog',
  'Deals and Promotions': '/sales-promotions',
}

export const promotions = []

export const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
