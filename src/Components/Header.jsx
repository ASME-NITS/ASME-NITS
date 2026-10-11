import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import asme from "../assets/asme.png";
import './styles/Header.css';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        
        {/* Logo Section */}
        <NavLink to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <img src={asme} alt="ASME NIT Silchar Logo" className="navbar-logo" />
          <div className="brand-text">
            <span className="brand-title">ASME</span>
            <span className="brand-subtitle">NIT SILCHAR</span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/events" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Events
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/learn-more" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Divisions
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA / Membership Button */}
        <div className="navbar-actions">
          <a
            href="https://www.asme.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta-btn"
          >
            Join ASME
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <NavLink to="/" className="mobile-nav-item" onClick={closeMobileMenu}>
            Home
          </NavLink>
          <NavLink to="/events" className="mobile-nav-item" onClick={closeMobileMenu}>
            Events
          </NavLink>
          <NavLink to="/about" className="mobile-nav-item" onClick={closeMobileMenu}>
            About Us
          </NavLink>
          <NavLink to="/learn-more" className="mobile-nav-item" onClick={closeMobileMenu}>
            Divisions
          </NavLink>
          <NavLink to="/contact" className="mobile-nav-item" onClick={closeMobileMenu}>
            Contact
          </NavLink>
          <a
            href="https://www.asme.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta-btn"
            onClick={closeMobileMenu}
          >
            Join ASME Membership
          </a>
        </div>
      </div>
      
      {/* Overlay backdrop for mobile */}
      {isMobileOpen && <div className="drawer-backdrop" onClick={closeMobileMenu} />}
    </header>
  );
};

export default Header;