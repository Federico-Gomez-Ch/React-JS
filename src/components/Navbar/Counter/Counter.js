import {useState, useEffect} from 'react'

const Counter = ({show,stock,initial}) => {
 
    const [count, setCount] = useState(0)
    
useEffect (() =>{
    console.log('function callback useEffect')

    return()=> console.log('el componente va a desmontarse')
},[])
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
    <div>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>    
    </div>
)
}

export default Counter