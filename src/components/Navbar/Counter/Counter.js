import {useState, useEffect} from 'react'
import './Counter.css'

const Counter = ({show,stock,initial,onAdd}) => {
 
    const [count, setCount] = useState(0)
    
useEffect (() =>{
    console.log('function callback useEffect')

    return()=> console.log('el componente va a desmontarse')
},[show])

const decrement = () => {
   /*  state[1](state[0] - 1) */
   if(count > initial){
    setCount(count - 1);
   }
   
}

const increment = () => {
   /*  state[1](state[0] + 1) */
   if(count < stock){
    setCount(count + 1)
   }
}
console.log('va a renderizar')
return (
    <div className='CounterContainer'>
        <div className='CounterSoonContainer'>
        <button disabled={count === initial} className='countBtn' onClick={decrement}> - </button>
        <p>{count}</p>
        <button disabled={count === stock}  className='countBtn'onClick={increment}> + </button>
       <div>
        <button disabled={stock === 0 ? true : null} className='cartBtn' onClick={()=> onAdd (count)}>Agregar al carrito</button>    
       </div>
    </div>
    </div>
)
}

export default Counter