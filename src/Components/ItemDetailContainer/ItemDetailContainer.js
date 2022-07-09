import React, { useState, useEffect } from 'react'
import { Spinner } from 'reactstrap'
import { getDetailedList} from '../FakeApi/FakeApi'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {

    const [detailedItem, setDetailedItem] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
      setLoading(true)
        getDetailedList(id)
          .then((res) => {
            setDetailedItem(res)
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            setLoading(false)
          })
      }, [id]);
      
   

  return (
    <div>
      {loading ? <Spinner/> : <ItemDetail detailedItem={detailedItem}/>}
    </div>
  )
}

export default ItemDetailContainer