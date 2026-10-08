import { useMemo, useState } from 'react'
import { Bike, Footprints, HeartPulse, Mountain, Search } from 'lucide-react'
import { useLocale } from '../context/locale'
import { blog, blogPosts, localized } from '../data/pages'

const icons = { cycling: Bike, health: HeartPulse, outdoor: Mountain, running: Footprints }

export default function BlogPage() {
  const { locale, t } = useLocale()
  const l = (value) => localized(value, locale)
  const [category, setCategory] = useState('')
  const [query, setQuery] = useState('')

  const posts = useMemo(() => {
    const term = query.trim().toLowerCase()
    return blogPosts
      .filter((post) => !category || post.category === category)
      .filter((post) => !term || [localized(post.title, locale), localized(post.excerpt, locale)].join(' ').toLowerCase().includes(term))
  }, [category, query, locale])

  return (
    <main className="pb-16">
      <h1 className="pt-6 text-center font-display text-sm uppercase tracking-wide">{l(blog.title)}</h1>
      <nav aria-label={t('Blog categories')} className="mt-6 bg-neutral-100 px-4 py-6">
        <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {blog.categories.map(({ id, label }) => {
            const Icon = icons[id]
            const active = category === id
            return (
              <li key={id}>
                <button type="button" onClick={() => setCategory(active ? '' : id)} aria-pressed={active} className={`flex w-full flex-col items-center gap-2 py-2 text-center font-display text-xs uppercase ${active ? 'underline underline-offset-4' : ''}`}>
                  <Icon size={36} strokeWidth={1.25} aria-hidden />
                  {l(label)}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="mx-auto max-w-3xl px-4 pt-8 text-center">
        <p className="text-sm">{t('Blog')}</p>
        <p className="mt-1 text-xl">{l(blog.tagline)}</p>
        <label className="mt-6 flex items-center gap-3 border border-neutral-300 px-3">
          <Search size={18} aria-hidden />
          <span className="sr-only">{t('Search Blog')}</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('Search Blog')} className="h-11 flex-1 bg-transparent text-sm outline-none" />
        </label>
      </div>
      <section className="mt-8 bg-neutral-100 px-4 py-10">
        {posts.length > 0 ? (
          <ul className="mx-auto grid max-w-[1140px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.href}>
                <a href={post.href} className="block h-full bg-white shadow-[0_0_6px_rgba(0,0,0,0.1)] hover:shadow-lg">
                  <img src={post.image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
                  <div className="p-4">
                    <p className="text-xs uppercase text-neutral-500">{l(blog.categories.find(({ id }) => id === post.category)?.label)}</p>
                    <h2 className="mt-2 font-display text-lg leading-snug">{l(post.title)}</h2>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto max-w-xl text-center text-sm text-neutral-700">
            <p>{blogPosts.length ? t('No articles match your search.') : l(blog.empty)}</p>
            <a href={blog.globalBlog} target="_blank" rel="noreferrer" className="mt-5 inline-flex h-10 items-center bg-black px-5 font-display text-xs uppercase text-white hover:bg-neutral-700">{t('Garmin global blog')}</a>
          </div>
        )}
      </section>
    </main>
  )
}
