import React from "react";
import "./styles/AboutUsTeam.css";

import Hrishikesh from "../assets/Hrishikesh Das.jpeg";
import Joyjeet from "../assets/Joyjeet Kalita.jpeg";
import Chiranjit from "../assets/Chiranjit Ray.jpeg";
import Nilanjana from "../assets/Nilanjana Dutta.jpeg";
import Vikash from "../assets/Vikash Sharma.jpeg";
import Pratyush from "../assets/Pratyush Kumar.jpeg";
import Deepshikha from "../assets/Deepshikha Malakar.jpeg";
import Abhishekh from "../assets/Abhishekh Kumar Gupta.jpeg";

const teamMembers = [
  { name: "Hrishikesh Das", role: "Student Chair", image: Hrishikesh },
  { name: "Joyjeet Kalita", role: "Vice Chair", image: Joyjeet },
  { name: "Chiranjit Ray", role: "Secretary", image: Chiranjit },
  { name: "Nilanjana Dutta", role: "Design Head", image: Nilanjana },
  { name: "Vikash Sharma", role: "PR Head", image: Vikash },
  { name: "Pratyush Kumar", role: "Content Head", image: Pratyush },
  { name: "Deepshikha Malakar", role: "Treasurer", image: Deepshikha },
  { name: "Abhishekh Kumar Gupta", role: "Marketing Head", image: Abhishekh }
];

const AboutUsTeam = () => {
  return (
    <div className="team-section">

      <h2 className="team-title">MEET OUR TEAM</h2>

      <div className="profile-grid">

        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>

            <img src={member.image} alt={member.name} />

            <h3>{member.name}</h3>

            <p>{member.role}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AboutUsTeam;