// Shared site-wide content: header navigation, top bar and footer.
// Shared Garmin storefront content and global product imagery.

const MEDIA = 'https://staginggarmin.garmin.ae/media'

export const media = (file) => `${MEDIA}/${encodeURI(file)}`

export const announcement = 'МОНГОЛ УЛС · ТӨГРӨГ (₮) · ХҮРГЭЛТ, ТӨЛБӨРИЙН НӨХЦӨЛИЙГ ЛАВЛАНА УУ'

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
  {
    label: 'Automotive',
    columns: [
      { title: 'Products', links: ['Dash Cams', 'Car Navigators', 'Motorcycle Navigators', 'Truck Navigators', 'Racing Radar'] },
      { title: 'Maps', links: ['Map Updates'] },
      { title: 'Accessories', links: ['Automotive Accessories'] },
    ],
    promo: { title: 'GARMIN CATALYST™ R1', copy: 'Radar for the race track', image: media('GARMIN CATALYSTâ¢ R1.webp'), href: '/p/catalyst-r1' },
  },
  {
    label: 'Marine',
    columns: [
      { title: 'Products', links: ['Chartplotters', 'Fishfinders', 'Live Sonar', 'Marine Smartwatches', 'Trolling Motors', 'Autopilots', 'Radar'] },
      { title: 'Maps', links: ['Marine Charts'] },
      { title: 'Accessories', links: ['Marine Accessories'] },
    ],
    promo: { title: 'LIVESCOPE™ 2 HD', copy: 'Clearer live sonar on the water', image: media('image - 2026-07-14T104349.806.webp'), href: '/p/livescope-2' },
  },
  {
    label: 'Aviation',
    columns: [
      { title: 'Products', links: ['Aviator Smartwatches', 'Portable GPS', 'Avionics', 'Headsets'] },
      { title: 'Apps & Services', links: ['flyGarmin', 'Garmin Pilot'] },
    ],
    promo: { title: 'D2™ MACH 2 PRO', copy: 'A smartwatch built for pilots', image: media('85088-3-M.webp'), href: '/p/d2-mach-2-pro' },
  },
]

export const footerColumns = [
  { title: 'Customer Service', links: ['Garmin Support Centre', 'Contact Us', 'Store Locator', 'Warranty Information', 'Bulk Enquiry', 'Deals and Promotions', 'Shipping & Returns Policy', 'Partner With Us'] },
  { title: 'Company', links: ['About Us', 'Blog', 'Store Locator', "FAQ's", 'Sustainability'] },
  { title: 'Platforms', links: ['Garmin Connect', 'Garmin Express', 'Connect IQ', 'flyGarmin', 'Garmin Explore'] },
]

export const legalLinks = ['Site Map', 'Terms of Use', 'Privacy', 'Compliance']

