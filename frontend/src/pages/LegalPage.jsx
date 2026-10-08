import { useLocale } from '../context/locale'
import { company, localized } from '../data/pages'

function Paragraphs({ items, l }) {
  return l(items).map((text) => <p key={text} className="mt-3 text-sm leading-relaxed text-neutral-700">{text}</p>)
}

export default function LegalPage({ page }) {
  const { locale, t } = useLocale()
  const l = (value) => localized(value, locale)

  return (
    <main className="mx-auto max-w-[1140px] px-4 pb-16 pt-10 sm:px-12">
      <h1 className="font-display text-3xl uppercase md:text-4xl">{l(page.title)}</h1>
      {page.updated && <p className="mt-2 text-xs text-neutral-500">{t('Last updated')}: {page.updated}</p>}

      {page.sections.length > 0 ? (
        page.sections.map((section, index) => (
          <section key={section.heading.en} className="mt-10">
            <h2 className="font-display text-2xl">{index + 1}. {l(section.heading)}</h2>
            {section.paragraphs && <Paragraphs items={section.paragraphs} l={l} />}
            {section.subsections?.map((subsection) => (
              <div key={subsection.heading.en} className="mt-5">
                <h3 className="text-sm font-bold">{l(subsection.heading)}</h3>
                <Paragraphs items={subsection.paragraphs} l={l} />
              </div>
            ))}
          </section>
        ))
      ) : (
        <section className="mt-8 bg-neutral-100 px-6 py-10 text-sm leading-relaxed text-neutral-700">
          <p>{t('This policy is being prepared for Garmin Mongolia. For questions in the meantime, contact us.')}</p>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <a href="/contact" className="underline">{t('Contact Us')}</a>
            <a href={`mailto:${company.email}`} className="underline">{company.email}</a>
            {page.reference && <a href={page.reference.href} target="_blank" rel="noreferrer" className="underline">{l(page.reference.label)}</a>}
          </p>
        </section>
      )}
    </main>
  )
}
