import React from "react";
import "./styles/AboutUsTeam.css";
import ProfileCard from "./Profile.jsx";
import profileimg from '../assets/profilepic.png'
// Sample data for team members
const teamMembers = [
  {
    name: "John Doe",
    description: "Mechanical Engineer with a passion for robotics.",
    image: profileimg
  },
  {
    name: "Jane Smith",
    description: "Expert in thermal systems and fluid dynamics.",
    image: profileimg
  },
  {
    name: "Alice Johnson",
    description: "Specialist in CAD design and manufacturing.",
    image: profileimg
  },
  {
    name: "Bob Brown",
    description: "Loves working on automotive engineering projects.",
    image: profileimg
  }
];

// About Us Component
const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>ABOUT US</h2>
      <p>
        ASME NIT Silchar is a vibrant student chapter of the American Society of
        Mechanical Engineers, dedicated to fostering a community of innovative
        and passionate engineers. Our mission is to provide students with
        opportunities for professional development, technical skill
        enhancement, and networking through a variety of events, workshops, and
        competitions. Join us and be part of a dynamic organization that drives
        excellence and innovation at NIT Silchar.
      </p>
    </section>
  );
};

// Main Component
const About = () => {
  return (
    <div>
      <AboutUs />
      <div className="profile-grid">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} name={member.name} description={member.description} image={member.image} />
        ))}
      </div>
    </div>
  );
};

export default About;
