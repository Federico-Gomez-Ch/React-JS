import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="logo">
                <Link to= '/'>
                <img className='logoImg' src='images/logo.png' alt='logo'/>
                </Link>
            </div>
            <div>
                <Link to='/category/Cafe'><Button  label='Cafes'/></Link>
                <Link to='/category/Comida'><Button  label= 'Comida'/></Link>
                <Link to='/category/Box'><Button  label='Box'/></Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar