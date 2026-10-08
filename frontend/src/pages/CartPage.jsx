import { X } from 'lucide-react'
import ShopButton from '../components/ui/ShopButton'
import { useCart } from '../context/CartContext'
import { useLocale } from '../context/locale'
import { findProduct, productPath } from '../data/products'

const QUANTITIES = [1, 2, 3, 4, 5, 6]

function lineDetails(item) {
  const product = findProduct(item.productId)
  const variant = product?.variants?.find(({ sku }) => sku === item.sku)
  return {
    image: variant?.images?.[0] || product?.image,
    href: product && (item.sku ? `/p/${item.sku}` : productPath(product)),
    options: Object.values(item.variants || {}).filter(Boolean),
  }
}

export default function CartPage() {
  const { t } = useLocale()
  const { items, count, setQuantity, remove, clear } = useCart()

  if (!items.length) {
    return (
      <main className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-4 py-20 text-center">
        <h1 className="font-display text-3xl">{t('Your Cart is Empty')}</h1>
        <ShopButton href="/" variant="dark">{t('Start shopping')}</ShopButton>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-[1140px] px-4 pb-16 pt-12">
      <h1 className="mb-10 text-center font-display text-sm uppercase tracking-wide">{t('Cart')}</h1>
      <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
        <section aria-label={t('Cart items')}>
          <ul className="space-y-4">
            {items.map((item) => {
              const { image, href, options } = lineDetails(item)
              return (
                <li key={item.key} className="relative flex gap-6 bg-white p-6 pr-12 shadow-[0_0_6px_rgba(0,0,0,0.12)]">
                  {image && <img src={image} alt="" className="size-24 shrink-0 object-contain sm:size-28" />}
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-2xl leading-tight">{href ? <a href={href} className="hover:underline">{item.name}</a> : item.name}</h2>
                    {item.sku && <p className="mt-2 text-xs text-neutral-600">{item.sku}</p>}
                    {options.length > 0 && <p className="mt-1 text-xs text-neutral-600">{options.map((option) => t(option)).join(' · ')}</p>}
                    <p className="mt-2 text-sm">{t('Contact for price')}</p>
                    <label className="mt-4 inline-block">
                      <span className="sr-only">{t('Quantity')}</span>
                      <select value={item.quantity} onChange={(event) => setQuantity(item.key, Number(event.target.value))} className="h-10 w-16 border border-neutral-300 bg-white px-2 text-sm">
                        {QUANTITIES.map((quantity) => <option key={quantity} value={quantity}>{quantity}</option>)}
                      </select>
                    </label>
                  </div>
                  <button type="button" onClick={() => remove(item.key)} aria-label={`${t('Remove')} ${item.name}`} className="absolute right-4 top-4 p-1 hover:text-neutral-600"><X size={18} /></button>
                </li>
              )
            })}
          </ul>
          <button type="button" onClick={clear} className="mt-6 h-10 border border-black px-4 font-display text-xs uppercase hover:bg-black hover:text-white">{t('Clear cart')}</button>
        </section>

        <aside className="h-fit bg-neutral-100 p-4">
          <dl className="space-y-2 text-xs font-bold">
            <div className="flex justify-between gap-4"><dt>{t('Items')}</dt><dd>{count}</dd></div>
            <div className="flex justify-between gap-4"><dt>{t('Estimated Total')}</dt><dd className="text-right">{t('Contact for price')}</dd></div>
          </dl>
          <button type="button" disabled className="mt-6 h-11 w-full bg-sky-300 font-display text-xs uppercase text-black disabled:cursor-not-allowed disabled:opacity-60">{t('Checkout')}</button>
          <p className="mt-3 text-xs leading-relaxed text-neutral-600">{t('Online checkout is not available yet. Contact us to complete your order.')}</p>
          <a href="/" className="mt-6 block text-center font-display text-xs uppercase text-sky-700 hover:underline">{t('Continue shopping')}</a>
        </aside>
      </div>
    </main>
  )
}
