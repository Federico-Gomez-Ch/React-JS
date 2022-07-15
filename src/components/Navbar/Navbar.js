import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="navTitle">
                E-Comerce
            </div>
            <div>
                <button className="btnNav">Cafe</button>
                <button className="btnNav">Medialunas</button>
                <button className="btnNav">Bizcochos</button>
            </div>
        </nav>
    )
}

export default Navbar