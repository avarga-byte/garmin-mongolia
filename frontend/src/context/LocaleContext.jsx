import { useEffect, useMemo, useState } from 'react'
import { english, mongolian } from '../data/translations'
import { LocaleContext } from './locale'

const supported = ['en', 'mn']

function initialLocale() {
  const saved = localStorage.getItem('garmin-locale')
  if (supported.includes(saved)) return saved
  const hint = document.documentElement.dataset.country || new URLSearchParams(window.location.search).get('country')
  if (hint === 'MN') return 'mn'
  if (hint) return 'en'
  return Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Ulaanbaatar' ? 'mn' : 'en'
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(initialLocale)
  const value = useMemo(() => ({
    locale,
    setLocale: (next) => {
      if (!supported.includes(next)) return
      localStorage.setItem('garmin-locale', next)
      const match = window.location.pathname.match(/^\/(?:mn-MN|en-MN)(?=\/|$)/)
      const path = match ? window.location.pathname.slice(match[0].length) || '/' : window.location.pathname
      const localizedPath = `/${next}-MN${path.startsWith('/') ? path : `/${path}`}`
      window.history.replaceState({}, '', `${localizedPath}${window.location.search}${window.location.hash}`)
      setLocale(next)
    },
    t: (key) => {
      if (locale === 'en') return english[key] || key
      return mongolian[key] || english[key] || key
    },
  }), [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = locale === 'mn' ? 'Garmin Монгол | Ухаалаг цаг, GPS төхөөрөмж' : 'Garmin | GPS Devices, Smartwatches and Fitness'
    if (!/^\/(?:mn-MN|en-MN)(?=\/|$)/.test(window.location.pathname)) {
      const path = window.location.pathname === '/' ? '' : window.location.pathname
      window.history.replaceState({}, '', `/${locale}-MN${path}${window.location.search}${window.location.hash}`)
    }
  }, [locale])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
