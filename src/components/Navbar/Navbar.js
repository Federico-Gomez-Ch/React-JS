import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Title">
                E-Comerce
            </div>
            <div>
                <button className="btn">Cafe</button>
                <button className="btn">Medialunas</button>
                <button className="btn">Bizcochos</button>
            </div>
        </nav>
    )
}

export default Navbar