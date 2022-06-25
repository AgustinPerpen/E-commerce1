import React from 'react'
import shoppingCart from '../../assets/shoppingCart.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cart-div'>
      <button className='cart-button'>
        <img src={shoppingCart} class='cart'></img>
      </button>
    </div>
  )
}

export default CartWidget