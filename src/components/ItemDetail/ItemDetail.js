import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { useState } from 'react'

const ItemDetail = ({products}) => {
    const [show, setShow] = useState(true)
    const handleOnAdd = (quantity) => {
        console.log('Cant. de productos agregados', quantity)
    }
    return(
        <div className='ItemDetail'>
            <div className='detail'>
                <div className='ContImg'>
                    <img className='img' src={products.img}/>
                </div>
                <div className='ContInfo'>
                    <h3 className='category'>{products.category}</h3>
                    <h2 className='typography'>{products.name}</h2>
                    <p className='stock'>Cantidad disponible {products.stock}</p>
                    <h5 className='price typography'>${products.price}</h5>
                    <Counter show={show} stock={products.stock} initial={1} onAdd={handleOnAdd}/>
                </div>
                <>
                <p className='description'>{products.description}</p>
                </>
            </div>
        </div>
    )
}

export default ItemDetail