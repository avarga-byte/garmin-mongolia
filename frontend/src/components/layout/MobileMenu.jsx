import { ChevronDown } from 'lucide-react'
import { navigation, slugify } from '../../data/site'
import { useLocale } from '../../context/locale'

export default function MobileMenu() {
  const { t } = useLocale()
  return (
    <nav className="max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-neutral-200 bg-white px-4 pb-6 shadow-lg lg:hidden" aria-label={t('Mobile')}>
      {navigation.map((item) => (
        <details key={t(item.label)} className="group border-b border-neutral-200">
          <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-display text-sm uppercase">
            {t(item.label)}
            <ChevronDown size={16} className="transition group-open:rotate-180" />
          </summary>
          {item.columns.map((column) => (
            <div key={t(column.title)} className="pb-3 pl-3">
              <p className="mb-1 font-display text-xs uppercase text-neutral-500">{t(column.title)}</p>
              {column.links.map((link) => <a key={link} href={`/c/${slugify(link)}`} className="block py-1 text-sm">{t(link)}</a>)}
            </div>
          ))}
        </details>
      ))}
    </nav>
  )
}
