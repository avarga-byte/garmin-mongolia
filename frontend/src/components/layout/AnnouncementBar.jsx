import { announcements } from '../../data/site'
import { useLocale } from '../../context/locale'

export default function AnnouncementBar() {
  const { locale } = useLocale()
  return <p className="bg-black px-4 py-2 text-center font-display text-[12.8px] uppercase tracking-wide text-white">{announcements[locale]}</p>
}
