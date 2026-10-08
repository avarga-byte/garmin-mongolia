import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { mn } from '../../data/site'
import ShopButton from '../ui/ShopButton'

const INTERVAL = 4000

export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const go = (step) => setIndex((current) => (current + step + slides.length) % slides.length)

  useEffect(() => {
    if (!playing) return
    const timer = setInterval(() => setIndex((current) => (current + 1) % slides.length), INTERVAL)
    return () => clearInterval(timer)
  }, [playing, slides.length])

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white" aria-roledescription="carousel" aria-label="Онцлох бүтээгдэхүүн">
      {slides.map((slide, i) => (
        <div key={slide.title} className={`transition-opacity duration-700 ${i === index ? 'relative opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'}`} aria-hidden={i !== index}>
          <picture>
            <source media="(min-width: 768px)" srcSet={slide.desktop} />
            <img src={slide.mobile} alt="" className="aspect-[4/5] w-full object-cover md:aspect-[1440/419]" loading={i === 0 ? 'eager' : 'lazy'} />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:hidden" />
          <div className="absolute inset-x-6 bottom-10 md:inset-x-auto md:bottom-auto md:left-[4%] md:top-1/2 md:max-w-lg md:-translate-y-1/2">
            <h1 className="font-display text-3xl uppercase md:text-[32px]">{slide.title}</h1>
            <p className="mt-2 text-sm md:text-base">{slide.copy}</p>
            <ShopButton href={slide.href} className="mt-5">{mn('Shop now')}</ShopButton>
          </div>
        </div>
      ))}
      <button type="button" onClick={() => go(-1)} aria-label="Өмнөх слайд" className="absolute left-2 top-1/2 -translate-y-1/2 p-1 drop-shadow"><ChevronLeft size={32} /></button>
      <button type="button" onClick={() => go(1)} aria-label="Дараах слайд" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 drop-shadow"><ChevronRight size={32} /></button>
      <div className="absolute bottom-3 right-4 flex items-center gap-3">
        <span className="text-xs tabular-nums">{index + 1} / {slides.length}</span>
        <button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? 'Слайдыг түр зогсоох' : 'Слайдыг тоглуулах'} className="grid size-8 place-items-center rounded-full border border-white/70 bg-black/40">
          {playing ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </div>
    </section>
  )
}
