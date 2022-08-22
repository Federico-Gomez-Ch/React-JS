import './CartContainer.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from 'react-router-dom'


const Cart= () => {
    const { cart, clearCart, getTotal, getQuantity} = useContext(CartContext)  
    const total = getTotal()
    const quantity = getQuantity()

    if(quantity === 0){
        return(
            <>
        <h1>No hay productos agregados al carrito</h1>
        <button>
        <Link className='noItems' to='/'>Seguir comprando</Link>
        </button>
        </>
        )}
    
    return(
        <>
        <div>
            <h1 className='item'>Todos tus productos seleccionados</h1>
        </div>
            <div className='ItemCart'>
            <button onClick={() => clearCart()} className="ButtonOpcion">Borrar todo</button>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='total'>Total: ${total}</h3>
            <button><Link to ='/checkout' className='generateOrderBtn'>Generar orden</Link></button>
            </div>

        </>
    )
}


export default Cart