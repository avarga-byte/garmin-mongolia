import catalog from './catalog.json'

export const { series } = catalog

export const findCategory = (slug) => catalog.categories.find((category) => category.slug === slug) ?? null

export const categoryProducts = (category) => category.products.map((sku) => catalog.products[sku])

export const findCatalogProduct = (sku) => catalog.products[sku] ?? null
