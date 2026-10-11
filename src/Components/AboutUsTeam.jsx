import React from "react";
import "./styles/AboutUsTeam.css";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import Hrishikesh from "../assets/Hrishikesh Das.jpeg";
import Joyjeet from "../assets/Joyjeet Kalita.jpeg";
import Chiranjit from "../assets/Chiranjit Ray.jpeg";
import Nilanjana from "../assets/Nilanjana Dutta.jpeg";
import Vikash from "../assets/Vikash Sharma.jpeg";
import Pratyush from "../assets/Pratyush Kumar.jpeg";
import Deepshikha from "../assets/Deepshikha Malakar.jpeg";
import Abhishekh from "../assets/Abhishekh Kumar Gupta.jpeg";

const teamMembers = [
  { name: "Hrishikesh Das", role: "Student Chair", image: Hrishikesh, tag: "Leadership" },
  { name: "Joyjeet Kalita", role: "Vice Chair", image: Joyjeet, tag: "Leadership" },
  { name: "Chiranjit Ray", role: "Secretary", image: Chiranjit, tag: "Operations" },
  { name: "Nilanjana Dutta", role: "Design Head", image: Nilanjana, tag: "Creative" },
  { name: "Vikash Sharma", role: "PR Head", image: Vikash, tag: "Public Relations" },
  { name: "Pratyush Kumar", role: "Content Head", image: Pratyush, tag: "Media" },
  { name: "Deepshikha Malakar", role: "Treasurer", image: Deepshikha, tag: "Finance" },
  { name: "Abhishekh Kumar Gupta", role: "Marketing Head", image: Abhishekh, tag: "Outreach" }
];

const AboutUsTeam = () => {
  return (
    <section className="team-section">
      <div className="section-header">
        <div className="cyber-badge">
          <span className="cyber-badge-dot"></span>
          EXECUTIVE BOARD
        </div>
        <h2 className="team-title">MEET THE LEADERSHIP</h2>
        <p className="team-subtitle">
          Dedicated engineers, designers, and organizers spearheading the vision of ASME NIT Silchar.
        </p>
      </div>

      <div className="profile-grid">
        {teamMembers.map((member, index) => (
          <div className="cyber-card team-card" key={index}>
            <div className="avatar-wrapper">
              <div className="avatar-glow-ring"></div>
              <img src={member.image} alt={member.name} className="avatar-img" />
              <span className="role-tag">{member.tag}</span>
            </div>

            <div className="member-meta">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>

            <div className="member-socials">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="member-social-btn"
                aria-label={`${member.name} LinkedIn`}
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="mailto:contact@asmenits.org" 
                className="member-social-btn"
                aria-label={`Email ${member.name}`}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsTeam;