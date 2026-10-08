import { useState } from 'react'
import { useLocale } from '../../context/locale'

export const MIN_PASSWORD = 8

export const inputClass = 'mt-2 h-11 w-full border border-neutral-300 px-3 text-sm font-normal'

export function Field({ label, required, children }) {
  return (
    <label className="mt-5 block text-xs font-bold">
      {label}{required && <span className="text-red-600"> *</span>}
      {children}
    </label>
  )
}

export default function AuthCard({ title, intro, submitLabel, validate, footer, children }) {
  const { t } = useLocale()
  const [message, setMessage] = useState(null)

  const submit = (event) => {
    event.preventDefault()
    const error = validate?.(new FormData(event.currentTarget))
    setMessage(error ? { type: 'error', text: error } : { type: 'info', text: t('Accounts are not available yet. This form will be connected to customer accounts soon.') })
  }

  return (
    <main className="px-4 py-12">
      <form onSubmit={submit} className="mx-auto max-w-md bg-white p-8 shadow-[0_0_10px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-center gap-8 pb-6">
          <img src="/images/brand/garmin-logo.png" alt="Garmin" className="h-6 object-contain" />
          <img src="/images/brand/engineering-geodesy.png" alt="" className="h-12 object-contain" />
        </div>
        <h1 className="border-b border-neutral-300 pb-4 font-display text-3xl uppercase">{title}</h1>
        {intro && <p className="mt-4 text-sm text-neutral-700">{intro}</p>}
        {children}
        <button type="submit" className="mt-8 h-11 w-full bg-neutral-300 font-display text-xs uppercase text-black hover:bg-black hover:text-white">{submitLabel}</button>
        {message && <p role={message.type === 'error' ? 'alert' : 'status'} className={`mt-4 text-sm ${message.type === 'error' ? 'text-red-600' : 'bg-neutral-100 p-3 text-neutral-700'}`}>{message.text}</p>}
        {footer && <div className="mt-8 border-t border-neutral-200 pt-6 text-center text-sm">{footer}</div>}
      </form>
    </main>
  )
}
