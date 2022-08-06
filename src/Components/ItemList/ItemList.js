import React from 'react'
import "./ItemList.css"
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemList = ({itemList}) => {        

  return (
    <div>        
        <div className='boxes'>
            {itemList.map((item)=><Item key={item.id} item={item}/>)}
        </div>
    </div>
  )
}

export default ItemList