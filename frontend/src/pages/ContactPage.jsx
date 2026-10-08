import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/info/PageHero'
import { useLocale } from '../context/locale'
import { company, contact, localized } from '../data/pages'

const mapUrl = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

export default function ContactPage() {
  const { locale, t } = useLocale()
  const l = (value) => localized(value, locale)

  return (
    <main className="pb-16">
      <PageHero title={l(contact.title)} />
      <div className="mx-auto max-w-3xl divide-y divide-neutral-200 px-4">
        {contact.sections.map((section) => (
          <section key={section.title.en} className="py-8">
            <h2 className="font-display text-xl uppercase">{l(section.title)}</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">{l(section.text)}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {section.phone && <li><a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`} className="inline-flex items-center gap-2 hover:underline"><Phone size={16} /> {company.phone}</a></li>}
              {section.email && <li><a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:underline"><Mail size={16} /> {company.email}</a></li>}
              {section.map && <li><a href={mapUrl(company.address.en)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><MapPin size={16} /> {t('Open in Google Maps')}</a></li>}
              {section.link && <li><a href={section.link.href} target="_blank" rel="noreferrer" className="underline">{l(section.link.label)}</a></li>}
            </ul>
          </section>
        ))}
        <p className="py-8 text-xs text-neutral-500">{l(company.name)} · <a href={company.website} target="_blank" rel="noreferrer" className="underline">{company.website.replace('https://', '')}</a></p>
      </div>
    </main>
  )
}
