import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ASME LOGO wHITE 2.png";
import "./styles/Footer.css";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaArrowRight, 
  FaCheckCircle 
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-glow-bar" />
      <div className="footer-container">
        
        {/* Brand & Newsletter Column */}
        <div className="footer-brand-col">
          <div className="footer-brand">
            <img src={logo} alt="ASME NIT Silchar Logo" className="footer-logo" />
            <div className="footer-brand-info">
              <h3>ASME NIT SILCHAR</h3>
              <p>American Society of Mechanical Engineers Student Section</p>
            </div>
          </div>
          <p className="footer-description">
            Promoting the art, science, and practice of multidisciplinary engineering and allied sciences around the globe from NIT Silchar.
          </p>

          {/* Newsletter Form */}
          <form className="footer-newsletter" onSubmit={handleSubscribe}>
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email for updates..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <FaArrowRight />
              </button>
            </div>
            {subscribed && (
              <p className="newsletter-success">
                <FaCheckCircle /> Thank you for subscribing to ASME NITS!
              </p>
            )}
          </form>
        </div>

        {/* Links Navigation Grid */}
        <div className="footer-links-grid">
          
          <div className="footer-link-group">
            <h4>EXPLORE</h4>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events & Competitions</NavLink>
            <NavLink to="/about">About Us & Team</NavLink>
            <NavLink to="/learn-more">Sections & Divisions</NavLink>
            <NavLink to="/contact">Get in Touch</NavLink>
          </div>

          <div className="footer-link-group">
            <h4>COMMUNITY</h4>
            <a href="https://www.asme.org" target="_blank" rel="noopener noreferrer">
              ASME Global
            </a>
            <a href="https://efests.asme.org" target="_blank" rel="noopener noreferrer">
              ASME E-Fests
            </a>
            <a href="http://www.nits.ac.in" target="_blank" rel="noopener noreferrer">
              NIT Silchar Portal
            </a>
            <a href="https://www.asme.org/membership" target="_blank" rel="noopener noreferrer">
              Membership Portal
            </a>
          </div>

          <div className="footer-link-group">
            <h4>CONNECT</h4>
            <p className="footer-address">
              National Institute of Technology Silchar,<br />
              Cachar, Assam 788010, India
            </p>
            <div className="footer-socials">
              <a 
                href="https://facebook.com/asmenits" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn facebook" 
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn instagram" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn linkedin" 
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 ASME Student Section, NIT Silchar. All rights reserved.</p>
        <p className="footer-credit">Engineered for Innovation & Excellence</p>
      </div>
    </footer>
  );
};

export default Footer;
