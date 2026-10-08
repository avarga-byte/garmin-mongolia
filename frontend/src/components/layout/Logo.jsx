import { useLocale } from '../../context/locale'

export default function Logo({ inverted = false }) {
  const { t } = useLocale()
  return (
    <a href="/" aria-label={t('Home')} className="flex flex-col leading-none">
      <img src="/images/brand/garmin-logo.png" alt="Garmin" className={`h-auto w-[116px] ${inverted ? 'brightness-0 invert' : ''}`} />
      <span className="mt-0.5 text-[7px] uppercase tracking-[0.2em] text-black">{t('Authorised Distributor')}</span>
    </a>
  )
}
