import { useState } from 'react'
import { RotateCcw, ShieldCheck, ShoppingBag, Truck } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const swatches = [
  { name: 'Carbon Gray', className: '' },
  { name: 'Olive Green', className: 'olive' },
  { name: 'Orange', className: 'orange' },
]

const benefits = [
  { Icon: Truck, text: 'Free delivery on orders above AED 300' },
  { Icon: RotateCcw, text: '30-day returns' },
  { Icon: ShieldCheck, text: '1-year limited warranty' },
]

export default function PurchasePanel({ product }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const [color, setColor] = useState(swatches[0])

  return (
    <section className="purchase">
      {product.kicker && <div className="product-kicker">{product.kicker.toUpperCase()}</div>}
      <h1>{product.name}</h1>
      <p className="pdp-summary">{product.description}</p>
      {product.price && <div className="pdp-price">{product.price}{!product.price.startsWith('AED') && <> <small>USD</small></>}</div>}
      <div className="option-title">COLOR <b>{color.name}</b></div>
      <div className="color-options">
        {swatches.map((swatch) => (
          <button key={swatch.name} type="button" aria-label={swatch.name} onClick={() => setColor(swatch)} className={`swatch ${swatch.className} ${swatch === color ? 'active' : ''}`} />
        ))}
      </div>
      <button type="button" className="add-cart" onClick={() => { add(); setAdded(true) }}>
        {added ? 'ADDED TO CART' : 'ADD TO CART'} <ShoppingBag size={18} />
      </button>
      <div className="availability">In stock · Ships in 1–3 days</div>
      <div className="purchase-benefits">
        {benefits.map(({ Icon, text }) => <p key={text}><Icon /> {text}</p>)}
      </div>
    </section>
  )
}
