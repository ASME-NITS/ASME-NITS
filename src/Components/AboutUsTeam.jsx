import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../style/AboutUsTeam.css"; // Custom CSS file for styling

// Importing Images
import Photo1 from "../assets/ladiesImage.png";
import BlurredImage from "../assets/BlurredImage.png";
import RobotImage from "../assets/Robot.png";

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

// Carousel (Photo Section)
const CarouselSection = () => {
  return (
    <section className="carousel-section">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1000, // Automatic slide change every 3 seconds
          disableOnInteraction: false, // Keep autoplay active after manual interaction
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img src={Photo1} alt="Photo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BlurredImage} alt="Photo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RobotImage} alt="Photo 3" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>

      <div className="slider-controler">
        <div className="swiper-button-prev">
          <ArrowLeft size={20} />
        </div>
        <div className="swiper-button-next">
          <ArrowRight size={20} />
        </div>
      </div>
    </section>
  );
};

// Main Component
const AboutUsTeam = () => {
  return (
    <div>
      <AboutUs />
      <CarouselSection />
    </div>
  );
};

export default AboutUsTeam;

