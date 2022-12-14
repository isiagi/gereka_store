import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import i1 from "../../assets/images/6.jpg";
import i2 from "../../assets/images/7.jpg";
import i3 from "../../assets/images/8.jpg";
import i4 from "../../assets/images/9.jpg";
import i5 from "../../assets/images/10.jpg";
import i6 from "../../assets/images/11.jpg";

const images = [i1, i2, i3, i4, i5];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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
    <div style={{ dispaly: "flex", justifyContent: "center",flexDirection: "column", width: "100%" }}>
    <h1 style={{textAlign: "center", fontWeight: 200, padding:'20px 0'}}>Our Gallery</h1>
      <div>
        <Carousel responsive={responsive}>
          <div style={{ marginRight: "1rem" }}>
            <img src={i1} alt="" height="250px" width="100%" />
          </div>
          <div style={{ marginRight: "1rem" }}>
            <img src={i2} alt="" height="250px" width="100%" />
          </div>

          <div style={{ marginRight: "1rem" }}>
            <img src={i3} alt="" height="250px" width="100%" />
          </div>

          <div style={{ marginRight: "1rem" }}>
            <img src={i4} alt="" height="250px" width="100%" />
          </div>

          <div>
            <img src={i6} alt="" height="250px" width="100%" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
