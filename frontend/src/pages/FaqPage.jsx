import { ChevronDown, CircleHelp } from 'lucide-react'
import { useLocale } from '../context/locale'
import { faqs, localized } from '../data/pages'

export default function FaqPage() {
  const { locale } = useLocale()
  const l = (value) => localized(value, locale)

  return (
    <main className="pb-16">
      <header className="bg-sky-400 px-4 py-14 text-center text-white">
        <CircleHelp size={56} strokeWidth={1.5} className="mx-auto" aria-hidden />
        <h1 className="mt-6 font-display text-3xl uppercase md:text-4xl">{l(faqs.title)}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed">{l(faqs.intro)}</p>
      </header>
      <div className="mx-auto max-w-3xl px-4 pt-10">
        {faqs.items.map((item) => (
          <details key={item.question.en} className="group border-b border-neutral-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg uppercase">
              {l(item.question)}
              <ChevronDown size={20} className="shrink-0 transition group-open:rotate-180" />
            </summary>
            <div className="pb-6 text-sm leading-relaxed text-neutral-700">
              <p>{l(item.answer)}</p>
              {item.link && <a href={item.link.href} {...(/^https?:/.test(item.link.href) ? { target: '_blank', rel: 'noreferrer' } : {})} className="mt-3 inline-block font-display text-xs uppercase text-sky-700 underline">{l(item.link.label)}</a>}
            </div>
          </details>
        ))}
      </div>
    </main>
  )
}
