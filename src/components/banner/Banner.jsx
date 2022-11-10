import React from "react";
import { Link } from "react-router-dom";

import "./banner.css";

const data1 = [
  {
    id: 1,
    para: "Furniture",
    heading: "Home",
    style: "banner__item2"
  },
  {
    id: 2,
    para: "Furniture",
    heading: "Office",
    style: "banner__item"
  },
  {
    id: 2,
    para: "Furniture",
    heading: "Outdoor",
    style: "banner__item1"
  },
];

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__wrapper">
        {data1.map((item) => (
          <Link to={`/category/${item.heading}`}>
            <div className={`${item.style}`}>
              <p>{item.para}</p>
              <h2>{item.heading}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Banner;
