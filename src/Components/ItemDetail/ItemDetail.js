import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import React, { useState, useContext } from 'react'
import {Link} from "react-router-dom";
import { cartContext } from '../Context/CartContext';

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
        <div>
            <div className="card">
                <div className='detail-top'>
                    <img width='400px' height='400px' src={detailedItem.image} />
                    <Link to="/" className='close-link'><p className='close-cross'>X</p></Link>
                </div>
                <div className="card-body">
                    <p className="card-text"><b>{detailedItem.title}</b></p>
                    <p className="card-text">Precio p/u ${detailedItem.price}</p>
                    <p>Detalle</p>
                    <div >
                        {choice ? <Link to='/cart'><button>Ir al carrito </button></Link> : <ItemCount  stock={detailedItem.stock} onAdd={onAdd} />}
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default ItemDetail