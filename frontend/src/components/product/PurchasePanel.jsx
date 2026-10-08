import { useState } from 'react'
import { RotateCcw, ShieldCheck, ShoppingBag, Truck } from 'lucide-react'
import { mn } from '../../data/site'
import { useCart } from '../../context/CartContext'

const swatches = [
  { name: 'Carbon Gray', className: '' },
  { name: 'Olive Green', className: 'olive' },
  { name: 'Orange', className: 'orange' },
]

const benefits = [
  { Icon: Truck, text: 'Хүргэлтийн нөхцөлийг лавлана уу' },
  { Icon: RotateCcw, text: 'Буцаалтын нөхцөлийг лавлана уу' },
  { Icon: ShieldCheck, text: 'Баталгааны нөхцөлийг лавлана уу' },
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
      {(product.priceLabel || product.price) && <div className="pdp-price">{product.priceLabel || product.price}</div>}
      <div className="option-title">{mn('COLOR')} <b>{mn(color.name)}</b></div>
      <div className="color-options">
        {swatches.map((swatch) => (
          <button key={swatch.name} type="button" aria-label={swatch.name} onClick={() => setColor(swatch)} className={`swatch ${swatch.className} ${swatch === color ? 'active' : ''}`} />
        ))}
      </div>
      <button type="button" className="add-cart" onClick={() => { add(); setAdded(true) }}>
        {added ? 'САГСАНД НЭМЛЭЭ' : 'САГСАНД НЭМЭХ'} <ShoppingBag size={18} />
      </button>
      <div className="availability">Бэлэн эсэх, хүргэлтийн хугацааг лавлана уу</div>
      <div className="purchase-benefits">
        {benefits.map(({ Icon, text }) => <p key={text}><Icon /> {text}</p>)}
      </div>
    </section>
  )
}
