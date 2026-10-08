import ShopButton from '../ui/ShopButton'
import { useLocale } from '../../context/locale'

// White card: image on top, headline and a dark "Одоо үзэх" button underneath.
export default function PromoCard({ title, image, href }) {
  const { t } = useLocale()
  return (
    <article className="flex flex-col bg-white p-4 shadow-[0_0_6px_rgba(0,0,0,0.08)]">
      <img src={image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
      <div className="flex flex-1 flex-col justify-end gap-3 pt-16 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="max-w-xs font-display text-lg uppercase leading-snug">{t(title)}</h3>
        <ShopButton href={href} variant="dark" size="sm" className="self-end">{t('Shop now')}</ShopButton>
      </div>
    </article>
  )
}
