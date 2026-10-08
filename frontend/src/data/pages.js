export const localized = (value, locale) => (value && typeof value === 'object' && !Array.isArray(value) ? value[locale] ?? value.en : value)

export const pageHero = 'https://static.garmincdn.com/contentful/directory/about%20us/41086-D-1.jpg'

export const company = {
  name: { en: 'Engineering Geodesy LLC', mn: 'Инженер Геодези ХХК' },
  address: { en: 'Building 52/3, Amarsanaa Street, Bayangol District, Ulaanbaatar 16040, Mongolia', mn: 'Улаанбаатар хот 16040, Баянгол дүүрэг, Амарсанаагийн гудамж, барилга 52/3' },
  phone: '+976 7727-8899',
  email: 'post@geo-mongol.com',
  website: 'https://geo-mongol.mn',
}

export const about = {
  title: { en: 'About us', mn: 'Бидний тухай' },
  intro: {
    en: [
      'Garmin builds GPS navigation and wearable technology for people who would rather be out training, exploring and travelling than sitting still.',
      'Since 1989 the company has grown to more than 19,000 associates in offices around the world, making products for fitness, outdoor and adventure customers.',
    ],
    mn: [
      'Garmin нь бэлтгэл хийх, аялах, байгальд гарах дуртай хүмүүст зориулсан GPS навигаци болон ухаалаг цаг, бугуйвч бүтээдэг.',
      '1989 онд байгуулагдсан тус компани өнөөдөр дэлхийн олон оронд 19,000 гаруй ажилтантай бөгөөд фитнес, аялал, адал явдлын чиглэлээр бүтээгдэхүүн үйлдвэрлэдэг.',
    ],
  },
  principles: [
    { title: { en: 'Mission', mn: 'Эрхэм зорилго' }, text: { en: 'Build a lasting company by making superior products that become an essential part of customers’ lives.', mn: 'Хэрэглэгчийн өдөр тутмын амьдралын салшгүй хэсэг болох шилдэг бүтээгдэхүүнээр урт хугацаанд тогтвортой хөгжих.' } },
    { title: { en: 'Vision', mn: 'Алсын хараа' }, text: { en: 'Lead every market Garmin serves with products people seek out for their design, quality and value.', mn: 'Загвар, чанар, үнэ цэнээрээ хүмүүсийн сонгох бүтээгдэхүүнээр ажилладаг зах зээл бүртээ тэргүүлэх.' } },
    { title: { en: 'Values', mn: 'Үнэт зүйлс' }, text: { en: 'Honesty, integrity and respect for associates, customers and partners, and following through on what we promise.', mn: 'Ажилтан, хэрэглэгч, түнш бүрт шударга, хүндэтгэлтэй хандаж, амласнаа биелүүлэх.' } },
  ],
  strategies: [
    { title: { en: 'People', mn: 'Хүмүүс' }, text: { en: 'Hire great talent and give them room to grow over a long career.', mn: 'Шилдэг мэргэжилтнүүдийг татан, урт хугацаанд өсөж хөгжих боломж олгох.' }, image: 'https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-people-DESKTOP.jpg' },
    { title: { en: 'Products', mn: 'Бүтээгдэхүүн' }, text: { en: 'Combine useful features and leading technology with products that are easy to use.', mn: 'Хэрэгцээтэй функц, дэвшилтэт технологийг хэрэглэхэд хялбар бүтээгдэхүүнд шингээх.' }, image: 'https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-PRODUCTS-DESKTOP.jpg' },
    { title: { en: 'Operations', mn: 'Үйл ажиллагаа' }, text: { en: 'Design, manufacture, distribute and support products through Garmin’s own global network.', mn: 'Бүтээгдэхүүнээ өөрийн дэлхийн сүлжээгээр зохион бүтээж, үйлдвэрлэж, түгээж, дэмжих.' }, image: 'https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-OPERATIONS-DESKTOP.jpg' },
    { title: { en: 'Growth', mn: 'Өсөлт' }, text: { en: 'Keep innovating to open up new products and new markets.', mn: 'Тасралтгүй шинийг санаачилж, шинэ бүтээгдэхүүн, зах зээлийг нээх.' }, image: 'https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-GROWTH-DESKTOP.jpg' },
    { title: { en: 'Sustainability', mn: 'Тогтвортой байдал' }, text: { en: 'Reinvest in people, facilities and equipment for long-term stability.', mn: 'Хүмүүс, байгууламж, тоног төхөөрөмжид дахин хөрөнгө оруулж, урт хугацааны тогтвортой байдлыг хангах.' }, image: 'https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-SUSTAINABILITY-DESKTOP.jpg' },
  ],
  local: {
    title: { en: 'Garmin in Mongolia', mn: 'Garmin Монголд' },
    text: { en: 'Garmin products in Mongolia are offered through Engineering Geodesy LLC in Ulaanbaatar. Contact the team for product advice, orders and support.', mn: 'Монголд Garmin бүтээгдэхүүнийг Улаанбаатар хотод байрлах Инженер Геодези ХХК санал болгож байна. Бүтээгдэхүүний зөвлөгөө, захиалга, тусламж авах бол манай багтай холбогдоорой.' },
  },
}

