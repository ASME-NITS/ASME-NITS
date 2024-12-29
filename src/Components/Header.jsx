import { NavLink } from "react-router-dom";
import asme from "../assets/asme.png";
import { HashLink } from "react-router-hash-link";
import './styles/Header.css'

<img src={asme} alt="thurrnr" />
const Header = () => {
  return (
    <div className="header-container">
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
  )
}

export default Header