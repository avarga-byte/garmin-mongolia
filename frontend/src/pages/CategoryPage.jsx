import { useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import CatalogProductCard from '../components/category/CatalogProductCard'
import CategoryBlocks, { Banner } from '../components/category/CategoryBlocks'
import CompareTray, { COMPARE_LIMIT } from '../components/category/CompareTray'
import FilterSidebar from '../components/category/FilterSidebar'
import { useLocale } from '../context/locale'
import { categoryProducts, findCategory } from '../data/catalog'

const PAGE_SIZE = 12

const sortOptions = [
  { value: '', label: 'Featured', compare: () => 0 },
  { value: 'az', label: 'A to Z', compare: (a, b) => a.title.localeCompare(b.title) },
  { value: 'za', label: 'Z to A', compare: (a, b) => b.title.localeCompare(a.title) },
]

const facets = [
  { key: 'series', label: 'Shop by Series', values: (product) => (product.series ? [product.series] : []) },
  { key: 'features', label: 'Shop by Feature', values: (product) => product.features },
  { key: 'activity', label: 'Shop by Activity', values: (product) => product.activities },
]

const readQuery = () => {
  const params = new URLSearchParams(window.location.search)
  const list = (key) => params.get(key)?.split(',').filter(Boolean) ?? []
  return { series: list('series'), features: list('features'), activity: list('activity'), sortBy: params.get('sortBy') ?? '', page: Number(params.get('page')) || 1 }
}

const writeQuery = (query) => {
  const params = new URLSearchParams()
  for (const { key } of facets) if (query[key].length) params.set(key, query[key].join(','))
  if (query.sortBy) params.set('sortBy', query.sortBy)
  if (query.page > 1) params.set('page', query.page)
  const search = params.toString()
  window.history.replaceState(null, '', `${window.location.pathname}${search ? `?${search}` : ''}`)
}

function buildGroups(products) {
  return facets.map(({ key, label, values }) => {
    const options = new Map()
    for (const product of products) {
      for (const { id, title } of values(product)) {
        const option = options.get(id) ?? { id, title, count: 0 }
        option.count += 1
        options.set(id, option)
      }
    }
    return { key, label, options: [...options.values()] }
  }).filter((group) => group.options.length > 0)
}

export default function CategoryPage({ category }) {
  const { t } = useLocale()
  const products = useMemo(() => categoryProducts(category), [category])
  const groups = useMemo(() => buildGroups(products), [products])
  const [query, setQuery] = useState(readQuery)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [compareMode, setCompareMode] = useState(false)
  const [compared, setCompared] = useState([])

  const update = (changes) => {
    const next = { ...query, page: 1, ...changes }
    setQuery(next)
    writeQuery(next)
  }

  const visible = useMemo(() => {
    const matches = products.filter((product) => facets.every(({ key, values }) => (
      query[key].length === 0 || values(product).some(({ id }) => query[key].includes(id))
    )))
    const sort = sortOptions.find((option) => option.value === query.sortBy) ?? sortOptions[0]
    return matches.toSorted(sort.compare)
  }, [products, query])

  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE))
  const page = Math.min(query.page, pageCount)
  const pageItems = visible.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const toggleFilter = (key, id) => update({ [key]: query[key].includes(id) ? query[key].filter((value) => value !== id) : [...query[key], id] })
  const clearFilters = () => update(Object.fromEntries(facets.map(({ key }) => [key, []])))
  const goToPage = (next) => {
    update({ page: next })
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }
  const toggleCompare = (sku) => setCompared((current) => current.includes(sku)
    ? current.filter((value) => value !== sku)
    : current.length < COMPARE_LIMIT ? [...current, sku] : current)

  const parent = category.parent && findCategory(category.parent)
  const filterCount = facets.reduce((sum, { key }) => sum + query[key].length, 0)
  const productCount = `${visible.length} ${t(visible.length === 1 ? 'product' : 'products')}`

  return (
    <main className={compared.length ? 'pb-20' : ''}>
      {category.banner && <Banner image={category.banner} />}
      <CategoryBlocks blocks={category.top.filter((block) => block.type !== 'headline' || block.text.toLowerCase() !== category.title.toLowerCase())} />

      <nav aria-label={t('Breadcrumb')} className="px-4 pt-6 text-xs text-neutral-600 lg:px-6">
        <a href="/" className="hover:underline">{t('Home')}</a>
        {parent && <> / <a href={parent.path} className="hover:underline">{parent.title}</a></>}
        {' / '}<span className="text-black">{category.title}</span>
      </nav>
      <h1 className={`px-4 pt-8 text-center font-display text-3xl md:text-4xl ${category.description ? 'pb-4' : 'pb-12'}`}>{category.title}</h1>
      {category.description && <p className="mx-auto max-w-3xl whitespace-pre-line px-4 pb-12 text-center text-sm leading-relaxed text-neutral-700">{category.description}</p>}

      {products.length === 0 ? (
        <p id="products" className="border-t border-neutral-200 px-4 py-16 text-center text-sm text-neutral-600">{t('No products are listed in this category yet.')}</p>
      ) : (
        <section id="products" className="scroll-mt-28 border-t border-neutral-200 lg:grid lg:grid-cols-[270px_1fr]">
          {groups.length > 0 && (
            <aside className={`${filtersOpen ? 'fixed inset-0 z-50 overflow-y-auto bg-white' : 'hidden'} px-4 py-5 lg:static lg:block lg:border-r lg:border-neutral-200 lg:px-[18px]`}>
              <div className="mb-4 flex items-center justify-between lg:hidden">
                <h2 className="font-display text-xl uppercase">{t('Filters')}</h2>
                <button type="button" onClick={() => setFiltersOpen(false)} aria-label={t('Close filters')}><X /></button>
              </div>
              <FilterSidebar groups={groups.map((group) => ({ ...group, label: t(group.label) }))} selected={query} onToggle={toggleFilter} onClear={clearFilters} />
              <button type="button" onClick={() => setFiltersOpen(false)} className="sticky bottom-0 mt-4 h-11 w-full bg-black font-display text-sm uppercase text-white lg:hidden">
                {t('Show')} {productCount}
              </button>
            </aside>
          )}
          <div className={`px-2 pb-12 pt-4 lg:px-2.5 ${groups.length ? '' : 'lg:col-span-2'}`}>
            <div className="flex flex-wrap items-center gap-3 pb-6 lg:pl-0.5">
              <button type="button" onClick={() => { setCompareMode(!compareMode); setCompared([]) }} className={`h-8 px-3 font-display text-[11px] uppercase ${compareMode ? 'border border-black bg-white text-black' : 'bg-black text-white'}`}>
                {compareMode ? t('Cancel compare') : t('Compare')}
              </button>
              {groups.length > 0 && (
                <button type="button" onClick={() => setFiltersOpen(!filtersOpen)} className="flex h-8 items-center gap-2 border border-neutral-300 px-3 text-xs lg:hidden" aria-expanded={filtersOpen}>
                  <SlidersHorizontal size={14} /> {t('Filters')}{filterCount > 0 && ` (${filterCount})`}
                </button>
              )}
              <span className="text-xs text-neutral-500">{productCount}</span>
              <label className="ml-auto flex items-center gap-4 text-[11px] font-bold">
                {t('Sort By')}
                <select value={query.sortBy} onChange={(event) => update({ sortBy: event.target.value })} className="h-11 w-[125px] border border-neutral-300 bg-white px-2 text-sm font-normal sm:w-[160px]">
                  {sortOptions.map((option) => <option key={option.value} value={option.value}>{t(option.label)}</option>)}
                </select>
              </label>
            </div>

            {pageItems.length > 0 ? (
              <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {pageItems.map((product) => (
                  <li key={product.sku}>
                    <CatalogProductCard product={product} compareMode={compareMode} compared={compared.includes(product.sku)} onCompare={() => toggleCompare(product.sku)} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-16 text-center text-sm">
                {t('No products match these filters.')} <button type="button" onClick={clearFilters} className="underline">{t('Clear filters')}</button>
              </div>
            )}

            {pageCount > 1 && (
              <nav aria-label={t('Pagination')} className="flex justify-center gap-2 pt-8">
                {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
                  <button key={number} type="button" onClick={() => goToPage(number)} aria-current={number === page ? 'page' : undefined} className={`grid size-9 place-items-center border text-sm ${number === page ? 'border-black bg-black text-white' : 'border-neutral-300 hover:border-black'}`}>
                    {number}
                  </button>
                ))}
              </nav>
            )}
          </div>
        </section>
      )}

      <CategoryBlocks blocks={category.bottom} />
      {compareMode && <CompareTray products={compared.map((sku) => products.find((product) => product.sku === sku))} onRemove={toggleCompare} />}
    </main>
  )
}
