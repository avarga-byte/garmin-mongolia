import ShopButton from '../ui/ShopButton'
import { useLocale } from '../../context/locale'

// Full-bleed image with the title and an outlined button over a bottom gradient.
// Used for lifestyle tiles, wide banners and the category grid.
export default function ImageTile({ title, image, href, aspect = 'aspect-square', className = '' }) {
  const { t } = useLocale()
  return (
    <article className={`group relative overflow-hidden ${aspect} ${className}`}>
      <img src={image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 text-white">
        <h3 className="font-display text-xl uppercase leading-tight md:text-2xl">{t(title)}</h3>
        <ShopButton href={href} size="sm" className="mt-3" />
      </div>
    </article>
  )
}
