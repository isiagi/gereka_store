import React from "react";
import Banner from "../components/banner/Banner";
import Gallery from "../components/gallery/Gallery";
import Hero from "../components/hero/Hero";
import Show from "../components/show/index.jsx";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <Show />
      <Gallery />
    </div>
  );
};

export default HomePage;
