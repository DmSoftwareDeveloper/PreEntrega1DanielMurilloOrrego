import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => 
{
    return (
        <nav>
            <h2 className="e-commerce">E-commerce</h2>
            <h3 className="slogan">Tienda online de videojuegos</h3>
            <div>
                <button>Consolas</button>
                <button>Dispositivos</button>
                <button>Accesorios</button>
                <button>Juegos</button>
                <button>¿Y algo más?</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar