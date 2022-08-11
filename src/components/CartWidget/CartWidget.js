import './Cart.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()

    return(
        <Link to='/cart' className="CartWidget">
        <img className="Cart" src='images/cart.svg' alt="cart"/>
        <a className='a'> {quantity}</a> 
        </Link>
    )
}

export default CartWidget