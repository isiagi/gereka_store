import React from "react";

import "./banner.css";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__wrapper">
        <div className="banner__item">
          <p>Furniture</p>
          <h2>Home</h2>
        </div>
        <div className="banner__item">
          <p>Furniture</p>
          <h2>Office</h2>
        </div>
        <div className="banner__item">
          <p>Furniture</p>
          <h2>Outdoor</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
