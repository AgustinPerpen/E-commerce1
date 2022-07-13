import React, { useState, useEffect } from 'react'
import {Spinner} from 'reactstrap'
import { getData } from '../FakeApi/FakeApi'
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemList = ({itemList}) => {        

  return (
    <div>        
        <div className='sweet-loading'>
            {itemList.map((item)=><Item key={item.id} item={item}/>)}
        </div>
    </div>
  )
}

export default ItemList