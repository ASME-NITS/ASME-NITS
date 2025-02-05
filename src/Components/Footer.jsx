import React from "react";
import { Link } from "react-router-dom"; // Importing Link from React Router
import "../style/Footer.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Email Section */}
        <div className="footer-email">
          <a
            href="mailto:asme.nits@example.com?subject=Query%20from%20Website&body=Hello%20ASME%20Team,"
            className="email-button"
          >
            Email Us
          </a>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>ASME NIT Silchar</h4>
            <Link to="#">Website</Link>
            <Link to="#">Social Media</Link>
            <Link to="#">Nit Silchar</Link>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <Link to="#">Our Projects</Link>
            <Link to="#">Event</Link>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <Link to="#">Support Request</Link>
            <Link to="#">Contact</Link>
          </div>
        </div>

        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/assets/ASmeLogo.png" alt="ASME Logo" className="logo" />
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media-section">
        <div className="social-icons">
          <a href="#" target="_blank" rel="noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaFacebook className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
