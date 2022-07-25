import React from 'react'
import './Navbar.css'
import Button from './Button/Button'
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="logo">
                <img className='logoImg' src='images/logo.png' alt='logo'/>
            
            </div>
            <div >
                <Button  label='Cafes'/>
                <Button  label= 'Comida'/>
                <Button  label='Nosotros'/>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar