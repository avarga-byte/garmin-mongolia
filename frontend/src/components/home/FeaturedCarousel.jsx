import { useRef } from 'react'
import ArrowButton from '../ui/ArrowButton'
import SectionBand from '../ui/SectionBand'
import ProductCard from './ProductCard'
import { useLocale } from '../../context/locale'

export default function FeaturedCarousel({ title = 'Онцлох бүтээгдэхүүн', products }) {
  const { t, locale } = useLocale()
  const track = useRef(null)
  const scroll = (direction) => track.current?.scrollBy({ left: direction * track.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <section>
      <SectionBand>{locale === 'mn' ? title : 'Featured'}</SectionBand>
      <div className="relative">
        <ul ref={track} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-2 pb-8 pt-8 [scrollbar-width:none]">
          {products.map((product) => (
            <li key={product.id} className="w-[70%] shrink-0 snap-start sm:w-[40%] lg:w-[calc((100%-4rem)/5)]">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <ArrowButton direction="prev" label={t('Previous products')} onClick={() => scroll(-1)} className="absolute left-2 top-1/2 -translate-y-1/2" />
        <ArrowButton direction="next" label={t('Next products')} onClick={() => scroll(1)} className="absolute right-2 top-1/2 -translate-y-1/2" />
      </div>
    </section>
  )
}
