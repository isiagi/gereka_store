import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/6.jpg";


 import "./slide.css"
const thums = [img1, img2];

const DetailSlider = () => {
  return (
    <Carousel
      showThumbs={true}
      autoPlay={false}
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
      className="detail__slider"
    >
      <div className="hero1__one">
        
      </div>

      <div className="hero__two">
        <div className="hero__text">
          <h3>Furniture</h3>
          <h2>Superior Living</h2>
          <button className="hero__button">Make An Appointment</button>
        </div>
      </div>
    </Carousel>
  )
}

export default DetailSlider