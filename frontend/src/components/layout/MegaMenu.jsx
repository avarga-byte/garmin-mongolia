import { slugify } from '../../data/site'
import { useLocale } from '../../context/locale'

// Dropdown panel under a top-level nav item: link columns plus a promo card.
export default function MegaMenu({ item }) {
  const { t } = useLocale()
  return (
    <div className="absolute inset-x-0 top-full z-30 border-t border-neutral-200 bg-white shadow-lg">
      <div className="mx-auto flex max-w-[1440px] gap-12 px-10 py-8">
        <div className="flex flex-1 gap-16">
          {item.columns.map((column) => (
            <div key={t(column.title)} className="min-w-36">
              <h3 className="mb-3 border-b border-neutral-300 pb-2 font-display text-sm uppercase">{t(column.title)}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}><a href={`/c/${slugify(link)}`} className="text-[13px] hover:underline">{t(link)}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.promo && (
          <a href={item.promo.href} className="w-64 shrink-0 border border-neutral-200 p-4 text-center">
            <img src={item.promo.image} alt="" className="mx-auto aspect-square w-full object-contain" />
            <p className="mt-3 font-display text-base uppercase">{item.promo.title}</p>
            <p className="mt-1 text-xs text-neutral-600">{t(item.promo.copy)}</p>
            <span className="mt-3 block text-right font-display text-xs uppercase">{t('Learn more')}</span>
          </a>
        )}
      </div>
    </div>
  )
}
