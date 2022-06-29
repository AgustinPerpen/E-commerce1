import React from 'react'

const Item = ({item}) => {

  return (
    <div>
        <h3>Nuestros productos:</h3>
        <div >
            {item.map(i => <li className='product-list' key={i.id}> {i.image} {i.title} {i.price} Stock disponible: {i.stock} </li>)}
        </div>
    </div>
  )
}

export default Item