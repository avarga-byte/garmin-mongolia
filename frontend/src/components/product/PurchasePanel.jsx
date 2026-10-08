import { useState } from 'react'
import { RotateCcw, ShieldCheck, ShoppingBag, Truck } from 'lucide-react'
import { useLocale } from '../../context/locale'
import { useCart } from '../../context/CartContext'

const swatches = [
  { name: 'Carbon Gray', className: '' },
  { name: 'Olive Green', className: 'olive' },
  { name: 'Orange', className: 'orange' },
]

const benefits = [
  { Icon: Truck, text: 'Ask us about delivery' },
  { Icon: RotateCcw, text: 'Ask us about returns' },
  { Icon: ShieldCheck, text: 'Ask us about warranty' },
]

export default function PurchasePanel({ product }) {
  const { t } = useLocale()
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const [color, setColor] = useState(swatches[0])

  return (
    <section className="purchase">
      {product.kicker && <div className="product-kicker">{t(product.kicker).toUpperCase()}</div>}
      <h1>{product.name}</h1>
      <p className="pdp-summary">{t(product.description)}</p>
      {(product.priceLabel || product.price) && <div className="pdp-price">{product.priceLabel ? t(product.priceLabel) : product.price}</div>}
      <div className="option-title">{t('COLOR')} <b>{t(color.name)}</b></div>
      <div className="color-options">
        {swatches.map((swatch) => (
          <button key={swatch.name} type="button" aria-label={swatch.name} onClick={() => setColor(swatch)} className={`swatch ${swatch.className} ${swatch === color ? 'active' : ''}`} />
        ))}
      </div>
      <button type="button" className="add-cart" onClick={() => { add(); setAdded(true) }}>
        {added ? t('ADDED TO CART') : t('ADD TO CART')} <ShoppingBag size={18} />
      </button>
      <div className="availability">{t('In stock · Ships in 1–3 days')}</div>
      <div className="purchase-benefits">
        {benefits.map(({ Icon, text }) => <p key={text}><Icon /> {t(text)}</p>)}
      </div>
    </section>
  )
}
