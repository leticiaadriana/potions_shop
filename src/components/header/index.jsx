import './style.css'
import {Link} from "react-router-dom"

function Header (){
    return (
        <>
        <header className="Header">
            <nav>
                <Link to="/">Página Inicial</Link>
                <Link to="/buy">Comprar</Link>
                <Link to="/about">Sobre</Link>
            </nav>
        </header>
        </>
    );
}

export default Header