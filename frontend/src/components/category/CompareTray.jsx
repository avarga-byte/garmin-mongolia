import { useState } from 'react'
import { X } from 'lucide-react'
import { formatPrice } from '../../data/catalog'

export const COMPARE_LIMIT = 3

const rows = [
  ['Price', (product) => formatPrice(product.salePrice ?? product.price)],
  ['Variant', (product) => product.subtitle || '—'],
  ['Series', (product) => product.series?.title ?? '—'],
  ['Features', (product) => product.features.map((feature) => feature.title).join(', ') || '—'],
  ['Activities', (product) => product.activities.map((activity) => activity.title).join(', ') || '—'],
]

export default function CompareTray({ products, onRemove }) {
  const [open, setOpen] = useState(false)
  if (!products.length) return null

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-300 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3">
          <ul className="flex flex-1 gap-3 overflow-x-auto">
            {products.map((product) => (
              <li key={product.sku} className="relative flex w-48 shrink-0 items-center gap-2 border border-neutral-200 p-1 pr-6">
                <img src={product.image} alt="" className="size-10 object-contain" />
                <span className="line-clamp-2 text-xs">{product.title}</span>
                <button type="button" onClick={() => onRemove(product.sku)} aria-label={`Remove ${product.title}`} className="absolute right-1 top-1"><X size={14} /></button>
              </li>
            ))}
          </ul>
          <span className="hidden text-xs text-neutral-500 sm:block">{products.length}/{COMPARE_LIMIT}</span>
          <button type="button" disabled={products.length < 2} onClick={() => setOpen(true)} className="h-9 bg-black px-5 font-display text-xs uppercase text-white disabled:bg-neutral-400">Compare</button>
        </div>
      </div>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Compare products" className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-4" onClick={() => setOpen(false)}>
          <div className="mx-auto max-w-5xl bg-white p-6" onClick={(event) => event.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-2xl uppercase">Compare</h2>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close"><X /></button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] table-fixed text-left text-sm">
                <thead>
                  <tr>
                    <th className="w-28" />
                    {products.map((product) => (
                      <th key={product.sku} className="p-2 align-top font-normal">
                        <a href={`/p/${product.sku}`}>
                          <img src={product.image} alt="" className="mx-auto aspect-square w-32 object-contain" />
                          <span className="mt-2 block font-display text-lg">{product.title}</span>
                        </a>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, value]) => (
                    <tr key={label} className="border-t border-neutral-200">
                      <th scope="row" className="p-2 align-top text-xs uppercase text-neutral-500">{label}</th>
                      {products.map((product) => <td key={product.sku} className="p-2 align-top">{value(product)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
