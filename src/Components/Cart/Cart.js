import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {

  const { quantityProducts } = useContext(cartContext)
  const { prodToCart } = useContext(cartContext)
  const { deleteFromCart } = useContext(cartContext)
  const {clear} = useContext(cartContext)
  const {subTotal} = useContext(cartContext)

  return (
    <div className='cart-container'>
      {
        quantityProducts === 0
        ?
        <p className='no-products'><b>No hay productos en el carrito click <Link to='/'>aqui</Link> para ir a comprar</b></p>
        :
        <div>
          <div className="products-bought">
            <p><b>Tu compra:</b></p>
            {prodToCart.map((product) => <p key={product.id} product={product.title}> <img width='100px' height='100px' src={product.image}></img> {product.title}: {product.quantity} unidades ${product.price * product.quantity}<button className='delete-product' onClick={() => deleteFromCart(product.id)}>Eliminar</button></p>)}
            <p className='total'><b>Total ${subTotal}</b></p>
          <div className='cart-buttons'>
            <button onClick={clear}>Eliminar todo</button>        
            <Link to="/sales"><button>Finalizar compra</button></Link>
            <Link to="/"><button>Seguir comprando</button></Link>
          </div>
          </div>
        </div>
      }      
    </div>
  )
}

export default Cart