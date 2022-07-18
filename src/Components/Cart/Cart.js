import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { quantityProducts } = useContext(cartContext)
  const { prodToCart } = useContext(cartContext)
  const { deleteFromCart } = useContext(cartContext)
  const {clear} = useContext(cartContext)
  const {subTotal} = useContext(cartContext)

  return (
    <div>
      {
        quantityProducts === 0
        ?
        <p>No hay productos en el carrito click<Link to='/'>aqui</Link>para ir a comprar</p>
        :
        prodToCart.map((product) => <p key={product.id} product={product.title}> {product.image} {product.title}: {product.quantity} unidades ${product.price}<button onClick={() => deleteFromCart(product.id)}>Eliminar</button></p>)
      }
      {
        quantityProducts === 0
        ?
        <></>
        :
        <button onClick={clear}>Eliminar todo</button>        
      }
      <div>
        {
          quantityProducts === 0
          ?
          <></>
          :
          <p>Total ${subTotal}</p>
        }        
      </div>
      
    </div>
  )
}

export default Cart