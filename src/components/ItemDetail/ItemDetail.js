import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'
import { useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import Notification from '../../Notification/Notification'


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(Notification)
    const quantityAdded = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        setNotification('error', `Se agregaron ${quantity} ${name}`)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
       
    }
    return(
        <div className='ItemDetail'>
            <div className='detail'>
                <div className='ContImg'>
                    <img className='img' alt='imagen' src={img}/>
                </div>
                <div className='ContInfo'>
                    <h3 className='category'>{category}</h3>
                    <h2 className='title'>{name}</h2>
                    <p className='stock'>Cantidad disponible {stock}</p>
                    <h5 className='price '>${price}</h5>
                    { quantity > 0 ? <h6 className='thanks'> Gracias por su compra!</h6> : null }
                    { quantity > 0 ? <Link to='/cart' className='ir'><button>Ir al carrito</button></Link> : <Counter stock={stock} onAdd={handleOnAdd}initial={quantityAdded}/>}
                
</div>
                <p className='description'>{description}</p>
            </div>
            <Link className='btnBack' to= '/'><img src="/images/icons8-back-arrow-64.png"/></Link>
        </div>
    )
}

export default ItemDetail
