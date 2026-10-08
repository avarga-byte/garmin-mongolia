import { useState } from 'react'
import { useLocale } from '../context/locale'
import { bulkEnquiry, company, localized } from '../data/pages'

const fields = [
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'organisation', label: 'Organisation Name', type: 'text', required: true },
  { name: 'quantity', label: 'Order Quantity', type: 'number', required: true, min: 1 },
  { name: 'products', label: 'Products of interest', type: 'text' },
]

export default function BulkEnquiryPage() {
  const { locale, t } = useLocale()
  const l = (value) => localized(value, locale)
  const [sent, setSent] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const body = fields.map(({ name, label }) => `${label}: ${data[name] || '-'}`).join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Bulk enquiry – ${data.organisation}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <main className="px-4 py-12">
      <form onSubmit={submit} className="mx-auto max-w-md bg-white p-8 shadow-[0_0_10px_rgba(0,0,0,0.12)]">
        <h1 className="border-b border-neutral-300 pb-4 font-display text-3xl uppercase">{l(bulkEnquiry.title)}</h1>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700">{l(bulkEnquiry.intro)}</p>
        {fields.map((field) => (
          <label key={field.name} className="mt-5 block text-xs font-bold">
            {t(field.label)}{field.required && ' *'}
            <input name={field.name} type={field.type} required={field.required} min={field.min} className="mt-2 h-11 w-full border border-neutral-300 px-3 text-sm font-normal" />
          </label>
        ))}
        <button type="submit" className="mt-8 h-11 w-full bg-black font-display text-xs uppercase text-white hover:bg-neutral-700">{t('Send bulk enquiry')}</button>
        <p className="mt-3 text-xs text-neutral-500" aria-live="polite">{sent ? t('Your email app should open now. If it does not, email us directly at') + ` ${company.email}` : l(bulkEnquiry.note)}</p>
      </form>
    </main>
  )
}
