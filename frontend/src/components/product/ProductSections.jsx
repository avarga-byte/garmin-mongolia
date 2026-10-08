import { useLocale } from '../../context/locale'
import { ArrowRight } from 'lucide-react'

export function Breadcrumbs({ trail }) {
  const { t } = useLocale()
  return (
    <div className="breadcrumbs">
      {trail.map(({ label, href }, index) => index === trail.length - 1
        ? <b key={label}>{t(label)}</b>
        : <span key={label} className="contents"><a href={href}>{t(label)}</a><span>/</span></span>)}
    </div>
  )
}

export function SectionTabs({ tabs }) {
  return <nav className="pdp-tabs">{tabs.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
}

export function ProductOverview({ product }) {
  const { t } = useLocale()
  const cards = [
    product.battery && [t(product.battery), 'Battery life'],
    product.highlight && [product.highlight, 'Made for your activities'],
    product.water && [t(product.water), 'Water rating'],
  ].filter(Boolean)

  return (
    <section id="overview" className="pdp-overview">
      <div className="eyebrow dark">{t('PRODUCT OVERVIEW')}</div>
      <h2>{product.name}</h2>
      <p>{t(product.description)}</p>
      {cards.length > 0 && (
        <div className="spec-cards">
          {cards.map(([value, label]) => <article key={label}><b>{value.toUpperCase()}</b><span>{t(label)}</span></article>)}
        </div>
      )}
    </section>
  )
}

export function FeatureStories({ stories }) {
  const { t } = useLocale()
  if (!stories.length) return null
  return (
    <section className="feature-stories" id="features">
      {stories.map(({ image, title, copy }) => (
        <article key={title} className="feature-story" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.58),transparent 80%),url(${image})` }}>
          <div><h2>{t(title)}</h2><p>{t(copy)}</p></div>
        </article>
      ))}
    </section>
  )
}

export function SpecificationList({ name, groups, variant }) {
  const { t } = useLocale()
  if (!groups.length) return null
  return (
    <section className="full-specs" id="specifications">
      <div className="eyebrow dark">{t('PRODUCT INFORMATION')}</div>
      <h2>{t('Specifications')}</h2>
      <p className="spec-intro">{t('Explore features, technical details and compatibility information for')} {name}.</p>
      {groups.map((group, index) => (
        <details className="spec-group" key={group.title} open={index === 0}>
          <summary>{t(group.title)}<span>{group.rows.length} {t('details')}</span></summary>
          <table><tbody>{group.rows.map(([label, value]) => <tr key={label}><th>{t(label)}</th><td>{t(label === 'Battery life (smartwatch mode)' && variant?.battery ? variant.battery : value)}</td></tr>)}</tbody></table>
        </details>
      ))}
    </section>
  )
}

export function ProductDetailGroups({ product }) {
  const { t } = useLocale()
  const groups = [
    ['maps', 'Maps', product.maps, 'Map details are confirmed for each product and region.'],
    ['accessories', 'Accessories', product.accessories, 'Contact us to check locally available accessories.'],
    ['compatible-devices', 'Compatible devices', product.compatibleDevices, 'Contact us to confirm compatibility for your setup.'],
  ]
  return groups.map(([id, title, items, emptyMessage]) => (
    <section id={id} className="product-detail-group" key={id}>
      <div className="eyebrow dark">{t('PRODUCT DETAILS')}</div>
      <h2>{t(title)}</h2>
      {items?.length ? <ul>{items.map((item) => <li key={item.id || item.name}><a href={item.href || '#'}>{t(item.name)}{item.description && <span>{t(item.description)}</span>}</a></li>)}</ul> : <p>{t(emptyMessage)}</p>}
    </section>
  ))
}

export function SupportResources({ product }) {
  const { t } = useLocale()
  if (!product.sku) return null
  const links = [['manuals', 'Owner’s manual'], ['software', 'Software and updates'], ['topics', 'Product support']]
  return (
    <section className="support-resources">
      <div>
        <div className="eyebrow dark">{t('NEED A HAND?')}</div>
        <h2>{t('Support and resources')}</h2>
        <p>{t('Get manuals, software updates and help for')} {product.name}.</p>
      </div>
      <div>
        {links.map(([tab, label]) => <a key={tab} href={`https://support.garmin.com/?tab=${tab}&partNumber=${product.sku}`}>{t(label)} <ArrowRight /></a>)}
      </div>
    </section>
  )
}

export function RelatedProducts({ products, title = 'You may also like' }) {
  const { t } = useLocale()
  return (
    <section className="related-products">
      <div className="eyebrow dark">{t(title === 'Frequently bought together' ? 'PRODUCT PAIRINGS' : 'KEEP EXPLORING')}</div>
      <h2>{t(title)}</h2>
      {products.length ? <div className="related-grid">
        {products.map((item) => (
          <a className="related-card" href={item.href} key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.priceLabel || item.price || t('Contact for price')}</span>
            <b>{t('VIEW PRODUCT')} <ArrowRight /></b>
          </a>
        ))}
      </div> : <p>{t('Product pairings will appear when confirmed in the catalog.')}</p>}
    </section>
  )
}

export function BoxContents({ name }) {
  const { t } = useLocale()
  return (
    <section id="in-the-box" className="box-contents">
      <div><div className="eyebrow dark">{t('IN THE BOX')}</div><h2>{t('Everything you need to get started.')}</h2></div>
      <ul><li>{name}</li><li>{t('Charging/data cable')}</li><li>{t('Documentation')}</li></ul>
    </section>
  )
}
