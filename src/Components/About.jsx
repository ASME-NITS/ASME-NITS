import React from "react";
import AboutUsTeam from "./AboutUsTeam";
import { FaGraduationCap, FaLightbulb, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-wrapper">
      
      {/* Intro Header */}
      <section className="about-intro">
        <div className="cyber-badge">
          <span className="cyber-badge-dot"></span>
          ABOUT ASME NIT SILCHAR
        </div>
        <h1 className="about-main-title">
          INNOVATING FOR <span className="gradient-text">ENGINEERING EXCELLENCE</span>
        </h1>
        <p className="about-lead-text">
          ASME NIT Silchar is the official collegiate student section of the American Society of Mechanical Engineers. Established to nurture the next generation of pioneers, we bridge theoretical engineering with cutting-edge industry practices.
        </p>
      </section>

      {/* Core Pillars / Mission Grid */}
      <section className="about-pillars-grid">
        
        <div className="cyber-card pillar-card">
          <div className="pillar-icon">
            <FaLightbulb />
          </div>
          <h3>Practical Innovation</h3>
          <p>
            Hands-on technical workshops, CAD & CFD hackathons, robotic prototypes, and flight modeling sessions enabling members to turn ideas into prototypes.
          </p>
        </div>

        <div className="cyber-card pillar-card">
          <div className="pillar-icon">
            <FaGlobeAmericas />
          </div>
          <h3>Global Standards</h3>
          <p>
            Direct connection to ASME international resources, design codes, boiler and pressure vessel standards, and international engineering guidelines.
          </p>
        </div>

        <div className="cyber-card pillar-card">
          <div className="pillar-icon">
            <FaHandsHelping />
          </div>
          <h3>Leadership & Teamwork</h3>
          <p>
            Organizing institute-wide fests like Tecnoesis events and MechActivity, nurturing organizational, managerial, and collaborative teamwork skills.
          </p>
        </div>

        <div className="cyber-card pillar-card">
          <div className="pillar-icon">
            <FaGraduationCap />
          </div>
          <h3>Research & Career Growth</h3>
          <p>
            Mentorship from senior scholars, faculty advisors, and alumni working in premier mechanical, aerospace, and robotics institutions worldwide.
          </p>
        </div>

      </section>

      {/* Team Showcase */}
      <AboutUsTeam />

    </div>
  );
};

export default About;