import ProductGallery from '../components/product/ProductGallery'
import PurchasePanel from '../components/product/PurchasePanel'
import { BoxContents, Breadcrumbs, FeatureStories, ProductOverview, RelatedProducts, SectionTabs, SpecificationList, SupportResources } from '../components/product/ProductSections'
import '../components/product/product.css'
import { relatedProducts } from '../data/products'

export default function ProductPage({ product }) {
  const tabs = [
    { id: 'overview', label: 'Тойм' },
    product.stories.length > 0 && { id: 'features', label: 'Онцлог' },
    product.specifications.length > 0 && { id: 'specifications', label: 'Үзүүлэлт' },
    { id: 'in-the-box', label: 'Хайрцагт' },
  ].filter(Boolean)

  return (
    <main className="pdp">
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/#featured' }, { label: product.name }]} />
      <div className="pdp-grid">
        <ProductGallery images={product.gallery} name={product.name} />
        <PurchasePanel product={product} />
      </div>
      <SectionTabs tabs={tabs} />
      <ProductOverview product={product} />
      <FeatureStories stories={product.stories} />
      <SpecificationList name={product.name} groups={product.specifications} />
      <SupportResources product={product} />
      <RelatedProducts products={relatedProducts(product.id)} />
      <BoxContents name={product.name} />
    </main>
  )
}
