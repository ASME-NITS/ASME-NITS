import './styles/Events.css';
import aerostrike from '../assets/aerostrike.png';
import etr from '../assets/ETR.png';
import bi from '../assets/BI.png';
import ec from '../assets/EC.png';
import robot from '../assets/robot.png';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const Events = () => {
  return (
    <main>
      <section className="intro">
          <h1>ASME EVENTS:</h1>
          <h2>Innovation and Engineering Excellence</h2>
          <p>Welcome to the ASME Events Section, where we bring together aspiring and professional engineers through dynamic and engaging events. Designed to challenge and inspire, our events foster a community passionate about mechanical engineering and technological advancement.
          From technical competitions to collaborative projects, each event offers a chance to apply theoretical knowledge to real-world challenges. Join us to innovate, collaborate, and excel. Explore our upcoming events and be part of the vibrant ASME community driving the future of engineering.</p>
      </section>
      <section className="events">
        <div className="eventName">
          <div className="eventDesc">
            <h2>AEROSTRIKE</h2>
            <p>Want to take flight with your creative, favorite childhood pastime DIY plane modeling skills?
              Well look no further. ASME - NJIT Silchar Student Section brings to you “AeroStrike”, in collaboration with the MES under MechActivity 10.0.
              A competition to let your creativity soar and put your aeronautical skills to the test. "AeroStrike" is a simple competition designed to test your knowledge of weight distribution and aerodynamics
            </p>
            <NavLink to="/events" className="learn">
              Learn More
              <div className="box">
                <FaArrowRight className="arrow" />
              </div>
            </NavLink>
          </div>
          <div className="eventImg">
            <img src={aerostrike} alt="dd" />
          </div>
        </div>
        <div className="eventName">
        <div className="eventImg">
            <img src={bi} alt="dd" />
          </div>
          <div className="eventDesc">
          <h2>Bridge It</h2>
          <p>
          Ever wondered how engineers design bridges? It involves overcoming challenges to create stunning structures like the Golden Gate and Millau Viaduct.
          Tecnoesis proudly presents "Bridge It" - a fusion of creativity and construction. Using materials like toothpicks, cardboard, and popsicle sticks, and secured with hot glue, participants will construct their masterpieces. Unleash your engineering skills and imagination to build the bridge to victory! 
          </p>
          <NavLink to='/events' className="learn">
              Learn More
              <div className="box">
                <FaArrowRight className="arrow" />
              </div>
            </NavLink>
          </div>
        </div>
        <div className="eventName">
          <div className="eventDesc">
          <h2>Escape The Room</h2>
          <p>
          Embark on a journey through mind-bending puzzles, captivating and engaging to the fascinating world of ingenious engineering riddles. There's a magical essence to intellectual challenges, whether your heart beats for puzzles or the marvels of engineering.
          ASME brings you "Escape the Room" at Tecnoesis, where your intellect takes the driver's seat! Join us to be part of a memorable event that promises suspense, innovation, and the joy of conquering every twist thrown your way.
          </p>
          <NavLink to="/events" className="learn">
              Learn More
              <div className="box">
                <FaArrowRight className="arrow" />
              </div>
          </NavLink>
          </div>
          <div className="eventImg">
            <img src={etr} alt="dd" />
          </div>
        </div>
        <div className="eventName">
        <div className="eventImg">
            <img src={ec} alt="dd" />
          </div>
          <div className="eventDesc">
          <h2>Effecto Cascada</h2>
          <p>
          Get ready for the Marble Maze Challenge, a thrilling test of teamwork and engineering creativity! Form a team of 4-5 members and integrate complex marble maze while building intricate domino structures. Complete for points based on speed, creativity, and execution. Top teams will advance to a grand finale, creating an impressive marble maze design showcasing their ingenuity and teamwork to become the Marble Maze Champions, with prizes awarded for outstanding performance and innovation.
          </p>
          <NavLink to="/events" className="learn">
              Learn More
              <div className="box">
                <FaArrowRight className="arrow" />
              </div>
            </NavLink>
          </div>
          
        </div>
      </section>
      <footer>
        <img src={robot} alt="" />
        <div className="content">
          <input type="text" placeholder='your e-mail'/>
          <div className="anchors-grid">
          <div className="anchors">
            <NavLink>ASME NIT SILCHAR</NavLink>
            <div className="sub-anchors">
              <NavLink className="s-anchors">
                website
              </NavLink>
              <NavLink className="s-anchors">
                social media
              </NavLink>
              <NavLink className="s-anchors">
                NIT SILCHAR
              </NavLink>
            </div>
          </div>
          <div className="anchors">
            <NavLink>About</NavLink>
            <div className="sub-anchors">
              <NavLink className="s-anchors">
                Our projects
              </NavLink>
              <NavLink className="s-anchors">
                Event
              </NavLink>
            </div>
          </div>
          <div className="anchors">
            <NavLink>Support</NavLink>
            <div className="sub-anchors">
              <NavLink className="s-anchors">
                Support request
              </NavLink>
              <NavLink className="s-anchors">
                contact
              </NavLink>
            </div>
          </div>
          </div>
        </div>
      </footer>
    </main>
    

  )
}

export default Events