import React from "react";
import './styles/Events.css';
import robot from '../assets/ASME LOGO wHITE 2.png';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
            <img src={robot} alt="" />
            <div className="content">
              <input type="text" placeholder='your e-mail'/>
              <div className="anchors-grid">
              <div className="anchors">
                <NavLink>ASME NIT SILCHAR</NavLink>
                <div className="sub-anchors">
                  <NavLink className="s-anchors">
                    website
                  </NavLink>
                  <NavLink className="s-anchors">
                    social media
                  </NavLink>
                  <NavLink className="s-anchors">
                    NIT SILCHAR
                  </NavLink>
                </div>
              </div>
              <div className="anchors">
                <NavLink>About</NavLink>
                <div className="sub-anchors">
                  <NavLink className="s-anchors">
                    Our projects
                  </NavLink>
                  <NavLink className="s-anchors">
                    Event
                  </NavLink>
                </div>
              </div>
              <div className="anchors">
                <NavLink>Support</NavLink>
                <div className="sub-anchors">
                  <NavLink className="s-anchors">
                    Support request
                  </NavLink>
                  <NavLink className="s-anchors">
                    contact
                  </NavLink>
                </div>
              </div>
              </div>
            </div>
          </footer>
  );
};

export default Footer;
