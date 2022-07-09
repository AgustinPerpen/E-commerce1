import React from 'react'

const GoToCart = ({chosen, counter}) => {

    const handlerGoToCart = () => {
        chosen()
    }

  return (
    <div>
        <p>Agregaste</p>
        {counter}
        <p>productos</p>
        <button onClick={handlerGoToCart}>Ir al carrito</button>
    </div>
  )
}

export default GoToCart