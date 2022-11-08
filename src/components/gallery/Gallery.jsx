import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import i1 from "../../assets/images/6.jpg";
import i2 from "../../assets/images/7.jpg";
import i3 from "../../assets/images/8.jpg";
import i4 from "../../assets/images/9.jpg";
import i5 from "../../assets/images/10.jpg";

const images = [i1, i2, i3, i4, i5];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Gallery() {
  return (
    <div style={{ dispaly: "flex", justifyContent: "center", width: "100%" }}>
      <div>
        <Carousel responsive={responsive}>
          <img src={i1} alt="" height="300px" width="100%" />

          <img src={i2} alt="" height="300px" width="100%"/>

          <img src={i3} alt="" height="300px" width="100%"/>

          <img src={i3} alt="" height="300px" width="100%"/>
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
