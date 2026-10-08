import { linkProps } from '../../data/site'

// Dropdown panel under a top-level nav item: link columns plus a promo card.
export default function MegaMenu({ item }) {
  return (
    <div className="absolute inset-x-0 top-full z-30 border-t border-neutral-200 bg-white shadow-lg">
      <div className="mx-auto flex max-w-[1440px] gap-10 px-10 py-8">
        <div className="flex min-w-0 flex-1 gap-8">
          {item.columns.map((column) => (
            <div key={column.title} className="min-w-0 max-w-52 flex-1">
              <h3 className="mb-3 border-b border-neutral-300 pb-2 font-display text-sm uppercase">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map(([label, href]) => (
                  <li key={label}><a {...linkProps(href)} className="text-[13px] hover:underline">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.promo && (
          <a {...linkProps(item.promo.href)} className="hidden w-60 shrink-0 border border-neutral-200 p-4 text-center xl:block">
            <img src={item.promo.image} alt="" className="mx-auto aspect-square w-full object-contain" />
            <p className="mt-3 font-display text-base uppercase">{item.promo.title}</p>
            <p className="mt-1 text-xs text-neutral-600">{item.promo.copy}</p>
            <span className="mt-3 block text-right font-display text-xs uppercase">Learn more</span>
          </a>
        )}
      </div>
    </div>
  )
}
