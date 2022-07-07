import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getData } from '../FakeApi/FakeApi'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

  const [loading, setLoading] = useState(true)
  const [itemList, setItemList] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
      getData(categoryId)
        .then((res) => {
          setItemList(res)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }, [categoryId]);

  return (
    <div>     
        <span className='landing'>{greeting}</span>
        {loading ? <Spinner/> : <ItemList itemList={itemList}/>}
    </div>
  )
}

export default ItemListContainer