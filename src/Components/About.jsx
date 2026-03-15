import React from "react";
import AboutUsTeam from "./AboutUsTeam";

const About = () => {
  return (
    <div>

      <section className="about-us">

        <h2>ABOUT US</h2>

        <p>
          ASME NIT Silchar is the student chapter of the American Society of 
          Mechanical Engineers. The chapter promotes innovation, collaboration 
          and engineering excellence among students through workshops, design 
          competitions, seminars and technical projects.
        </p>

        <p>
          These activities help students gain practical knowledge, develop 
          teamwork and leadership skills, and prepare themselves for real-world 
          engineering challenges.
        </p>

      </section>

      <AboutUsTeam />

    </div>
  );
};

export default About;