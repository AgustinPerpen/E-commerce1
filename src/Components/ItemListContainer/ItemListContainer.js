import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getData } from '../FakeApi/FakeApi'
import { useParams } from 'react-router-dom'
import { db } from "../../Firebase/Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {

  const [loading, setLoading] = useState(true)
  const [itemList, setItemList] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {

    const productsCollection = collection(db, "productos")
    const q = query(productsCollection, where("category", "==", `${categoryId}`))

    if(categoryId){
      getDocs(q)
      .then(result => {
        const listResult = result.docs.map(product =>{
            return{
              id: product.id,
              ...product.data(),
            } 
        })
        setItemList(listResult)
      })
      .catch((error) => {
      console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
      }else{
        getDocs(productsCollection)
        .then(result => {
          const listResult = result.docs.map(product =>{
            return{
            id: product.id,
            ...product.data(),
          } 
        })
        setItemList(listResult)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
      }
  }, [categoryId]);

  return (
    <div className='everything'>     
        <span className='landing'>{greeting}</span>
        {loading ? <Spinner/> : <ItemList itemList={itemList}/>}
    </div>
  )
}

export default ItemListContainer