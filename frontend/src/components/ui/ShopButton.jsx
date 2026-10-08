const variants = {
  light: 'border border-white text-white hover:bg-white hover:text-black',
  dark: 'bg-black text-white hover:bg-neutral-700',
}

const sizes = {
  sm: 'h-6 px-3 text-[10px]',
  md: 'h-8 px-4 text-[11px]',
}

export default function ShopButton({ href, children = 'Одоо үзэх', variant = 'light', size = 'md', className = '' }) {
  const { t } = useLocale()
  return (
    <a href={href} className={`inline-flex shrink-0 items-center justify-center uppercase tracking-wide transition-colors ${variants[variant]} ${sizes[size]} ${className}`}>
      {children === 'Одоо үзэх' ? t('Shop now') : t(children)}
    </a>
  )
}
import { useLocale } from '../../context/locale'
