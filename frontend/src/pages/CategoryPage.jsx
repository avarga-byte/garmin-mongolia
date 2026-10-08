import ProductCard from '../components/home/ProductCard'
import { categories, featuredProducts } from '../data/home'
import { useLocale } from '../context/locale'

const aliases = { 'wearables-smartwatches': 'smartwatches', 'sports-and-fitness': 'sports-fitness' }

export default function CategoryPage({ slug }) {
  const { t } = useLocale()
  const id = aliases[slug] || slug
  const category = categories.find(({ href }) => href.endsWith(`/${id}`))
  const title = category?.title || id.split('-').map((word) => word[0]?.toUpperCase() + word.slice(1)).join(' ')
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-10">
      <p className="mb-3 text-xs text-neutral-500">{t('Home')} / {t(title)}</p>
      <h1 className="mb-8 font-display text-3xl uppercase">{t(title)}</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  )
}
