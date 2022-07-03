import React, { useState, useEffect } from 'react'
import { Spinner } from 'reactstrap'
import { getData } from '../FakeApi/FakeApi'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [detailedItem, setDetailedItem] = useState([])
    const [loading, setLoading] = useState(true)

    const getDetailedList = async () => {
        try{
          const response = await getData
          setDetailedItem(response)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false) 
        }
      }

    useEffect(() => {
        getDetailedList()
        }, []); 

  return (
    <div>
      {loading ? <Spinner/> : detailedItem.map((detailedItem) =><ItemDetail key={detailedItem.id} detailedItem={detailedItem}/>)}
    </div>
  )
}

export default ItemDetailContainer