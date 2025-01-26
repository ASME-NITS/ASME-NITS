import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './styles/home.css'
import robot1 from '../assets/robot 1.png';
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
      <section className="event-slider">
        <h1>UPCOMING EVENTS</h1>
      </section>
    </main>
  )
}

export default Home
