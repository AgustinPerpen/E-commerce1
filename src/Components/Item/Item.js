import React from 'react'
import './Item.css'
import {Link} from "react-router-dom"

const Item = ({item}) => {

  return (
    
    <div className="card">
    <p>{item.image}</p>
    <div className="card-body">
        <h3 className="card-text">{item.title}</h3>
        <Link to={`/product/${item.id}`}>Ver detalle</Link>
    </div>
    </div>
  )
}

export default Item