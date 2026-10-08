import { pageHero } from '../../data/pages'

export default function PageHero({ title, image = pageHero, children }) {
  return (
    <header>
      <img src={image} alt="" className="aspect-[2/1] w-full object-cover md:aspect-[1440/480]" />
      <div className="mx-auto max-w-3xl px-4 pb-4 pt-10 text-center">
        <h1 className="font-display text-3xl uppercase md:text-4xl">{title}</h1>
        {children}
      </div>
    </header>
  )
}
