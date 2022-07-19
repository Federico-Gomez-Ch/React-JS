import React from 'react'
import './Navbar.css'
import Button from './Button/Button'
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="navTitle">
                E-Comerce
            </div>
            <div>
                {/* {React.createElement(Button, {label: 'prueba'})} */}
                <Button label='cafe' color='red' handleClick={()=> console.log ('Cafe')}>Cafe</Button>
                <Button label='medialunas' color= 'blue' handleClick ={()=> console.log ('Medialunas')}> Medialunas </Button>
                <Button label='Bizcochos' color='green' handleClick ={()=> console.log ('Bizcochos')}>Bizcochos</Button>

            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar