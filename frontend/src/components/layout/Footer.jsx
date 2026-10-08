import { footerColumns, footerDestinations, legalLinks, slugify } from '../../data/site'
import { useLocale } from '../../context/locale'

const linkProps = (href) => (/^https?:/.test(href) ? { href, target: '_blank', rel: 'noreferrer' } : { href })

const socials = [
  { label: 'Facebook', short: 'f', href: 'https://www.facebook.com/Garmin/' },
  { label: 'YouTube', short: '▶', href: 'https://www.youtube.com/garmin' },
  { label: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com/company/garmin-international/' },
  { label: 'Instagram', short: '◎', href: 'https://www.instagram.com/garmin/' },
]

export default function Footer() {
  const { t, locale } = useLocale()
  return (
    <footer className="bg-black px-4 pb-6 pt-10 text-white lg:px-10">
      <div className="grid gap-8 sm:grid-cols-3 lg:max-w-4xl">
        {footerColumns.map((column) => (
          <div key={t(column.title)}>
            <h3 className="mb-3 font-display text-base uppercase">{t(column.title)}</h3>
            <ul className="space-y-1.5">
              {column.links.map((link) => <li key={link}><a {...linkProps(footerDestinations[link] || `/${slugify(link)}`)} className="text-[12.8px] hover:underline">{t(link)}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <a href="https://geo-mongol.mn" aria-label="Инженер Геодези ХХК">
            <img src="/images/brand/engineering-geodesy.png" alt="Инженер Геодези ХХК" className="h-14 w-14 rounded bg-white object-contain" />
          </a>
          <p className="mt-3 text-sm">{locale === 'mn' ? 'Инженер Геодези ХХК' : 'Engineering Geodesy LLC'}</p>
        </div>
        <ul className="flex gap-3">
          {socials.map(({ label, short, href }) => (
            <li key={label}><a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid size-8 place-items-center rounded-full border border-white/40 text-xs hover:bg-white hover:text-black">{short}</a></li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-4 border-t border-white pt-4 text-xs">
        <p>{t('Copyright © Garmin storefront demo')}</p>
        <ul className="flex flex-wrap gap-6">
          {legalLinks.map((link) => <li key={link}><a {...linkProps(footerDestinations[link] || `/${slugify(link)}`)} className="hover:underline">{t(link)}</a></li>)}
        </ul>
      </div>
    </footer>
  )
}
