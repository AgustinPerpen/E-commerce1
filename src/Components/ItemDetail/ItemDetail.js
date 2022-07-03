import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({detailedItem}) => {

    const onAdd = (counter) => {
        console.log('Se agregaron ', counter, 'productos');
    }

  return (

    <div className="card">
    <p>{detailedItem.image}</p>
    <div className="card-body">
        <p className="card-text">{detailedItem.title}</p>
        <p className="card-text">{detailedItem.price}</p>
        <p>Detalle</p>
        <ItemCount  stock={detailedItem.stock} onAdd={onAdd} />
    </div>
</div>
        )
    }

export default ItemDetail