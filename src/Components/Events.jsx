import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaCalendarAlt, 
  FaUsers, 
  FaAward, 
  FaTools,
  FaCheckCircle 
} from "react-icons/fa";
import './styles/Events.css';

import aerostrike from '../assets/aerostrike.png';
import etr from '../assets/ETR.png';
import bi from '../assets/BI.png';
import ec from '../assets/EC.png';

const eventsData = [
  {
    id: "aerostrike",
    title: "AEROSTRIKE",
    badge: "MechActivity 10.0",
    category: "Aerodynamics & Flight Modeling",
    image: aerostrike,
    description: "Want to take flight with creative aircraft design? ASME NIT Silchar brings you AeroStrike in collaboration with MES under MechActivity 10.0. A high-octane competition to test your knowledge of glide ratios, weight distribution, and aerodynamics.",
    highlights: ["DIY Glider Prototyping", "Flight Stability & Distance Tests", "Aerodynamic Design Review"],
    teamSize: "2 - 3 Members"
  },
  {
    id: "bridge-it",
    title: "BRIDGE IT",
    badge: "Tecnoesis Flagship",
    category: "Civil & Structural Engineering",
    image: bi,
    description: "Ever wondered how engineers craft record-breaking bridges like the Golden Gate and Millau Viaduct? Tecnoesis proudly presents Bridge It — a fusion of structural simulation and physical construction using truss engineering to build the ultimate bridge to victory.",
    highlights: ["Truss Structure Optimization", "Maximum Load Bearing Test", "Design Aesthetics & Precision"],
    teamSize: "2 - 4 Members"
  },
  {
    id: "escape-room",
    title: "ESCAPE THE ROOM",
    badge: "Tecnoesis Challenge",
    category: "Logic & Engineering Puzzles",
    image: etr,
    description: "Embark on an adrenaline-fueled journey through mind-bending puzzles and ingenious mechanical riddles. ASME brings you Escape the Room at Tecnoesis, where intellect and team problem-solving take the driver's seat through high-stakes engineering twists.",
    highlights: ["Cipher & Mechanism Decoding", "Multi-Stage Circuit Puzzles", "Timed Team Escape Run"],
    teamSize: "3 - 5 Members"
  },
  {
    id: "effecto-cascada",
    title: "EFFECTO CASCADA",
    badge: "Kinetic Domino Challenge",
    category: "Marble Maze & Chain Reaction",
    image: ec,
    description: "A thrilling test of mechanical teamwork and chain-reaction ingenuity. Integrate complex marble mazes with intricate domino cascades and kinetic triggers. Teams compete on sequence duration, creative mechanics, and flawless execution.",
    highlights: ["Multi-Level Marble Tracks", "Kinetic Energy Transfer Triggers", "Grand Finale Exhibition"],
    teamSize: "4 - 5 Members"
  }
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="events-wrapper">
      
      {/* Page Header */}
      <section className="events-intro">
        <div className="cyber-badge">
          <span className="cyber-badge-dot"></span>
          INNOVATION & COMPETITIONS
        </div>
        <h1 className="events-main-title">
          FLAGSHIP <span className="gradient-text">ASME EVENTS</span>
        </h1>
        <p className="events-subtitle">
          Where theoretical concepts transform into functional prototypes. Explore annual student competitions, engineering hackathons, and design challenges hosted by ASME NIT Silchar.
        </p>
      </section>

      {/* Events List */}
      <section className="events-grid">
        {eventsData.map((event, idx) => (
          <div 
            key={event.id} 
            className={`cyber-card event-card ${idx % 2 === 1 ? 'reverse-card' : ''}`}
          >
            <div className="event-media">
              <img src={event.image} alt={event.title} className="event-img" />
              <div className="event-badge-overlay">{event.badge}</div>
            </div>

            <div className="event-info">
              <span className="event-category-tag">{event.category}</span>
              <h2 className="event-title">{event.title}</h2>
              <p className="event-desc">{event.description}</p>

              <div className="event-meta-specs">
                <div className="spec-item">
                  <FaUsers className="spec-icon" />
                  <span>Team: {event.teamSize}</span>
                </div>
                <div className="spec-item">
                  <FaTrophy className="spec-icon" />
                  <span>Certificates & Prizes</span>
                </div>
              </div>

              <div className="event-highlights">
                {event.highlights.map((h, i) => (
                  <span key={i} className="highlight-pill">
                    <FaCheckCircle className="check-icon" /> {h}
                  </span>
                ))}
              </div>

              <div className="event-card-actions">
                <NavLink to="/contact" className="cyber-btn-primary">
                  Participate / Inquire <FaArrowRight />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA Banner */}
      <section className="cyber-card events-cta-banner">
        <div className="cta-banner-content">
          <div className="cyber-badge">HOST AN EVENT</div>
          <h3>Have an idea for a mechanical engineering challenge?</h3>
          <p>
            Partner with ASME NIT Silchar to sponsor a competition, organize an expert workshop, or launch an industrial hackathon.
          </p>
        </div>
        <NavLink to="/contact" className="cyber-btn-secondary">
          Contact Event Team <FaArrowRight />
        </NavLink>
      </section>

    </div>
  );
};

export default Events;