import { useEffect, useState } from 'react'
import { RotateCcw, ShieldCheck, ShoppingBag, Truck } from 'lucide-react'
import { useLocale } from '../../context/locale'
import { useCart } from '../../context/CartContext'

const benefits = [
  { Icon: Truck, text: 'Ask us about delivery' },
  { Icon: RotateCcw, text: 'Ask us about returns' },
  { Icon: ShieldCheck, text: 'Ask us about warranty' },
]

const optionLabel = (option) => typeof option === 'string' ? option : option.label
const optionValue = (option) => typeof option === 'string' ? option : option.value ?? option.label
const initialOptions = (product) => product.variants?.find(({ sku }) => sku === product.initialVariantSku)?.options
  || Object.fromEntries((product.variantGroups || []).map(({ id, options }) => [id, optionValue(options[0])]))

export default function PurchasePanel({ product, onVariantChange }) {
  const { t } = useLocale()
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const groups = product.variantGroups || []
  const [selected, setSelected] = useState(() => initialOptions(product))
  const variants = product.variants || []
  const selectedVariant = variants.find((variant) => Object.entries(selected).every(([id, value]) => variant.options?.[id] === value))
  const selectedPrice = selectedVariant?.price

  useEffect(() => {
    onVariantChange?.(selectedVariant || null)
  }, [selectedVariant, onVariantChange])

  const changeVariant = (groupId, value) => {
    const next = { ...selected, [groupId]: value }
    if (!variants.length) return setSelected(next)
    const exact = variants.find((variant) => Object.entries(next).every(([id, selectedValue]) => variant.options?.[id] === selectedValue))
    if (exact) return setSelected(next)
    const nearest = variants.filter((variant) => variant.options?.[groupId] === value)
      .sort((a, b) => Object.keys(next).filter((id) => id !== groupId && b.options?.[id] === next[id]).length - Object.keys(next).filter((id) => id !== groupId && a.options?.[id] === next[id]).length)[0]
    if (nearest) setSelected(nearest.options)
  }

  return (
    <section className="purchase">
      {product.kicker && <div className="product-kicker">{t(product.kicker).toUpperCase()}</div>}
      <h1>{product.name}</h1>
      {(selectedVariant?.sku || product.sku) && <p className="part-number">{t('Part Number')}: {selectedVariant?.sku || product.sku}</p>}
      {product.badge && <span className="product-badge">{t(product.badge)}</span>}
      <p className="pdp-summary">{t(product.description)}</p>
      {(selectedPrice || product.priceLabel || product.price) && <div className="pdp-price">{selectedPrice ? `${selectedPrice.amount} ${selectedPrice.currency}` : product.priceLabel ? t(product.priceLabel) : product.price}</div>}
      {groups.map((group) => (
        <fieldset className="variant-group" key={group.id}>
          <legend>{t(group.label)} <b>{t(optionLabel(group.options.find((option) => optionValue(option) === selected[group.id]) || group.options[0]))}</b></legend>
          <div className={group.display === 'swatches' ? 'variant-swatches' : 'variant-options'}>
            {group.options.map((option) => {
              const label = optionLabel(option)
              const value = optionValue(option)
              const active = selected[group.id] === value
              const available = !variants.length || variants.some((variant) => variant.options?.[group.id] === value)
              return <button key={value} type="button" disabled={!available} aria-label={`${t(group.label)}: ${t(label)}`} aria-pressed={active} title={t(label)} onClick={() => changeVariant(group.id, value)} className={group.display === 'swatches' ? `variant-swatch ${active ? 'active' : ''}` : `variant-option ${active ? 'active' : ''}`} style={group.display === 'swatches' ? { '--swatch-color': option.color } : undefined}>{group.display === 'swatches' ? <span className="sr-only">{t(label)}</span> : t(label)}</button>
            })}
          </div>
        </fieldset>
      ))}
      <button type="button" className="add-cart" disabled={variants.length > 0 && !selectedVariant} onClick={() => { add({ productId: product.id, sku: selectedVariant?.sku || product.sku, name: product.name, variants: selected }); setAdded(true) }}>
        {added ? t('ADDED TO CART') : t('ADD TO CART')} <ShoppingBag size={18} />
      </button>
      <div className="availability">{t('In stock · Ships in 1–3 days')}</div>
      <div className="purchase-benefits">
        {benefits.map(({ Icon, text }) => <p key={text}><Icon /> {t(text)}</p>)}
      </div>
    </section>
  )
}
