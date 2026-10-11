import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaRobot, 
  FaCogs, 
  FaPlane, 
  FaTrophy, 
  FaUsers, 
  FaExternalLinkAlt 
} from "react-icons/fa";
import './styles/home.css';

import robot1 from '../assets/robot 1.png';
import roboHand from '../assets/Rectangle 6.png';
import greyRobo from '../assets/Rectangle 4.png';
import robot4 from '../assets/robot 4.png';
import robot3 from '../assets/robot 3.png';
import robot2 from '../assets/robot 2.png';
import rec5 from '../assets/Rectangle 5.png';

const Home = () => {
  return (
    <div className="home-wrapper">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          
          <div className="cyber-badge">
            <span className="cyber-badge-dot"></span>
            ASME STUDENT SECTION • NIT SILCHAR
          </div>

          <h1 className="hero-title">
            SETTING THE <span className="gradient-text">STANDARDS</span> IN ENGINEERING
          </h1>

          <p className="hero-description">
            Promoting the art, science, and multidisciplinary practice of mechanical engineering and allied sciences across the globe. Join the premier tech innovators, roboticists, and designers at NIT Silchar.
          </p>

          <div className="hero-cta-group">
            <NavLink to="/events" className="cyber-btn-primary">
              Explore Events <FaArrowRight />
            </NavLink>
            <NavLink to="/about" className="cyber-btn-secondary">
              Meet Our Team
            </NavLink>
          </div>

        </div>

        <div className="hero-visual">
          <div className="visual-glow-ring"></div>
          <img src={robot1} alt="ASME Cybernetic Engineering Robot" className="hero-robot-img" />
        </div>
      </section>

      {/* Stats HUD Bar */}
      <section className="stats-hud-bar">
        <div className="stat-hud-item">
          <span className="stat-hud-num gradient-text">500+</span>
          <span className="stat-hud-label">Student Members</span>
        </div>
        <div className="stat-hud-divider"></div>
        <div className="stat-hud-item">
          <span className="stat-hud-num gradient-amber">15+</span>
          <span className="stat-hud-label">Annual Competitions</span>
        </div>
        <div className="stat-hud-divider"></div>
        <div className="stat-hud-item">
          <span className="stat-hud-num gradient-text">8</span>
          <span className="stat-hud-label">Technical Divisions</span>
        </div>
        <div className="stat-hud-divider"></div>
        <div className="stat-hud-item">
          <span className="stat-hud-num gradient-amber">100%</span>
          <span className="stat-hud-label">Innovation Driven</span>
        </div>
      </section>

      {/* Robotics Showcase Section */}
      <section className="robotics-section">
        <div className="section-header">
          <div className="cyber-badge">
            <span className="cyber-badge-dot"></span>
            ROBOTICS & AUTOMATION
          </div>
          <h2 className="section-title">THE ROBOTICS COLLECTION</h2>
          <p className="section-subtitle">
            The adoption of robotics in industrial environments is growing at an unprecedented rate. Explore automation, collaborative robots (cobots), AI-powered systems, custom prototypes, and drone technologies.
          </p>
        </div>

        <div className="robotics-grid">
          
          <div className="cyber-card robotics-feature-card">
            <div className="card-icon-pill">
              <FaRobot />
            </div>
            <h3>Autonomous Systems & Cobots</h3>
            <p>
              Collaborative robotics designed to work alongside human engineers, focusing on precision path planning, inverse kinematics, and neural control.
            </p>
            <div className="card-thumb-wrapper">
              <img src={greyRobo} alt="Autonomous Cobot System" className="card-thumb" />
            </div>
          </div>

          <div className="cyber-card robotics-feature-card highlight-card">
            <div className="card-icon-pill">
              <FaCogs />
            </div>
            <h3>Industrial AI & Mech-Activity</h3>
            <p>
              Integrating sensor fusion, CAD prototyping, finite element analysis, and embedded automation for real-world mechanical systems.
            </p>
            <div className="card-thumb-wrapper">
              <img src={rec5} alt="Industrial Mechanism" className="card-thumb" />
            </div>
            <div className="card-action">
              <NavLink to="/events" className="cyber-btn-primary full-width">
                View Tech Challenges <FaArrowRight />
              </NavLink>
            </div>
          </div>

          <div className="cyber-card robotics-feature-card">
            <div className="card-icon-pill">
              <FaPlane />
            </div>
            <h3>AeroTech & Bionic Prototyping</h3>
            <p>
              Exploration of aerodynamics, weight distribution, drone telemetry, and high-precision bionic actuators developed by student teams.
            </p>
            <div className="card-thumb-wrapper">
              <img src={roboHand} alt="Bionic Actuator" className="card-thumb" />
            </div>
          </div>

        </div>
      </section>

      {/* Programs, Sections & Divisions */}
      <section className="programs-section">
        
        <div className="cyber-card program-card">
          <div className="program-media">
            <img src={robot4} alt="Sections and Divisions" />
          </div>
          <div className="program-details">
            <div className="cyber-badge">OFFICIAL GROUPS</div>
            <h3>SECTIONS & DIVISIONS</h3>
            <p>
              Members can engage with various ASME Official Groups including Professional Sections and Student Chapters led by active ASME volunteers worldwide.
            </p>
            <NavLink to="/learn-more" className="cyber-btn-secondary">
              Learn More <FaArrowRight />
            </NavLink>
          </div>
        </div>

        <div className="cyber-card program-card reverse">
          <div className="program-media">
            <img src={robot3} alt="ASME Membership" />
          </div>
          <div className="program-details">
            <div className="cyber-badge">GLOBAL COMMUNITY</div>
            <h3>BECOMING AN ASME MEMBER</h3>
            <p>
              Joining ASME is the most important connection a current or future mechanical engineer can make. Gain access to standards, journals, scholarships, and international conferences.
            </p>
            <a 
              href="https://www.asme.org/membership" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-btn-primary"
            >
              Join Official Membership <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <div className="cyber-card program-card">
          <div className="program-media">
            <img src={robot2} alt="ASME E-Fest" />
          </div>
          <div className="program-details">
            <div className="cyber-badge">STUDENT COMPETITION</div>
            <h3>ASME E-FESTS</h3>
            <p>
              Go beyond the classroom or laboratory and put engineering design principles to the test by participating in ASME engineering student competitions globally.
            </p>
            <a 
              href="https://efests.asme.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-btn-secondary"
            >
              Explore E-Fests <FaExternalLinkAlt />
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;
