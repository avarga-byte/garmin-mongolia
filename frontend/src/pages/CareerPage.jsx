import PageHero from '../components/info/PageHero'
import { useLocale } from '../context/locale'
import { careers, company, jobOpenings, localized } from '../data/pages'

export default function CareerPage() {
  const { locale } = useLocale()
  const l = (value) => localized(value, locale)

  return (
    <main className="pb-16">
      <PageHero title={l(careers.title)}>
        <p className="mt-3 font-display text-lg uppercase text-neutral-600">{l(careers.tagline)}</p>
      </PageHero>
      <div className="bg-black px-4 py-12 text-white">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {careers.sections.map((section) => (
            <section key={section.title.en}>
              <h2 className="font-display text-2xl">{l(section.title)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">{l(section.text)}</p>
              {section.link && <a href={section.link.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex h-10 items-center border border-white px-5 font-display text-xs uppercase hover:bg-white hover:text-black">{l(section.link.label)}</a>}
            </section>
          ))}
        </div>
      </div>
      <section className="mx-auto max-w-3xl px-4 pt-12">
        <h2 className="font-display text-2xl uppercase">{l(careers.openingsTitle)}</h2>
        {jobOpenings.length > 0 ? (
          <ul className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200">
            {jobOpenings.map((job) => (
              <li key={l(job.title)} className="py-5">
                <h3 className="font-display text-xl">{l(job.title)}</h3>
                <p className="mt-2 text-sm text-neutral-700">{l(job.summary)}</p>
                <a href={`mailto:${company.email}?subject=${encodeURIComponent(l(job.title))}`} className="mt-3 inline-block text-sm underline">{company.email}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 bg-neutral-100 px-6 py-10 text-sm text-neutral-700">{l(careers.empty)}</p>
        )}
      </section>
    </main>
  )
}
