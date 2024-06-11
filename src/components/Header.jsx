import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpeg'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='nav__logo'>
                <img src={Logo} alt="Navbar Logo" />
            </Link>
            <ul className='nav__menu'>
                <li><Link to="/profile">Ernest Archiver</Link></li>
                <li><Link to="/create">Crear publicación</Link></li>
                <li><Link to="/authors">Autores</Link></li>
                <li><Link to="/profile">cerrar sesión</Link></li>
            </ul>
            <button className='nav__toggle-btn'>
                <AiOutlineClose />
            </button>
        </div>
    </nav>
  )
}
