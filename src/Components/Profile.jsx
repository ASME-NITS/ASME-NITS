import React from "react";
import "../style/Profile.css";
import LadiesImage from "../assets/ladiesImage.png";
import {FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <img
          src={LadiesImage} // Replace with your image URL
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h3 className="profile-name">ALIZA</h3>
          <p className="profile-description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum."
          </p>
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
