import { NavLink } from "react-router-dom";
import asme from "../assets/asme.png";
import { HashLink } from "react-router-hash-link";
import './styles/Header.css'
import { FaHamburger } from "react-icons/fa";

import { useState } from "react";

const Header = () => {
    const[isActive,setISActive] = useState(false);
    const changeStyle = () =>{
        setISActive(!isActive);
    }
  return (
    
    <nav>
    <img src={asme} alt="thurrnr" />
      <div className="header-container">
        <ul className={`nav-list ${isActive ? 'active' : 'inactive'}`} >
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

        <button className="dropdown-btn" onClick={changeStyle}><FaHamburger /></button>
      </div>
    </nav>
  )
}

export default Header