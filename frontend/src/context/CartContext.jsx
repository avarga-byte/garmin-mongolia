import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'garmin-cart'
const CartContext = createContext({ count: 0, items: [], add: () => {}, setQuantity: () => {}, remove: () => {}, clear: () => {} })

const itemKey = (item) => `${item.sku || item.productId}|${JSON.stringify(item.variants || {})}`

function savedItems() {
  try {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(items) ? items : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(savedItems)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      return
    }
  }, [items])

  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const add = (item) => setItems((current) => {
    const key = itemKey(item)
    const existing = current.find((entry) => entry.key === key)
    return existing
      ? current.map((entry) => (entry === existing ? { ...entry, quantity: entry.quantity + 1 } : entry))
      : [...current, { ...item, key, quantity: 1 }]
  })
  const setQuantity = (key, quantity) => setItems((current) => current.map((entry) => (entry.key === key ? { ...entry, quantity } : entry)))
  const remove = (key) => setItems((current) => current.filter((entry) => entry.key !== key))
  const clear = () => setItems([])

  return <CartContext.Provider value={{ count, items, add, setQuantity, remove, clear }}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react/only-export-components
export const useCart = () => useContext(CartContext)
