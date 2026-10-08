import { useCallback, useState } from 'react'
import ProductGallery from '../components/product/ProductGallery'
import PurchasePanel from '../components/product/PurchasePanel'
import { BoxContents, Breadcrumbs, FeatureStories, ProductOverview, ProductDetailGroups, RelatedProducts, SectionTabs, SpecificationList, SupportResources } from '../components/product/ProductSections'
import '../components/product/product.css'
import { useLocale } from '../context/locale'

export default function ProductPage({ product }) {
  const { t } = useLocale()
  const [selectedVariant, setSelectedVariant] = useState(null)
  const selectVariant = useCallback((variant) => {
    setSelectedVariant(variant)
    if (!variant?.sku) return
    const match = window.location.pathname.match(/^(\/(?:mn-MN|en-MN))?\/p\/[^/]+$/)
    if (match) window.history.replaceState({}, '', `${match[1] || ''}/p/${variant.sku}${window.location.search}${window.location.hash}`)
  }, [])
  const tabs = [
    { id: 'overview', label: t('Overview') },
    { id: 'specifications', label: t('Specifications tab') },
    { id: 'in-the-box', label: t('In the box') },
    { id: 'maps', label: t('Maps') },
    { id: 'accessories', label: t('Accessories') },
    { id: 'compatible-devices', label: t('Compatible devices') },
  ]

  return (
    <main className="pdp">
      <Breadcrumbs trail={[{ label: t('Home'), href: '/' }, ...(product.breadcrumbs || [{ label: t('Products'), href: '/#featured' }]), { label: product.name }]} />
      <div className="pdp-grid">
        <ProductGallery key={`${product.id}-${selectedVariant?.sku || product.sku}`} images={selectedVariant?.images || product.gallery} name={product.name} />
        <PurchasePanel key={product.id} product={product} onVariantChange={selectVariant} />
      </div>
      <SectionTabs tabs={tabs} />
      <ProductOverview product={product} />
      <FeatureStories stories={product.stories} />
      <SpecificationList name={product.name} groups={product.specifications} variant={selectedVariant} />
      <BoxContents name={product.name} />
      <ProductDetailGroups product={product} />
      <div className="pdp-support-layout">
        <SupportResources product={product} />
        <RelatedProducts products={product.frequentlyBoughtTogether || []} title="Frequently bought together" />
      </div>
    </main>
  )
}
