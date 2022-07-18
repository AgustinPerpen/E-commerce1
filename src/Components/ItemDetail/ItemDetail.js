import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import React, { useState, useContext } from 'react'
import {Link} from "react-router-dom";
import { cartContext } from '../Context/CartContext';
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';

const ItemDetail = ({detailedItem}) => {

    const [choice, setChoice] = useState(false)

    const { addToCart } = useContext(cartContext)
    const { total } = useContext(cartContext)

    const onAdd = (counter) => {
        console.log('Se agregaron ', counter, 'productos');
        setChoice(true)
        addToCart(detailedItem, counter)
        total()
    }
    
    return (
    <div className="card">
        <p>{detailedItem.image}</p>
        <div className="card-body">
            <p className="card-text">{detailedItem.title}</p>
            <p className="card-text">${detailedItem.price}</p>
            <p>Detalle</p>
            <div className='add-button'>
                {choice ? <Link to='/cart'><button>Ir al carrito </button></Link> : <ItemCount  stock={detailedItem.stock} onAdd={onAdd} />}
            </div>
        </div>
    </div>
    )
}

export default ItemDetail