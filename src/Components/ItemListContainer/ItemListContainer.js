import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

  return (
    <div>     
        <span className='landing'>{greeting}</span>
        <ItemList/>
    </div>
  )
}

/*<ItemCount stock={10} onAdd={onAdd} />*/

export default ItemListContainer