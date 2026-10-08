import { useState } from 'react'
import { Play } from 'lucide-react'
import { series } from '../../data/catalog'
import { linkProps } from '../../data/site'
import FeaturedCarousel from '../home/FeaturedCarousel'
import ShopButton from '../ui/ShopButton'

// Content blocks above and below the product grid, as laid out on garmin.ae category pages.

export function Banner({ image, mobileImage }) {
  return (
    <picture>
      {mobileImage && <source media="(max-width: 767px)" srcSet={mobileImage} />}
      <img src={image} alt="" className="max-h-[560px] w-full object-cover" />
    </picture>
  )
}

function Video({ image, video }) {
  const [playing, setPlaying] = useState(false)
  if (playing) {
    return (
      <div className="aspect-video w-full bg-black">
        <iframe src={`${video}?autoplay=1`} title="Category video" allow="autoplay; encrypted-media; fullscreen" allowFullScreen className="size-full" />
      </div>
    )
  }
  return (
    <button type="button" onClick={() => setPlaying(true)} className="group relative block w-full" aria-label="Play video">
      <img src={image} alt="" className="max-h-[560px] w-full object-cover" />
      <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black transition group-hover:scale-110"><Play size={28} fill="currentColor" /></span>
    </button>
  )
}

// "Most popular" strip: series cut-outs over a landscape photo, each one filtering the grid.
function SeriesStrip({ title, image }) {
  return (
    <section className="relative pb-10 pt-8 md:pt-10">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[300px] bg-cover bg-center md:h-[370px]" style={{ backgroundImage: `url("${image}")` }} />
      <h2 className="relative text-center font-display text-2xl uppercase md:text-4xl">{title}</h2>
      <ul className="relative mx-auto flex max-w-5xl snap-x gap-4 overflow-x-auto px-4 pt-6 [scrollbar-width:none] md:justify-center">
        {series.map((item) => (
          <li key={item.id} className="w-40 shrink-0 snap-start text-center md:w-auto md:flex-1">
            <a href={`?series=${item.id}#products`} className="group block">
              <img src={item.image} alt="" className="mx-auto h-48 object-contain transition group-hover:-translate-y-1 md:h-60" />
              <span className="mt-6 block font-display text-xl group-hover:underline">{item.title}</span>
            </a>
            <p className="mt-2 text-sm leading-snug">{item.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Icons({ items }) {
  return (
    <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-y-6 px-4 py-6">
      {items.map((item) => (
        <li key={item.title} className="flex w-1/2 flex-col items-center gap-3 px-3 text-center md:w-1/4">
          <img src={item.image} alt="" className="size-14 object-contain" />
          <span className="font-display text-sm uppercase">{item.title}</span>
        </li>
      ))}
    </ul>
  )
}

const tileColumns = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }

function Tiles({ columns, items }) {
  return (
    <ul className={`mx-auto grid max-w-[1440px] gap-4 px-4 py-6 lg:px-6 ${tileColumns[columns] ?? tileColumns[3]}`}>
      {items.map((item) => (
        <li key={item.title + item.image}>
          <a {...linkProps(item.href)} className="group block text-center">
            <div className="overflow-hidden">
              <img src={item.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <h3 className="mt-3 font-display text-lg uppercase leading-tight">{item.title}</h3>
            {item.copy && <p className="mt-1 text-xs uppercase tracking-wide text-neutral-600 group-hover:underline">{item.copy}</p>}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Media({ title, text, image, imageSide }) {
  return (
    <section className={`mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 md:gap-12 ${imageSide === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <img src={image} alt="" loading="lazy" className="w-full md:w-1/2" />
      <div className="md:w-1/2">
        <h3 className="font-display text-2xl uppercase">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">{text}</p>
      </div>
    </section>
  )
}

const renderers = {
  banner: Banner,
  video: Video,
  series: SeriesStrip,
  headline: ({ text, size }) => <h2 className={`px-4 pt-10 text-center font-display uppercase ${size === 'big' ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>{text}</h2>,
  paragraph: ({ text }) => <p className="mx-auto max-w-3xl whitespace-pre-line px-4 pt-4 text-center text-sm leading-relaxed text-neutral-700">{text}</p>,
  icons: Icons,
  button: ({ label, href }) => <div className="flex justify-center px-4 py-6"><ShopButton href={href} variant="dark">{label}</ShopButton></div>,
  tiles: Tiles,
  media: Media,
  slider: ({ items }) => <div className="py-6"><FeaturedCarousel products={items.map((item) => ({ ...item, id: item.title, name: item.title }))} /></div>,
}

export default function CategoryBlocks({ blocks }) {
  return blocks.map((block, index) => {
    const Block = renderers[block.type]
    return Block ? <Block key={index} {...block} /> : null
  })
}
