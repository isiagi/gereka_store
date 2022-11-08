import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/6.jpg";

import "./slide.css";
const thums = [img1, img2];

const DetailSlider = ({ show }) => {
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
      {/* <div
        style={{
          height: "80vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${show})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          backgroundPosition: "center",
        }}
      ></div> */}

      <img className="img-slider" src={show} alt='pic' />
      <img src={show} alt='pic' />

      {/* <div className="hero__two">
        <div className="hero__text">
          <h3>Furniture</h3>
          <h2>Superior Living</h2>
          <button className="hero__button">Make An Appointment</button>
        </div>
      </div> */}
    </Carousel>
  );
};

export default DetailSlider;
