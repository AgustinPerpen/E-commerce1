import React, { useState, useEffect } from 'react'
import {Spinner} from 'reactstrap'
import { getData } from '../FakeApi/FakeApi'
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemList = () => {        
    
    const [loading, setLoading] = useState(true)
    const [itemList, setItemList] = useState([])

    const getItemList = async () => {
        try{
          const response = await getData
          setItemList(response)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }

    useEffect(() => {
        getItemList()
        }, []); 

  return (
    <div>        
        <div className='sweet-loading'>
            {loading ? <Spinner/> : <Item item={itemList}/>}
        </div>
    </div>
  )
}

export default ItemList