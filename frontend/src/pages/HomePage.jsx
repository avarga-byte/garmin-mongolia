import FeaturedCarousel from '../components/home/FeaturedCarousel'
import HeroCarousel from '../components/home/HeroCarousel'
import PromoCardGrid from '../components/home/PromoCardGrid'
import TileGrid from '../components/home/TileGrid'
import WideBanner from '../components/home/WideBanner'
import SectionHeading from '../components/ui/SectionHeading'
import { categories, cyclingBanner, featuredProducts, heroSlides, kidsBanner, lifestyleTiles, promoCardsBottom, promoCardsTop } from '../data/home'
import { useLocale } from '../context/locale'

export default function HomePage() {
  const { t } = useLocale()
  return (
    <main>
      <HeroCarousel slides={heroSlides} />
      <FeaturedCarousel products={featuredProducts} />
      <PromoCardGrid cards={promoCardsTop} />
      <TileGrid tiles={lifestyleTiles} className="px-2 py-5 md:px-4" />
      <WideBanner {...cyclingBanner} />
      <PromoCardGrid cards={promoCardsBottom} />
      <WideBanner {...kidsBanner} />
      <section className="px-2 py-5 md:px-4">
        <SectionHeading>{t('Shop by category')}</SectionHeading>
        <TileGrid tiles={categories} />
      </section>
    </main>
  )
}
