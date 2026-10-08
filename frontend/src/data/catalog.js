// Category pages and product listings snapshotted from garmin.ae (see scripts/import-catalog.mjs).
import catalog from './catalog.json'

export const { series } = catalog

export const findCategory = (slug) => catalog.categories.find((category) => category.slug === slug) ?? null

export const categoryProducts = (category) => category.products.map((sku) => catalog.products[sku])

export const findCatalogProduct = (sku) => catalog.products[sku] ?? null

export const formatPrice = (amount) => `AED ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
