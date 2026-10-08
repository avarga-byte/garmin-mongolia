import { useLocale } from '../../context/locale'

export default function Logo({ inverted = false }) {
  const { t } = useLocale()
  return (
    <a href="/" aria-label={t('Home')} className={`flex flex-col leading-none ${inverted ? 'text-white' : 'text-black'}`}>
      <span className="text-[26px] font-black tracking-tighter">GARMIN<sup className="ml-0.5 text-[7px]">®</sup></span>
      <span className="mt-0.5 text-[7px] uppercase tracking-[0.2em]">{t('Authorised Distributor')}</span>
    </a>
  )
}
