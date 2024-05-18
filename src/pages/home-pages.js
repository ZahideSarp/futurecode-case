import React from "react";
import Spacer from "../components/common/spacer";
import CarouselPage from "../components/home-page/carousel-page";
import About from "../components/home-page/about";

const HomePages = () => {
  return (
    <>
      <Spacer height={110} />
      <CarouselPage />
      <Spacer height={30} />
      <About />
      <Spacer height={30} />
    </>
  );
};

export default HomePages;
