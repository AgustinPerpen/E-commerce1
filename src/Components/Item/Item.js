import React from 'react'
import './Item.css'

const Item = ({item}) => {

  return (
    <div className="card">
    <p>{item.image}</p>
    <div className="card-body">
        <p className="card-text">{item.title}</p>
        <button>Ver detalle</button>
    </div>
</div>
  )
}

export default Item