export const contact = {
  title: { en: 'Contact us', mn: 'Холбоо барих' },
  sections: [
    { title: { en: 'Sales and orders', mn: 'Худалдаа, захиалга' }, text: { en: 'For product availability, prices and orders, call or email us.', mn: 'Бүтээгдэхүүний үлдэгдэл, үнэ, захиалгын талаар утсаар эсвэл и-мэйлээр холбогдоно уу.' }, phone: true, email: true },
    { title: { en: 'Technical support', mn: 'Техникийн тусламж' }, text: { en: 'Manuals, software updates and troubleshooting guides are available at the Garmin Support Centre. For local help, contact our team.', mn: 'Хэрэглэгчийн заавар, программын шинэчлэл, алдаа засах зааврыг Garmin-ийн тусламжийн төвөөс авах боломжтой. Орон нутгийн тусламж хэрэгтэй бол манай багтай холбогдоно уу.' }, link: { label: { en: 'Garmin Support Centre', mn: 'Garmin тусламжийн төв' }, href: 'https://support.garmin.com/' }, phone: true },
    { title: { en: 'Visit us', mn: 'Манай хаяг' }, text: company.address, map: true },
  ],
}

export const faqs = {
  title: { en: 'Frequently asked questions', mn: 'Түгээмэл асуулт' },
  intro: { en: 'Quick answers to the questions we hear most often.', mn: 'Хамгийн их асуудаг асуултуудын товч хариулт.' },
  items: [
    { question: { en: 'How do I place an order?', mn: 'Хэрхэн захиалга өгөх вэ?' }, answer: { en: 'Online checkout is not available yet. Add products to your cart to keep track of them, then contact us to confirm price, availability and delivery.', mn: 'Онлайн захиалга одоогоор боломжгүй байна. Сонирхсон бараагаа сагсандаа нэмээд, үнэ, үлдэгдэл, хүргэлтийг тодруулахаар бидэнтэй холбогдоно уу.' }, link: { label: { en: 'Contact us', mn: 'Холбоо барих' }, href: '/contact' } },
    { question: { en: 'Where can I find manuals and software updates?', mn: 'Хэрэглэгчийн заавар, программын шинэчлэлийг хаанаас авах вэ?' }, answer: { en: 'The Garmin Support Centre has manuals, software and how-to guides for every product. Garmin Express keeps your device up to date from a computer.', mn: 'Бүх бүтээгдэхүүний заавар, программ, хэрэглэх зөвлөмж Garmin-ийн тусламжийн төвд бий. Garmin Express программаар төхөөрөмжөө компьютерээс шинэчилж болно.' }, link: { label: { en: 'Garmin Support Centre', mn: 'Garmin тусламжийн төв' }, href: 'https://support.garmin.com/' } },
    { question: { en: 'What personal data does Garmin collect?', mn: 'Garmin ямар хувийн мэдээлэл цуглуулдаг вэ?' }, answer: { en: 'Garmin asks for details such as your name, email address and location so you can sign in, get personalised support, receive safety notices about your devices and use product features.', mn: 'Нэвтрэх, тусламж авах, төхөөрөмжийн аюулгүй байдлын мэдэгдэл хүлээн авах болон бүтээгдэхүүний функцийг ашиглахын тулд Garmin таны нэр, и-мэйл, байршил зэрэг мэдээллийг асуудаг.' }, link: { label: { en: 'Learn more', mn: 'Дэлгэрэнгүй' }, href: 'https://www.garmin.com/en-US/privacy/' } },
    { question: { en: 'Does Garmin sell my personal data?', mn: 'Garmin миний хувийн мэдээллийг худалддаг уу?' }, answer: { en: 'No. Garmin states that it does not sell personal data and only shares it in specific situations described in its privacy policy.', mn: 'Үгүй. Garmin хувийн мэдээллийг худалддаггүй бөгөөд зөвхөн нууцлалын бодлогодоо заасан тодорхой тохиолдолд хуваалцдаг гэж мэдэгдсэн.' }, link: { label: { en: 'Learn more', mn: 'Дэлгэрэнгүй' }, href: 'https://www.garmin.com/en-US/privacy/' } },
    { question: { en: 'How can I manage my personal data?', mn: 'Хувийн мэдээллээ хэрхэн удирдах вэ?' }, answer: { en: 'Use the data management options in your Garmin account to review, download or delete your data.', mn: 'Garmin бүртгэлийнхээ мэдээлэл удирдах хэсгээс өөрийн мэдээллийг харах, татах, устгах боломжтой.' }, link: { label: { en: 'Learn more', mn: 'Дэлгэрэнгүй' }, href: 'https://www.garmin.com/en-US/privacy/' } },
  ],
}

