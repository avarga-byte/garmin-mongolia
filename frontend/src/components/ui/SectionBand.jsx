import { mn } from '../../data/site'

// Black full-width label with a downward notch, e.g. "Featured".
export default function SectionBand({ children }) {
  return (
    <div className="relative z-10 bg-black py-3 text-center font-display text-sm uppercase tracking-wider text-white">
      {mn(children)}
      <span aria-hidden className="absolute left-1/2 top-full -translate-x-1/2 border-x-[24px] border-t-[16px] border-x-transparent border-t-black" />
    </div>
  )
}
