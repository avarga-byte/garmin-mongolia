import { useLocale } from '../../context/locale'

export default function CatalogProductCard({ product, compareMode, compared, onCompare }) {
  const { t } = useLocale()
  return (
    <article className="group relative flex h-full flex-col bg-white p-2 shadow-[0_0_6px_rgba(0,0,0,0.1)] transition hover:shadow-lg">
      {product.isNew && <span className="absolute left-2 top-2 z-10 bg-sky-400 px-3 py-1 font-display text-[11px] uppercase text-black [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">{t('New')}</span>}
      <a href={`/p/${product.sku}`} className="flex flex-1 flex-col">
        <img src={product.image} alt={product.title} loading="lazy" className="mx-auto aspect-square w-full object-contain p-2 transition group-hover:scale-[1.02]" />
        <h3 className="mt-4 px-2 font-display text-xl leading-tight">{product.title}</h3>
        {product.subtitle && <p className="mt-2 px-2 text-[12.5px] leading-relaxed text-neutral-600">{product.subtitle}</p>}
        <p className="mt-auto px-2 pb-2 pt-5 text-sm">{t('Contact for price')}</p>
      </a>
      {compareMode && (
        <label className="flex cursor-pointer items-center gap-2 border-t border-neutral-200 px-2 pb-1 pt-2 text-xs uppercase">
          <input type="checkbox" checked={compared} onChange={onCompare} className="size-3.5 accent-black" />
          {t('Compare')}
        </label>
      )}
    </article>
  )
}
