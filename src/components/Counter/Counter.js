import { FaCartPlus } from "react-icons/fa";
import {useState} from 'react'
import './Counter.css'

const Counter = ({stock=0, initial=1, onAdd}) => {
 
    const [quantity, setQuantity] = useState(initial)
  
    const increment = () => {
    if(quantity < stock){
    setQuantity(quantity + 1)
    }
}

const decrement = () => {
    if(quantity > 1){
    setQuantity(quantity - 1);
    }
    
}

return (
    <div className='CounterContainer'>
        <div className='CounterSoonContainer'> 
        <button className='countBtn' onClick={decrement} disabled={quantity === initial ? true : null}>-</button>
        <h5 className='counter'>{quantity}</h5>
        <button className='countBtn' onClick={increment} disabled={quantity === stock ? true : null}>+</button>
         <FaCartPlus disabled={stock === 0 ? true : null} className='cartBtn' onClick={()=> onAdd (quantity)}/>
    </div>
    </div>
)
}

export default Counter