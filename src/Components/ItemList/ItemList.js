import React, { useState, useEffect } from 'react'
import {Spinner} from 'reactstrap'
import { getData } from '../FakeApi/FakeApi'
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemList = ({itemList}) => {        
    
    const [loading, setLoading] = useState(true)
    /*const [itemList, setItemList] = useState([])*/

    /*const getItemList = async () => {
        try{
          const response = await getData
          setItemList(response)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }*/

      /*useEffect(() => {
          fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItemList(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, []);*/


    /*useEffect(() => {
        getItemList()
        }, []); */

  return (
    <div>        
        <div className='sweet-loading'>
            {itemList.map((item)=><Item key={item.id} item={item}/>)}
        </div>
    </div>
  )
}

export default ItemList