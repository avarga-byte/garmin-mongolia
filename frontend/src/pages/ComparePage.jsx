import { useState } from 'react'
import { ChevronLeft, X } from 'lucide-react'
import { useLocale } from '../context/locale'
import { findProduct, productPath } from '../data/products'

const COMPARE_LIMIT = 3

const readIds = () => (new URLSearchParams(window.location.search).get('products') || '').split(',').filter(Boolean).slice(0, COMPARE_LIMIT)

const summaryRows = [
  ['Type', (product) => product.kicker],
  ['Battery life', (product) => product.battery],
  ['Water rating', (product) => product.water],
  ['Key feature', (product) => product.highlight],
]

function specificationGroups(products) {
  const groups = new Map()
  for (const product of products) {
    for (const group of product.specifications || []) {
      const labels = groups.get(group.title) ?? new Set()
      for (const [label] of group.rows) labels.add(label)
      groups.set(group.title, labels)
    }
  }
  return [...groups].map(([title, labels]) => ({
    title,
    rows: [...labels].map((label) => [label, products.map((product) => product.specifications?.find((group) => group.title === title)?.rows.find(([row]) => row === label)?.[1])]),
  }))
}

export default function ComparePage() {
  const { t } = useLocale()
  const [ids, setIds] = useState(readIds)
  const products = ids.map(findProduct).filter(Boolean)
  const rows = summaryRows.map(([label, value]) => [label, products.map(value)]).filter(([, values]) => values.some(Boolean))
  const groups = specificationGroups(products)

  const removeProduct = (id) => {
    const next = ids.filter((value) => value !== id)
    setIds(next)
    window.history.replaceState(null, '', `${window.location.pathname}${next.length ? `?products=${next.map(encodeURIComponent).join(',')}` : ''}`)
  }

  const valueCell = (value, index) => <td key={index} className="p-3 align-top">{value ? t(value) : '—'}</td>

  return (
    <main className="mx-auto max-w-[1140px] px-4 pb-16 pt-8">
      <a href="/" className="inline-flex items-center gap-1 text-xs underline"><ChevronLeft size={14} /> {t('Return to shopping')}</a>
      <h1 className="mt-6 text-center font-display text-3xl uppercase">{t('Product comparison')}</h1>

      {products.length === 0 ? (
        <p className="py-16 text-center text-sm text-neutral-600">{t('Select up to three products using Compare on a category page.')}</p>
      ) : (
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] table-fixed border-collapse text-left text-sm">
            <thead>
              <tr>
                <th scope="col" className="w-40"><span className="sr-only">{t('Specifications')}</span></th>
                {products.map((product) => (
                  <th key={product.id} scope="col" className="relative p-3 align-top font-normal">
                    <button type="button" onClick={() => removeProduct(product.id)} aria-label={`${t('Remove')} ${product.name}`} className="absolute right-2 top-2 p-1 hover:text-neutral-600"><X size={16} /></button>
                    <a href={productPath(product)} className="block">
                      <img src={product.image} alt="" className="mx-auto aspect-square w-40 object-contain" />
                      <span className="mt-3 block font-display text-xl leading-tight">{product.name}</span>
                    </a>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">{t(product.description)}</p>
                    <p className="mt-2 text-xs font-bold">{t(product.priceLabel || 'Contact for price')}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, values]) => (
                <tr key={label} className="border-t border-neutral-200">
                  <th scope="row" className="p-3 align-top text-xs uppercase text-neutral-500">{t(label)}</th>
                  {values.map(valueCell)}
                </tr>
              ))}
            </tbody>
            {groups.map((group) => (
              <tbody key={group.title}>
                <tr><th colSpan={products.length + 1} scope="colgroup" className="bg-neutral-100 p-3 font-display text-base uppercase">{t(group.title)}</th></tr>
                {group.rows.map(([label, values]) => (
                  <tr key={label} className="border-t border-neutral-200">
                    <th scope="row" className="p-3 align-top text-xs text-neutral-600">{t(label)}</th>
                    {values.map(valueCell)}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      )}
    </main>
  )
}
