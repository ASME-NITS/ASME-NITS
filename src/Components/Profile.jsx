import React from "react";
import "./styles/Profile.css";
import {FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <img
          src={props.image}// Replace with your image URL
          alt="Profile"
        />
        <div className="prof-desc">
        <div className="profile-info">
          <h3 className="profile-name">{props.name}</h3>
          <p className="profile-description">
            {props.description}
          </p>
          
        </div>
        <div className="social-links">
            <a href="#" className="social-icon facebook">
              <FaFacebook className="icon"/>
            </a>
            <a href="#" className="social-icon instagram">
              <FaInstagram className="icon"/>
            </a>
            <a href="#" className="social-icon linkedin">
              <FaLinkedin className="icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
