import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContext'
import './CartWidget.css'

const CartWidget = () => {

  const { quantityProducts } = useContext(cartContext)

  return (
    <div className='cart-div'>
      <button className='cart-button'>
        <img src="https://i.postimg.cc/kXkqYV8M/shopping-Cart.png" className='cart'></img>
        <p>{
            quantityProducts === 0
            ?
            <></>
            :
            quantityProducts
            }</p>
      </button>
    </div>
  )
}

export default CartWidget