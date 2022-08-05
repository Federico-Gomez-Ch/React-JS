import {useState} from 'react'
import './Counter.css'

const Counter = ({stock=0, initial=1, onAdd}) => {
 
    const [quantity, setQuantity] = useState(initial)
    
const decrement = () => {
   if(quantity > initial){
    setQuantity(quantity - 1);
   }
   
}

const increment = () => {
   if(quantity < stock){
    setQuantity(quantity + 1)
   }
}

return (
    <div className='CounterContainer'>
        <div className='CounterSoonContainer'> 
        <button disabled={quantity === initial} className='countBtn' onClick={decrement}> - </button>
        <button disabled={quantity === stock}  className='countBtn'onClick={increment}> + </button>
        <p>{quantity}</p>
       <div>
        <button disabled={stock === 0 ? true : null} className='cartBtn' onClick={()=> onAdd (quantity)}>Agregar al carrito</button>    
       </div>
    </div>
    </div>
)
}

export default Counter