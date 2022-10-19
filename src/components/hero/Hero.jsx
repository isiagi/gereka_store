import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/6.jpg";

const thums = [img1, img2];

import "./hero.css";

const Hero = () => {
  return (
    <Carousel
      showThumbs={true}
      autoPlay={true}
      infiniteLoop={true}
      renderThumbs={() =>
        thums.map((thumbnail, index) => (
          <img
            src={thumbnail}
            alt="heyy"
            key={index}
            width="100px"
            height="100px"
          />
        ))
      }
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
