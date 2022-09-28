import React from "react";
import HeroSlider from "react-slick";
import { useState } from "react";
import { NextArrow } from "./Arrows.Component";

const HeroCrousal = () => {
  const [images, setimages] = useState([]);
  const settingLG = {
    arrows: true,
    slidesToshow: 1,
    infinite: true,
    slidetoscroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <prevArrow />,
    autoplaySpeed: 1000,
    speed: 2000,
    cssEase: "lenier",
  };
  const setting = {
    arrows: true,
    slidesToshow: 1,
    infinite: true,
    speed: 500,
    slidetoscroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <prevArrow />,
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...setting}>
          <h1>Hellow my name is Aditya</h1>
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingLG}>
          {images.map((images) => {
            <div classname="w-full h-96 px-2 py-3">
              <img
                src=""
                alt="HeroBanner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>;
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCrousal;
