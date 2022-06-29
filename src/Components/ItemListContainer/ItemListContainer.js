import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

  const onAdd = (counter) => {
    console.log('Se agregaron ', counter, 'productos');
}

  return (
    <div>     
        <span className='landing'>{greeting}</span>
        <ItemList/>
        <ItemCount stock={10} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer