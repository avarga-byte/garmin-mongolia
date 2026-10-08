import { useLocale } from '../context/locale'
import ShopButton from '../components/ui/ShopButton'

export default function NotFoundPage() {
  const { t } = useLocale()
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 py-20 text-center">
      <h1 className="font-display text-3xl uppercase">{t('Page not found')}</h1>
      <p className="text-sm text-neutral-600">{t('This page isn’t part of the demo yet.')}</p>
      <ShopButton href="/" variant="dark">{t('Back to home')}</ShopButton>
    </main>
  )
}
