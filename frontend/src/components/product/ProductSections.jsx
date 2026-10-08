import { mn } from '../../data/site'
import { ArrowRight } from 'lucide-react'

export function Breadcrumbs({ trail }) {
  return (
    <div className="breadcrumbs">
      {trail.map(({ label, href }, index) => index === trail.length - 1
        ? <b key={label}>{label}</b>
        : <span key={label} className="contents"><a href={href}>{mn(label === 'Home' ? 'Нүүр' : label === 'Products' ? 'Бүтээгдэхүүн' : label)}</a><span>/</span></span>)}
    </div>
  )
}

export function SectionTabs({ tabs }) {
  return <nav className="pdp-tabs">{tabs.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
}

export function ProductOverview({ product }) {
  const cards = [
    product.battery && [product.battery, 'Батерейн ажиллах хугацаа'],
    product.highlight && [product.highlight, 'Таны идэвхтэй амьдралд'],
    product.water && [product.water, 'Усны хамгаалалт'],
  ].filter(Boolean)

  return (
    <section id="overview" className="pdp-overview">
      <div className="eyebrow dark">БҮТЭЭГДЭХҮҮНИЙ ТУХАЙ</div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {cards.length > 0 && (
        <div className="spec-cards">
          {cards.map(([value, label]) => <article key={label}><b>{value.toUpperCase()}</b><span>{label}</span></article>)}
        </div>
      )}
    </section>
  )
}

export function FeatureStories({ stories }) {
  if (!stories.length) return null
  return (
    <section className="feature-stories" id="features">
      {stories.map(({ image, title, copy }) => (
        <article key={title} className="feature-story" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.58),transparent 80%),url(${image})` }}>
          <div><h2>{title}</h2><p>{copy}</p></div>
        </article>
      ))}
    </section>
  )
}

export function SpecificationList({ name, groups }) {
  if (!groups.length) return null
  return (
    <section className="full-specs" id="specifications">
      <div className="eyebrow dark">БҮТЭЭГДЭХҮҮНИЙ МЭДЭЭЛЭЛ</div>
      <h2>Үзүүлэлт</h2>
      <p className="spec-intro">{name}-ийн онцлог, техникийн үзүүлэлт болон нийцлийн мэдээлэл.</p>
      {groups.map((group, index) => (
        <details className="spec-group" key={group.title} open={index === 0}>
          <summary>{mn(group.title)}<span>{group.rows.length} үзүүлэлт</span></summary>
          <table><tbody>{group.rows.map(([label, value]) => <tr key={label}><th>{mn(label)}</th><td>{mn(value)}</td></tr>)}</tbody></table>
        </details>
      ))}
    </section>
  )
}

export function SupportResources({ product }) {
  if (!product.sku) return null
  const links = [['manuals', 'Хэрэглэгчийн заавар'], ['software', 'Программ, шинэчлэл'], ['topics', 'Бүтээгдэхүүний тусламж']]
  return (
    <section className="support-resources">
      <div>
        <div className="eyebrow dark">ТУСЛАМЖ ХЭРЭГТЭЙ ЮУ?</div>
        <h2>Тусламж, материал</h2>
        <p>{product.name}-ийн заавар, программын шинэчлэл болон тусламж.</p>
      </div>
      <div>
        {links.map(([tab, label]) => <a key={tab} href={`https://support.garmin.com/?tab=${tab}&partNumber=${product.sku}`}>{label} <ArrowRight /></a>)}
      </div>
    </section>
  )
}

export function RelatedProducts({ products }) {
  return (
    <section className="related-products">
      <div className="eyebrow dark">ЦААШ ҮЗЭХ</div>
      <h2>Танд таалагдаж магадгүй</h2>
      <div className="related-grid">
        {products.map((item) => (
          <a className="related-card" href={item.href} key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.priceLabel || item.price || 'Үнэ лавлах'}</span>
            <b>БҮТЭЭГДЭХҮҮН ҮЗЭХ <ArrowRight /></b>
          </a>
        ))}
      </div>
    </section>
  )
}

export function BoxContents({ name }) {
  return (
    <section id="in-the-box" className="box-contents">
      <div><div className="eyebrow dark">ХАЙРЦАГТ</div><h2>Ашиглаж эхлэхэд хэрэгтэй зүйлс.</h2></div>
      <ul><li>{name}</li><li>Charging/data cable</li><li>Documentation</li></ul>
    </section>
  )
}
