import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

  const onAdd = (counter) => {
    console.log('Se agregaron ', counter, 'productos');
}

  return (
    <div>     
        <span className='landing'>{greeting}</span>
        <ItemCount stock={10} onAdd={onAdd} />    
    </div>
  )
}

export default ItemListContainer