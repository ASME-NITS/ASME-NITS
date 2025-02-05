import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './styles/home.css'
import robot1 from '../assets/robot 1.png';
import roboHand from '../assets/Rectangle 6.png'
import greyRobo from '../assets/Rectangle 4.png'
import robot4 from '../assets/robot 4.png'
import robot3 from '../assets/robot 3.png'
import robot2 from '../assets/robot 2.png'
import rec5 from '../assets/Rectangle 5.png'
import robot from '../assets/robot.png';
import Footer from './Footer.jsx';
const Home = () => {
  return (
    <main>
        <section className="intro">
        <div className="content">
          <h1>SETTING THE STANDARDS</h1>
          <h2>AMERICAN SOCIETY OF MECHANICAL ENGINEERING</h2>
          <p>PROMOTES THE ART,SCIENCE AND PRACTICE OF MULTIDISCIPLINARY ENGINEERING AND ALLIED SCIENCES AROUND THE GLOBE</p>
          <NavLink to="/events" className="learn">
            Learn More
            <div className="box">
              <FaArrowRight className="arrow" />
            </div>
        </NavLink>
      </div>
        <div className="intro-image">
          <img src={robot1} alt="" />
        </div>
      </section>
      <section className="robotics">
        <div className="para">
            <h2>Robotics & AI Workshops</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus iste, dolor amet veritatis et distinctio dignissimos necessitatibus odit, vel earum sapiente quo animi fugit quis. Mollitia exercitationem doloribus nemo?</p>
            <NavLink to="/events" className="learn">
                Learn More
                <div className="box">
                  <FaArrowRight className="arrow" />
                </div>
            </NavLink>
        </div>
        <div className="img-btn">
            <img src={greyRobo} alt="" />
            <button className="btn-events">
            <NavLink to="/events">
                EVENTS
            </NavLink>
            </button>
            <img src={rec5} alt="" />
        </div>
        <div className="r-image">
            <img src={roboHand} alt="" />
        </div>
        
        
      </section>
      <section className="last-parts">
      <div className='paragraph1'>
          <img src={robot4} alt="" /> 
          <div className="content">
            <h2>SECTIONS AND DIVISIONS</h2>
            <p>MEMBERS CAN ENGAGE WITH VARIOUS ASME OFFICIAL GROUPS (SECTIONS & TECHNICAL DIVISION). OFFICIAL GROUPS ARE LED BY ASME VOLUNTEERS </p>
            <NavLink to="/events" className="learn">
                Learn More
                <div className="box">
                  <FaArrowRight className="arrow" />
                </div>
            </NavLink>
          </div>
          </div>
        <div className='paragraph2'>
          <div className="content">
              <h2>BECOMING AN ASME MEMBER</h2>
              <p>JOINING ASME IS THE MOST IMPORTANT CONNECTION A CURRENT OR FUTURE MECHANICAL ENGINEER CAN MAKE</p>
              <NavLink to="/events" className="learn">
                Learn More
                <div className="box">
                  <FaArrowRight className="arrow" />
                </div>
            </NavLink>
            </div>
            <img src={robot3} alt="" />
        </div>
        <div className='paragraph3'>
          <img src={robot2} alt="" /> 
          <div className="content">
            <h2>ASME E FEST</h2>
            <p>GO BEYOND THE CLASSROOM OR LABORATORY AND PUT ENGINEERING DESIGN PRINCIPLES TO THE TEST BY APPLYING THEM IN ASME STUDENT COMPETITIONS (ENTER AS AN INDIVIDUAL OR A TEAM)</p>
            <NavLink to="/events" className="learn">
                Learn More
                <div className="box">
                  <FaArrowRight className="arrow" />
                </div>
            </NavLink>
          </div>
          
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default Home
