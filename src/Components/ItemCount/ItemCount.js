import React from 'react'
import { useState } from 'react'

const ItemCount = ({onAdd, stock}) => {

    const [counter, setCounter] = useState(1);

    const handlerRest = () => {
        if (counter == 1) {
            console.log("La cantidad no puede ser menor a 1")
        }else{
            setCounter(counter - 1)
        }
    }

    const resetCount = () => {
        setCounter(1)
    }
    const handlerAdd = () => {
        setCounter(counter + 1)
    }

    const handlerAddToCart = () => {
        if (counter > stock) {
            console.log('Solo quedan',stock,'productos') 
        }else{
        onAdd(counter);
        resetCount()
        }
    }


  return (
    <div className='button-container'>
        <div className='counter-button'>
            <div className='background-counter'>
                <button className='take' onClick={handlerRest}>-</button>
                {counter}
                <button className='give' onClick={handlerAdd}>+</button>
            </div>
        </div>
            <button className='add-button' onClick={handlerAddToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount