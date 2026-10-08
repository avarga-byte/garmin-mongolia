import { createContext, useContext, useState } from 'react'

const CartContext = createContext({ count: 0, add: () => {} })

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const count = items.length
  const add = (item) => setItems((current) => [...current, item])
  return <CartContext.Provider value={{ count, items, add }}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react/only-export-components
export const useCart = () => useContext(CartContext)
