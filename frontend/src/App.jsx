import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Newsletter from './components/layout/Newsletter'
import { CartProvider } from './context/CartContext'
import { LocaleProvider } from './context/LocaleContext'
import { findProduct, findProductBySku } from './data/products'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductPage from './pages/ProductPage'

// Minimal path-based routing: "/" is home, "/p/:id" (or legacy "/products/:id") is a product page.
function route(pathname) {
  const cleanPath = pathname.replace(/^\/(?:mn-MN|en-MN)(?=\/|$)/, '')
  const [section, id] = cleanPath.split('/').filter(Boolean)
  if (!section || section === 'index.html') return <HomePage />
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
        <div className="min-h-screen bg-white font-sans text-black">
          <Header />
          {route(window.location.pathname)}
          <Newsletter />
          <Footer />
        </div>
      </CartProvider>
    </LocaleProvider>
  )
}