export const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const mongolian = {
  'Smartwatches': 'Ухаалаг цаг', 'Sports & Fitness': 'Спорт ба фитнес', 'Outdoor Recreation': 'Аялал, адал явдал', 'Automotive': 'Автомашин', 'Marine': 'Далайн төхөөрөмж', 'Aviation': 'Нисэх',
  'Products': 'Бүтээгдэхүүн', 'Maps': 'Газрын зураг', 'Accessories & Plans': 'Дагалдах хэрэгсэл, үйлчилгээ', 'Accessories': 'Дагалдах хэрэгсэл', 'Discover': 'Танилцах', 'Apps & Services': 'Апп, үйлчилгээ',
  'Support': 'Тусламж', 'Customer Service': 'Хэрэглэгчийн үйлчилгээ', 'Company': 'Компанийн тухай', 'Platforms': 'Платформууд', 'Garmin Support Centre': 'Garmin тусламж', 'Contact Us': 'Холбоо барих', 'Store Locator': 'Дэлгүүрийн байршил', 'Warranty Information': 'Баталгаат засвар', 'Bulk Enquiry': 'Бөөний захиалга', 'Deals and Promotions': 'Урамшуулал', 'Shipping & Returns Policy': 'Хүргэлт, буцаалт', 'Partner With Us': 'Хамтран ажиллах', 'About Us': 'Бидний тухай', 'Blog': 'Блог', "FAQ's": 'Түгээмэл асуулт', 'Sustainability': 'Тогтвортой хөгжил', 'Site Map': 'Сайтын бүтэц', 'Terms of Use': 'Үйлчилгээний нөхцөл', 'Privacy': 'Нууцлал', 'Compliance': 'Нийцэл',
  'Featured': 'Онцлох бүтээгдэхүүн', 'Previous products': 'Өмнөх бүтээгдэхүүн', 'Next products': 'Дараах бүтээгдэхүүн', 'Highlights': 'Онцлох бүтээгдэхүүн', 'Previous slide': 'Өмнөх слайд', 'Next slide': 'Дараах слайд', 'Pause slideshow': 'Слайдыг түр зогсоох', 'Play slideshow': 'Слайдыг тоглуулах', 'Shop now': 'Одоо үзэх', 'Shop by category': 'Ангиллаар үзэх',
  'Need a map update?': 'Газрын зургийн шинэчлэл хэрэгтэй юу?', 'Sign up for Garmin news': 'Garmin-ийн мэдээ авах', 'Thanks for signing up!': 'Бүртгүүлсэнд баярлалаа!', 'Email': 'И-мэйл', 'Subscribe': 'Бүртгүүлэх', 'Product news and offers tailored to your interests and devices.': 'Танд тохирсон бүтээгдэхүүний мэдээ, урамшууллыг хүлээн аваарай.',
  "What You'll Love": 'ОНЦЛОХ ФУНКЦ', 'General': 'Ерөнхий', 'Clock Features': 'Цагийн функц', 'Health & Wellness Monitoring': 'Эрүүл мэндийн хяналт', 'Sensors': 'Мэдрэгч', 'Daily Smart Features': 'Өдөр тутмын ухаалаг функц', 'Workout and Training Plans': 'Дасгал, бэлтгэлийн төлөвлөгөө', 'Activity Profiles': 'Хөдөлгөөний төрөл', 'Safety and Tracking Features': 'Аюулгүй байдал, байршлын хяналт', 'Training, Planning and Analysis Features': 'Бэлтгэл, төлөвлөлт, дүн шинжилгээ', 'Running Features': 'Гүйлтийн функц', 'Golfing Features': 'Гольфын функц', 'Mapping & Navigation': 'Газрын зураг, чиглүүлэлт', 'Cycling Features': 'Дугуйн функц', 'Swimming Features': 'Усанд сэлэлтийн функц', 'Battery life (smartwatch mode)': 'Батерейн ажиллах хугацаа (ухаалаг цагийн горим)', 'Built-in mapping': 'Суурилуулсан газрын зураг', 'Pulse Ox blood oxygen': 'Pulse Ox цусан дахь хүчилтөрөгч', 'LED flashlight': 'LED гар чийдэн', 'Solar charging': 'Нарны цэнэглэлт', 'Touchscreen': 'Мэдрэгчтэй дэлгэц', 'Water rating': 'Усны хамгаалалт', 'Strap material': 'Бүсний материал', 'Lens material': 'Шилний материал', 'Bezel material': 'Хүрээний материал', 'Case material': 'Их биеийн материал', 'Physical size': 'Хэмжээ', 'Weight': 'Жин', 'Display Size': 'Дэлгэцийн хэмжээ', 'Display resolution': 'Дэлгэцийн нягтаршил', 'Battery type': 'Батерейн төрөл', 'Battery life': 'Батерейн ажиллах хугацаа', 'Memory/History': 'Санах ой / түүх', 'PRODUCT OVERVIEW': 'БҮТЭЭГДЭХҮҮНИЙ ТУХАЙ', 'Made for your activities': 'Таны идэвхтэй амьдралд', 'PRODUCT INFORMATION': 'БҮТЭЭГДЭХҮҮНИЙ МЭДЭЭЛЭЛ', 'Specifications': 'Үзүүлэлт', 'Explore features, technical details and compatibility information for': 'Онцлог, техникийн үзүүлэлт болон нийцлийн мэдээлэл:', 'details': 'үзүүлэлт', 'NEED A HAND?': 'ТУСЛАМЖ ХЭРЭГТЭЙ ЮУ?', 'Support and resources': 'Тусламж, материал', 'Get manuals, software updates and help for': 'Заавар, программын шинэчлэл болон тусламж:', 'Owner’s manual': 'Хэрэглэгчийн заавар', 'Software and updates': 'Программ, шинэчлэл', 'Product support': 'Бүтээгдэхүүний тусламж', 'KEEP EXPLORING': 'ЦААШ ҮЗЭХ', 'You may also like': 'Танд таалагдаж магадгүй', 'VIEW PRODUCT': 'БҮТЭЭГДЭХҮҮН ҮЗЭХ', 'IN THE BOX': 'ХАЙРЦАГТ', 'Everything you need to get started.': 'Ашиглаж эхлэхэд хэрэгтэй зүйлс.', 'COLOR': 'ӨНГӨ', 'ADD TO CART': 'САГСАНД НЭМЭХ', 'ADDED TO CART': 'САГСАНД НЭМЛЭЭ', 'In stock · Ships in 1–3 days': 'Бэлэн эсэх, хүргэлтийн хугацааг лавлана уу', 'Carbon Gray': 'Нүүрсэн саарал', 'Olive Green': 'Чидун ногоон', 'Orange': 'Улбар шар',
  '30-day returns': 'Буцаалтын нөхцөлийг лавлана уу', '1-year limited warranty': 'Баталгааны нөхцөлийг лавлана уу',
  'Copyright © Garmin storefront demo': '© Garmin Mongolia. Бүх эрх хуулиар хамгаалагдсан.', 'Authorised Distributor': 'Монгол дахь албан ёсны дистрибьютор', 'Included': 'Багтсан', 'yes': 'Тийм', 'yes (with compatible accessory)': 'Нийцтэй дагалдах хэрэгсэлтэй', 'compatible (26 mm)': '26 мм QuickFit® бүстэй нийцнэ',
}

export const mn = (text) => mongolian[text] || text
