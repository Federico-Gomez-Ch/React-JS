import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'

const ItemDetail = ({id,name,img,category,description,price,stock}) => {
    const handleOnAdd = (quantity) => {
        console.log('Cant. de productos agregados', quantity)
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
                    <Counter stock={stock} initial={1} onAdd={handleOnAdd}/>
                </div>
                <p className='description'>{description}</p>
            </div>
            <Link className='btnBack' to= '/'>Volver</Link>
        </div>
    )
}

export default ItemDetail