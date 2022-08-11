import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="logo">
                <Link to= '/'>
                <img className='logoimg' src='images/logo.png' alt='logo'/>
                </Link>
            </div>
            <div className='secciones'>
                <NavLink to='/category/Cafe' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><Button  label='Cafes'/></NavLink>
                <NavLink to='/category/Comida'className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><Button  label= 'Comida'/></NavLink>
                <NavLink to='/category/Box'className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><Button  label='Box'/></NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar