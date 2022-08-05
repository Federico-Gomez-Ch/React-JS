import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({ product}) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    
    return (
        <div className="container-card divInline" onClick={handleClick}>
            <div className="card" >
                <img src={product.img} />
                <div className="contenido-card">
                    <h3>{product.name}</h3>
                    <h4 className='$'>${product.price} </h4>
                    <Link to={`/detail/${product.id}`}>ver detalle</Link>
                    <p>Stock disponible {product.stock} </p>
                </div>
            </div>
        </div>
    )
}

export default Item