export const bulkEnquiry = {
  title: { en: 'Bulk enquiry form', mn: 'Бөөний захиалгын хүсэлт' },
  intro: { en: 'Ordering for a team, club or company? Tell us what you need and we will get back to you.', mn: 'Баг, клуб, байгууллагадаа захиалах уу? Хэрэгцээгээ бичээд илгээвэл бид эргэн холбогдоно.' },
  note: { en: 'Sending opens your email app with the details filled in.', mn: 'Илгээх товчийг дарахад таны и-мэйл программ мэдээлэл бөглөгдсөн байдлаар нээгдэнэ.' },
}

export const careers = {
  title: { en: 'Careers', mn: 'Ажлын байр' },
  tagline: { en: 'Put your passion to work', mn: 'Хүсэл тэмүүллээ ажил болго' },
  sections: [
    { title: { en: 'We fuel people’s passions', mn: 'Бид хүмүүсийн хүсэл тэмүүллийг дэмждэг' }, text: { en: 'Garmin products go wherever people live, work and play, and the people who build and sell them use them every day too.', mn: 'Garmin бүтээгдэхүүн хүмүүсийн амьдарч, ажиллаж, амарч буй газар бүрт хамт явдаг бөгөөд тэдгээрийг бүтээж, борлуулдаг хүмүүс ч өдөр бүр ашигладаг.' } },
    { title: { en: 'Work with Garmin', mn: 'Garmin-тай хамт ажиллах' }, text: { en: 'Garmin hires engineers, designers, support specialists and more in offices around the world. Browse open roles on the global careers site.', mn: 'Garmin дэлхийн олон оффисдоо инженер, дизайнер, тусламжийн мэргэжилтэн болон бусад чиглэлээр ажилтан авдаг. Нээлттэй ажлын байрыг дэлхийн ажлын байрны сайтаас үзээрэй.' }, link: { label: { en: 'Garmin careers', mn: 'Garmin ажлын байр' }, href: 'https://careers.garmin.com/' } },
  ],
  openingsTitle: { en: 'Open positions in Mongolia', mn: 'Монгол дахь нээлттэй ажлын байр' },
  empty: { en: 'There are no open positions listed at the moment.', mn: 'Одоогоор нээлттэй ажлын байр зарлагдаагүй байна.' },
}

export const jobOpenings = []

export const blog = {
  title: { en: 'Garmin blog', mn: 'Garmin блог' },
  tagline: { en: 'The latest on our products and technology.', mn: 'Бүтээгдэхүүн, технологийн шинэ мэдээ.' },
  empty: { en: 'No articles have been published yet. Read the latest stories on the Garmin global blog.', mn: 'Одоогоор нийтлэл гараагүй байна. Хамгийн сүүлийн мэдээг Garmin-ийн дэлхийн блогоос уншаарай.' },
  globalBlog: 'https://www.garmin.com/en-US/blog/',
  categories: [
    { id: 'cycling', label: { en: 'Cycling', mn: 'Дугуй' } },
    { id: 'health', label: { en: 'Health', mn: 'Эрүүл мэнд' } },
    { id: 'outdoor', label: { en: 'Outdoor recreation', mn: 'Аялал' } },
    { id: 'running', label: { en: 'Running', mn: 'Гүйлт' } },
  ],
}

export const blogPosts = []
