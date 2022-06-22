import React from 'react'
import shoppingCart from '../../assets/shoppingCart.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <button>
        <img src={shoppingCart} class='cart'></img>
    </button>
  )
}

export default CartWidget