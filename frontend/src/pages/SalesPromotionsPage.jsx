import { useLocale } from '../context/locale'
import { promotions } from '../data/site'

export default function SalesPromotionsPage() {
  const { t } = useLocale()
  return (
    <main className="mx-auto max-w-[1140px] px-4 pb-16 pt-12">
      <h1 className="text-center font-display text-3xl">{t('Deals and Promotions')}</h1>
      <p className="mt-6 text-center text-sm">{t('Find promotions, discounts and rebates on your favourite Garmin products.')}</p>
      <p className="mt-1 text-center text-sm italic">{t('Offers may not be combined with any other coupons, discounts, promotions or rebates.')}</p>

      {promotions.length > 0 ? (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promotion) => (
            <li key={promotion.title}>
              <a href={promotion.href} className="group block h-full bg-white shadow-[0_0_6px_rgba(0,0,0,0.12)] transition hover:shadow-lg">
                <img src={promotion.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-4">
                  <h2 className="font-display text-xl">{t(promotion.title)}</h2>
                  {promotion.copy && <p className="mt-2 text-sm text-neutral-700">{t(promotion.copy)}</p>}
                  {promotion.validUntil && <p className="mt-3 text-xs text-neutral-500">{t('Valid until')} {promotion.validUntil}</p>}
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 bg-neutral-200 px-8 py-16 text-sm">{t('No deals at the moment')}</p>
      )}
    </main>
  )
}
