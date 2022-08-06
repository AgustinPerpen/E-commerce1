import React, { useState, useEffect } from 'react'
import { Spinner } from 'reactstrap'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom';
import { db } from "../../Firebase/Firebase"
import { doc, getDoc } from "firebase/firestore"
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {    

    const [detailedItem, setDetailedItem] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {

      const refDoc = doc(db, "productos", id)
      
      getDoc(refDoc)
      .then(result => {
        setDetailedItem({id: result.id, ...result.data(), })
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [id]);
  return (
    <div className="card-container">
      {loading ? <Spinner/> : <ItemDetail detailedItem={detailedItem}/>}
    </div>
  )
}


export default ItemDetailContainer