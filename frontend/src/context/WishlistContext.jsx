import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'garmin-wishlist'
const WishlistContext = createContext({ items: [], has: () => false, toggle: () => {}, remove: () => {} })

function savedItems() {
  try {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(items) ? items : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(savedItems)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      return
    }
  }, [items])

  const has = (productId) => items.some((item) => item.productId === productId)
  const remove = (productId) => setItems((current) => current.filter((item) => item.productId !== productId))
  const toggle = (item) => setItems((current) => (current.some((entry) => entry.productId === item.productId)
    ? current.filter((entry) => entry.productId !== item.productId)
    : [...current, item]))

  return <WishlistContext.Provider value={{ items, has, toggle, remove }}>{children}</WishlistContext.Provider>
}

// eslint-disable-next-line react/only-export-components
export const useWishlist = () => useContext(WishlistContext)
