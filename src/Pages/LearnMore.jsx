import React from "react";
import "../Components/styles/LearnMore.css";
import globe from "../assets/globe.png";
import student from "../assets/student.png";
import technical from "../assets/technical.png";
import { FaExternalLinkAlt, FaGlobe, FaUserGraduate, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

const sectionsData = [
  {
    id: "professional",
    badge: "GLOBAL NETWORK",
    icon: <FaGlobe />,
    title: "PROFESSIONAL SECTIONS",
    description: "ASME Professional Sections provide local and regional engagement for practicing mechanical engineers worldwide. Members connect through leadership, continuous professional development, awards, and technical symposiums.",
    features: [
      "Geographic Networking & Industry Summits",
      "Continuing Education & Professional Engineering Certifications",
      "Honors, Fellow Nominations & Outreach Programs"
    ],
    image: globe,
    link: "https://sections.asme.org/professional-sections",
    linkText: "Explore Professional Sections"
  },
  {
    id: "student",
    badge: "COLLEGIATE CHAPTERS",
    icon: <FaUserGraduate />,
    title: "STUDENT SECTIONS",
    description: "ASME Student Sections link thousands of engineering undergraduates and researchers across global universities. Chapters elevate student learning through competitions, leadership roles, and direct mentorship from industry leaders.",
    features: [
      "Student Competitions & Global E-Fests",
      "Collegiate Leadership & Committee Roles",
      "Scholarships, Travel Grants & Student Design Challenges"
    ],
    image: student,
    link: "https://sections.asme.org/student-sections",
    linkText: "Explore Student Sections"
  },
  {
    id: "technical",
    badge: "SPECIALIZATION GROUPS",
    icon: <FaLayerGroup />,
    title: "TECHNICAL DIVISIONS",
    description: "ASME Technical Divisions enable engineers to collaborate in specific specialized disciplines — from Robotics, Aerospace, and Bioengineering to Energy Conversion, Nanotechnology, and Advanced Manufacturing.",
    features: [
      "Access to Premier Technical Journals & Conference Proceedings",
      "Specialized Research Committees & Working Groups",
      "Peer Review, Standards Development & Innovation Summits"
    ],
    image: technical,
    link: "https://www.asme.org/get-involved/groups-sections-and-technical-divisions/technical-divisions",
    linkText: "Explore Technical Divisions"
  }
];

const LearnMore = () => {
  return (
    <div className="learnmore-wrapper">
      
      {/* Intro Header */}
      <section className="learnmore-intro">
        <div className="cyber-badge">
          <span className="cyber-badge-dot"></span>
          GLOBAL ARCHITECTURE
        </div>
        <h1 className="learnmore-main-title">
          SECTIONS & <span className="gradient-text">TECHNICAL DIVISIONS</span>
        </h1>
        <p className="learnmore-subtitle">
          Discover how ASME structures its international engineering community into local professional chapters, vibrant student sections, and specialized technical divisions.
        </p>
      </section>

      {/* Sections Cards */}
      <section className="learnmore-sections-list">
        {sectionsData.map((sec, idx) => (
          <div 
            key={sec.id} 
            className={`cyber-card learnmore-card ${idx % 2 === 1 ? 'reverse-card' : ''}`}
          >
            <div className="learnmore-media">
              <img src={sec.image} alt={sec.title} className="learnmore-img" />
            </div>

            <div className="learnmore-content">
              <div className="cyber-badge">
                {sec.icon} {sec.badge}
              </div>
              <h2 className="learnmore-title">{sec.title}</h2>
              <p className="learnmore-desc">{sec.description}</p>

              <div className="learnmore-features">
                {sec.features.map((feat, i) => (
                  <div key={i} className="feat-item">
                    <FaCheckCircle className="feat-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href={sec.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn-primary"
              >
                {sec.linkText} <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default LearnMore;
