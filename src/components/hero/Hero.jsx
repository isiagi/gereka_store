import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./hero.css";

const Hero = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      <div className="hero__one">
        <div className="hero__text">
          <h3>Furniture</h3>
          <h2>Better Interior</h2>
          <button className="hero__button">Make An Appointment</button>
        </div>
      </div>

      <div className="hero__two">
        <div className="hero__text">
          <h3>Furniture</h3>
          <h2>Superior Living</h2>
          <button className="hero__button">Make An Appointment</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
