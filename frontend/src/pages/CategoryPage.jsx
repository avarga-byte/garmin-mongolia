import { useState } from 'react'
import ProductCard from '../components/home/ProductCard'
import { categories, featuredProducts } from '../data/home'
import { useLocale } from '../context/locale'
import './category.css'

const aliases = { 'wearables-smartwatches': 'smartwatches', 'sports-and-fitness': 'sports-fitness' }
const activities = ['Boating', 'Cycling', 'Diving', 'Driving', 'Flying', 'Golfing', 'Hiking', 'Running', 'Strength', 'Swimming']
const seriesTiles = [
  { id: 'fenix-instinct', name: 'fēnix® & Instinct®', copy: 'Rugged outdoor smartwatches built for adventure.', imageIds: ['fenix-9', 'instinct-3-alpine'] },
  { id: 'venu-vivoactive', name: 'Venu® & vívoactive®', copy: 'Health- and fitness-focused smartwatches.', imageId: 'venu-x1' },
  { id: 'forerunner', name: 'Forerunner®', copy: 'Running smartwatches for any level.', imageId: 'forerunner-170' },
]

export default function CategoryPage({ slug }) {
  const { t } = useLocale()
  const id = aliases[slug] || slug
  const category = categories.find(({ href }) => href.endsWith(`/${id}`))
  const title = category?.title || id.split('-').map((word) => word[0]?.toUpperCase() + word.slice(1)).join(' ')
  const [selectedActivities, setSelectedActivities] = useState([])
  const [series, setSeries] = useState('')
  const [sort, setSort] = useState('featured')
  const [compareIds, setCompareIds] = useState([])
  const [compareOpen, setCompareOpen] = useState(false)
  const categoryProducts = featuredProducts.filter((product) => product.categories?.includes(id))
  const availableActivities = activities.filter((activity) => categoryProducts.some((product) => product.activities?.includes(activity)))
  const products = categoryProducts
    .filter((product) => !series || product.series === series)
    .filter((product) => !selectedActivities.length || selectedActivities.some((activity) => product.activities?.includes(activity)))
    .sort((a, b) => sort === 'name-asc' ? a.name.localeCompare(b.name) : sort === 'name-desc' ? b.name.localeCompare(a.name) : 0)
  const toggleActivity = (activity) => setSelectedActivities((current) => current.includes(activity) ? current.filter((item) => item !== activity) : [...current, activity])
  const toggleCompare = (productId) => setCompareIds((current) => current.includes(productId) ? current.filter((item) => item !== productId) : current.length < 3 ? [...current, productId] : current)
  const compared = featuredProducts.filter((product) => compareIds.includes(product.id))

  return (
    <main className="category-page">
      <p className="category-breadcrumb">{t('Home')} / {t(title)}</p>
      {id !== 'smartwatches' && <header className="category-titlebar"><h1>{t(title)}</h1></header>}
      {id === 'smartwatches' && <section className="category-hero">
        <div className="category-intro"><h1>{t('All Smartwatches')}</h1><p>{t('Explore the entire lineup or shop our most popular smartwatches, designed for your passions.')}</p></div>
        {seriesTiles.map((tile) => {
          const tileProducts = tile.imageIds ? tile.imageIds.map((productId) => featuredProducts.find(({ id }) => id === productId)) : [featuredProducts.find(({ id }) => id === tile.imageId)]
          return <button className={`series-tile ${series === tile.id ? 'active' : ''}`} key={tile.id} onClick={() => setSeries(series === tile.id ? '' : tile.id)} aria-pressed={series === tile.id}>
            <span className="series-images">{tileProducts.filter(Boolean).map((product) => <img src={product.image} alt={product.name} key={product.id} />)}</span>
            <span className="series-name">{t(tile.name)}</span><span>{t(tile.copy)}</span>
          </button>
        })}
      </section>}
      <div className="category-layout">
        <aside className="category-filters">
          <button className="compare-toggle" onClick={() => setCompareOpen(!compareOpen)} aria-expanded={compareOpen}>{t('Compare')} {compareIds.length > 0 && `(${compareIds.length})`}</button>
          <details open><summary>{t('Activity')}</summary>
            {availableActivities.map((activity) => <label key={activity}><input type="checkbox" checked={selectedActivities.includes(activity)} onChange={() => toggleActivity(activity)} />{t(activity)}</label>)}
          </details>
          {(selectedActivities.length > 0 || series) && <button className="clear-filters" onClick={() => { setSelectedActivities([]); setSeries('') }}>{t('Clear filters')}</button>}
        </aside>
        <section className="category-results">
          <div className="category-toolbar"><span>{products.length} {t('products')}</span><label>{t('Sort By')}<select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">{t('Featured Products')}</option><option value="name-asc">{t('Name: A to Z')}</option><option value="name-desc">{t('Name: Z to A')}</option></select></label></div>
          {products.length ? <div className="category-product-grid">{products.map((product) => <article className="category-product" key={product.id}>
            <label className="compare-check"><input type="checkbox" checked={compareIds.includes(product.id)} disabled={!compareIds.includes(product.id) && compareIds.length === 3} onChange={() => toggleCompare(product.id)} />{t('Compare')}</label>
            <ProductCard product={product} />
          </article>)}</div> : <p className="category-empty">{t('No products match these filters.')}</p>}
        </section>
      </div>
      {compareOpen && <section className="category-compare"><div><h2>{t('Compare products')}</h2><button onClick={() => setCompareOpen(false)}>{t('Close')}</button></div>{compared.length ? <div className="compare-grid">{compared.map((product) => <article key={product.id}><img src={product.image} alt={product.name} /><h3>{product.name}</h3><p>{t(product.copy)}</p><a href={product.href}>{t('View product')}</a><button onClick={() => toggleCompare(product.id)}>{t('Remove')}</button></article>)}</div> : <p>{t('Select up to three products using Compare.')}</p>}</section>}
    </main>
  )
}
