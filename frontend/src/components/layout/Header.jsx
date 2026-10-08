import { useState } from 'react'
import { CircleHelp, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { categoryHref } from '../../data/catalog'
import { navigation } from '../../data/site'
import { useCart } from '../../context/CartContext'
import AnnouncementBar from './AnnouncementBar'
import Logo from './Logo'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'

const iconButton = 'grid size-8 place-items-center text-black hover:text-neutral-600'

export default function Header() {
  const [openItem, setOpenItem] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-white" onMouseLeave={() => setOpenItem(null)}>
      <div className="relative flex h-16 items-center gap-6 px-4 lg:px-6">
        <button type="button" className={`${iconButton} lg:hidden`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Logo />
        <nav className="hidden h-full flex-1 items-stretch justify-center lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={categoryHref(item.label)}
              onMouseEnter={() => setOpenItem(item)}
              onFocus={() => setOpenItem(item)}
              className={`flex items-center border-b-2 px-3 font-display text-[13px] uppercase tracking-wide ${openItem === item ? 'border-black' : 'border-transparent'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a href="/support" className="hidden items-center gap-1 text-xs md:flex"><CircleHelp size={16} /> Support</a>
          <button type="button" className={iconButton} aria-label="Search"><Search size={18} /></button>
          <button type="button" className={iconButton} aria-label="Account"><UserRound size={18} /></button>
          <a href="/cart" className={`${iconButton} relative`} aria-label="Cart">
            <ShoppingBag size={18} />
            <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-black text-[9px] text-white">{count}</span>
          </a>
        </div>
        {openItem && <MegaMenu item={openItem} />}
      </div>
      <AnnouncementBar />
      {mobileOpen && <MobileMenu />}
    </header>
  )
}
