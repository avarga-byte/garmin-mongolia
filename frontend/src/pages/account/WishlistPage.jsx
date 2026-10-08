import { X } from 'lucide-react'
import ShopButton from '../../components/ui/ShopButton'
import { useCart } from '../../context/CartContext'
import { useLocale } from '../../context/locale'
import { useWishlist } from '../../context/WishlistContext'
import { findProduct, productPath } from '../../data/products'

export default function WishlistPage() {
  const { t } = useLocale()
  const { items, remove } = useWishlist()
  const { add } = useCart()
  const products = items.map((item) => ({ ...item, product: findProduct(item.productId) })).filter(({ product }) => product)

  return (
    <main className="mx-auto max-w-[1140px] px-4 pb-16 pt-12">
      <h1 className="text-center font-display text-3xl uppercase">{t('Wishlist')}</h1>
      {products.length === 0 ? (
        <div className="flex flex-col items-center gap-6 py-16 text-center">
          <p className="text-sm text-neutral-600">{t('Your wishlist is empty. Save products you like to find them here later.')}</p>
          <ShopButton href="/" variant="dark">{t('Start shopping')}</ShopButton>
        </div>
      ) : (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ productId, sku, product }) => {
            const href = sku ? `/p/${sku}` : productPath(product)
            return (
              <li key={productId} className="relative flex flex-col bg-white p-4 shadow-[0_0_6px_rgba(0,0,0,0.12)]">
                <button type="button" onClick={() => remove(productId)} aria-label={`${t('Remove')} ${product.name}`} className="absolute right-3 top-3 p-1 hover:text-neutral-600"><X size={18} /></button>
                <a href={href} className="flex flex-1 flex-col">
                  <img src={product.image} alt="" className="mx-auto aspect-square w-full object-contain" />
                  <h2 className="mt-3 font-display text-xl leading-tight">{product.name}</h2>
                  {sku && <p className="mt-1 text-xs text-neutral-500">{sku}</p>}
                  <p className="mt-2 text-sm">{t(product.priceLabel || 'Contact for price')}</p>
                </a>
                <button type="button" onClick={() => add({ productId, sku: sku || product.sku, name: product.name })} className="mt-4 h-10 bg-sky-600 font-display text-xs uppercase text-white hover:bg-sky-700">{t('ADD TO CART')}</button>
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
