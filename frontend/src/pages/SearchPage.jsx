import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import ProductCard from '../components/home/ProductCard'
import { useLocale } from '../context/locale'
import { allProducts } from '../data/products'

const normalize = (text) => (text || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

function writeQuery(query) {
  const params = new URLSearchParams(window.location.search)
  if (query) params.set('query', query)
  else params.delete('query')
  const search = params.toString()
  window.history.replaceState(null, '', `${window.location.pathname}${search ? `?${search}` : ''}`)
}

export default function SearchPage() {
  const { t } = useLocale()
  const [query, setQuery] = useState(() => new URLSearchParams(window.location.search).get('query') || '')
  const products = useMemo(() => allProducts(), [])
  const term = normalize(query.trim())
  const results = useMemo(() => {
    if (!term) return []
    const words = term.split(/\s+/)
    return products.filter((product) => {
      const haystack = normalize([product.name, product.kicker, product.description, product.sku, ...(product.skuAliases || [])].join(' '))
      return words.every((word) => haystack.includes(word))
    })
  }, [products, term])

  const update = (value) => {
    setQuery(value)
    writeQuery(value.trim())
  }

  return (
    <main className="min-h-[60vh]">
      <form role="search" onSubmit={(event) => event.preventDefault()} className="mx-auto flex max-w-[1140px] items-center gap-4 border-b border-neutral-300 px-4 py-8 sm:px-12">
        <Search size={22} aria-hidden className="shrink-0" />
        <label className="flex-1">
          <span className="sr-only">{t('Search')}</span>
          <input type="search" autoFocus value={query} onChange={(event) => update(event.target.value)} placeholder={t('Search Garmin')} className="w-full bg-transparent text-xl outline-none placeholder:text-neutral-500 [&::-webkit-search-cancel-button]:hidden" />
        </label>
        {query && <button type="button" onClick={() => update('')} aria-label={t('Clear search')} className="text-sky-700"><X size={22} /></button>}
      </form>

      {!term && <p className="px-4 py-16 text-center text-sm">{t('Enter a search term to find products.')}</p>}
      {term && (
        <section className="bg-neutral-100 px-4 pb-16 pt-6">
          <div className="mx-auto max-w-[1140px] sm:px-8">
            <p className="mb-6 text-right text-sm" aria-live="polite">{results.length} {t('result(s) found')}</p>
            {results.length > 0 ? (
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {results.map((product) => <li key={product.id}><ProductCard product={{ ...product, copy: product.copy || product.description }} /></li>)}
              </ul>
            ) : (
              <p className="py-10 text-center text-sm">{t('No products found. Try a different search term.')}</p>
            )}
          </div>
        </section>
      )}
    </main>
  )
}
