import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Newsletter from './components/layout/Newsletter'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { LocaleProvider } from './context/LocaleContext'
import { legalPages } from './data/legal'
import { findProduct, findProductBySku } from './data/products'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/account/LoginPage'
import { ForgotPasswordPage, ResetPasswordPage } from './pages/account/PasswordPages'
import RegisterPage from './pages/account/RegisterPage'
import WishlistPage from './pages/account/WishlistPage'
import BlogPage from './pages/BlogPage'
import BulkEnquiryPage from './pages/BulkEnquiryPage'
import CareerPage from './pages/CareerPage'
import CartPage from './pages/CartPage'
import CategoryPage from './pages/CategoryPage'
import ComparePage from './pages/ComparePage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'
import LegalPage from './pages/LegalPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductPage from './pages/ProductPage'
import SalesPromotionsPage from './pages/SalesPromotionsPage'
import SearchPage from './pages/SearchPage'

const pages = {
  cart: CartPage,
  search: SearchPage,
  compare: ComparePage,
  'sales-promotions': SalesPromotionsPage,
  'about-garmin': AboutPage,
  contact: ContactPage,
  faq: FaqPage,
  'bulk-enquiry': BulkEnquiryPage,
  career: CareerPage,
  blog: BlogPage,
  login: LoginPage,
  register: RegisterPage,
  'forgot-password': ForgotPasswordPage,
  'reset-password': ResetPasswordPage,
}

// Minimal path-based routing: "/" is home, "/p/:id" (or legacy "/products/:id") is a product page.
function route(pathname) {
  const cleanPath = pathname.replace(/^\/(?:mn-MN|en-MN)(?=\/|$)/, '')
  const [section, id] = cleanPath.split('/').filter(Boolean)
  if (!section || section === 'index.html') return <HomePage />
  const Page = !id && pages[section]
  if (Page) return <Page />
  if (section === 'account') return id === 'wishlist' ? <WishlistPage /> : <LoginPage accountRequired />
  if (!id && legalPages[section]) return <LegalPage key={section} page={legalPages[section]} />
  if (section === 'c' && id) return <CategoryPage slug={id} />
  if ((section === 'p' || section === 'products') && id) {
    const product = findProduct(id) || findProductBySku(id)
    if (product) return <ProductPage key={product.id} product={product} />
  }
  return <NotFoundPage />
}

export default function App() {
  return (
    <LocaleProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen bg-white font-sans text-black">
            <Header />
            {route(window.location.pathname)}
            <Newsletter />
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </LocaleProvider>
  )
}
