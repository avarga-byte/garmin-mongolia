import { useState } from 'react'
import { mn } from '../../data/site'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section className="bg-white px-4 py-10 text-center">
      <h2 className="font-display text-xl uppercase">{mn('Sign up for Garmin news')}</h2>
      {submitted ? (
        <p className="mt-4 text-sm">{mn('Thanks for signing up!')}</p>
      ) : (
        <form className="mx-auto mt-4 flex max-w-sm" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
          <input type="email" required placeholder={mn('Email')} aria-label="И-мэйл" className="h-9 flex-1 border border-neutral-300 px-3 text-sm outline-none focus:border-black" />
          <button type="submit" aria-label="Бүртгүүлэх" className="grid w-9 place-items-center bg-black text-white"><ArrowRight size={16} /></button>
        </form>
      )}
      <p className="mx-auto mt-4 max-w-md text-xs text-neutral-600">{mn('Product news and offers tailored to your interests and devices.')}</p>
    </section>
  )
}
