import React from 'react'
import './Item.css'
import {Link} from "react-router-dom"

const Item = ({item}) => {

  return (
    
    <Link className='card-link' to={`/product/${item.id}`}>
      <div className="card-no-detail">
        <img width='100%' height='50%' key={item} src={item.image}></img>
          <div className="card-body">
              <h3 className="card-text">{item.title}</h3>
          </div>
      </div>
    </Link>
  )
}

export default Item