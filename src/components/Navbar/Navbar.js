import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="logo">
                <Link to= '/'>
                <img className='logoImg' src='images/logo.png' alt='logo'/>
                </Link>
            </div>
            <div className='secciones'>
                <NavLink to='/category/Cafe' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CAFÉ</NavLink>
                <NavLink to='/category/Comida'className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>COMIDA</NavLink>
                <NavLink to='/category/Box'className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>BOX</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar