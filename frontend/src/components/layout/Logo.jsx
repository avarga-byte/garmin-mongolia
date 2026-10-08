export default function Logo({ inverted = false }) {
  return (
    <a href="/" aria-label="Нүүр хуудас" className={`flex flex-col leading-none ${inverted ? 'text-white' : 'text-black'}`}>
      <span className="text-[26px] font-black tracking-tighter">GARMIN<sup className="ml-0.5 text-[7px]">®</sup></span>
      <span className="mt-0.5 text-[7px] uppercase tracking-[0.2em]">Монгол дахь албан ёсны дистрибьютор</span>
    </a>
  )
}
