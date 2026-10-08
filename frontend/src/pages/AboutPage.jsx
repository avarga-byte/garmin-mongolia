import PageHero from '../components/info/PageHero'
import { useLocale } from '../context/locale'
import { about, localized } from '../data/pages'

export default function AboutPage() {
  const { locale, t } = useLocale()
  const l = (value) => localized(value, locale)

  return (
    <main className="pb-16">
      <PageHero title={l(about.title)}>
        {l(about.intro).map((paragraph) => <p key={paragraph} className="mt-5 text-sm leading-relaxed text-neutral-700">{paragraph}</p>)}
      </PageHero>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-3">
        {about.principles.map((principle) => (
          <article key={principle.title.en} className="border-t-2 border-black pt-4">
            <h2 className="font-display text-2xl uppercase">{l(principle.title)}</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">{l(principle.text)}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-6 lg:px-6">
        <h2 className="mb-8 text-center font-display text-3xl uppercase">{t('Strategies')}</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {about.strategies.map((strategy) => (
            <li key={strategy.title.en} className="bg-white shadow-[0_0_6px_rgba(0,0,0,0.1)]">
              <img src={strategy.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-4">
                <h3 className="font-display text-xl uppercase">{l(strategy.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{l(strategy.text)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-10 max-w-3xl bg-neutral-100 px-6 py-10 text-center">
        <h2 className="font-display text-2xl uppercase">{l(about.local.title)}</h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700">{l(about.local.text)}</p>
        <a href="/contact" className="mt-6 inline-flex h-10 items-center bg-black px-5 font-display text-xs uppercase text-white hover:bg-neutral-700">{t('Contact Us')}</a>
      </section>
    </main>
  )
}
