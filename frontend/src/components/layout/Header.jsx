import { useState } from 'react'
import { CircleHelp, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { navigation, slugify } from '../../data/site'
import { useCart } from '../../context/CartContext'
import { useLocale } from '../../context/locale'
import AnnouncementBar from './AnnouncementBar'
import Logo from './Logo'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'

const iconButton = 'grid size-8 place-items-center text-black hover:text-neutral-600'

export default function Header() {
  const [openItem, setOpenItem] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count } = useCart()
  const { locale, setLocale, t } = useLocale()

  return (
    <header className="sticky top-0 z-40 bg-white" onMouseLeave={() => setOpenItem(null)}>
      <div className="relative flex h-16 items-center gap-6 px-4 lg:px-6">
        <button type="button" className={`${iconButton} lg:hidden`} onClick={() => setMobileOpen(!mobileOpen)} aria-label={t('MENU')} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Logo />
        <nav className="hidden h-full flex-1 items-stretch justify-center lg:flex" aria-label={t('Main')}>
          {navigation.map((item) => (
            <a
              key={item.label}
              href={`/c/${slugify(item.label)}`}
              onMouseEnter={() => setOpenItem(item)}
              onFocus={() => setOpenItem(item)}
              className={`flex items-center border-b-2 px-3 font-display text-[13px] uppercase tracking-wide ${openItem === item ? 'border-black' : 'border-transparent'}`}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a href="https://support.garmin.com/" target="_blank" rel="noreferrer" className="hidden items-center gap-1 text-xs md:flex"><CircleHelp size={16} /> {t('Support')}</a>
          <a href="/search" className={iconButton} aria-label={t('Search')}><Search size={18} /></a>
          <a href="/login" className={iconButton} aria-label={t('Account')}><UserRound size={18} /></a>
          <a href="/cart" className={`${iconButton} relative`} aria-label={t('Cart')}>
            <ShoppingBag size={18} />
            <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-black text-[9px] text-white">{count}</span>
          </a>
          <label className="ml-1 text-xs">
            <span className="sr-only">Language</span>
            <select aria-label="Language" value={locale} onChange={(event) => setLocale(event.target.value)} className="h-8 border-0 bg-transparent px-1 font-medium">
              <option value="mn">МН</option><option value="en">EN</option>
            </select>
          </label>
        </div>
        {openItem && <MegaMenu item={openItem} />}
      </div>
      <AnnouncementBar />
      {mobileOpen && <MobileMenu />}
    </header>
  )
}
