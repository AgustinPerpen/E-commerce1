import React, {createContext, useEffect, useState }from 'react'
import Item from '../Item/Item'

export const cartContext = createContext()
const { Provider } = cartContext

const CustomProvider = ({children}) => {

    const [prodToCart, setProdToCart] = useState([])
    const [quantityProducts, setQuantityProducts] = useState(0)

    useEffect(() => {
      getQuantity()
    },[prodToCart])

    const addToCart = (prod, newQuantity) => {
      const { quantity = 0 } = prodToCart.find(p => p.id === prod.id) || {}
      const updatedCart = prodToCart.filter(p => p.id !== prod.id)
      setProdToCart([...updatedCart, {...prod, quantity: quantity + newQuantity}])
      getQuantity()
    }

    const deleteFromCart = (id) => {
        setProdToCart(prodToCart.filter(p => p.id !== id))
    }

    const isInList = (id) => {
      return prodToCart.some(p => p.id === id)
    }

    const getQuantity = () => {
        let qty = 0
        prodToCart.forEach(p => qty += p.quantity)
        setQuantityProducts(qty)
    }

    const clear = () => {
      setProdToCart([])
    }

  return (
    <Provider value={{addToCart, deleteFromCart, isInList, quantityProducts, prodToCart, clear}}>
        {children}
    </Provider>
  )
}

export default CustomProvider