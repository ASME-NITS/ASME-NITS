import { NavLink } from "react-router-dom";
import asme from "../assets/asme.png";
import { HashLink } from "react-router-hash-link";
import './styles/Header.css'


const Header = () => {
  return (
    <nav>
      <div className="header-container">
      <img src={asme} alt="thurrnr" />
        <ul className="nav-list">
            <li>
                <NavLink to='/' className="nav-link">
                    Home
                </NavLink>
            </li>
        
            <li>
                <NavLink to='/events' className="nav-link">
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink to='/gallery' className="nav-link">
                    Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className="nav-link">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact' className="nav-link">
                    Contact
                </NavLink>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header