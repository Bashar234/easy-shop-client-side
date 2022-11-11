import React from "react";

import Footer from "../Component/Footer/Footer";
import CarouselMenu from "../Component/Header/Carousel";
import HomeProduct from "./HomeProduct";
const Home = () => {
  return (
    <div>
      <CarouselMenu />
      <HomeProduct />
      <Footer />
    </div>
  );
};

export default Home;
