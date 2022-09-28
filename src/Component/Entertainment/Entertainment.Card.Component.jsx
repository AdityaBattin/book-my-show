import React from "react";
import { Slider } from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-30 px-2">
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="card-slider"
        />
      </div>
    </>
  );
};

// creating card slider
const EntertainmentCardSlider = () => {
  const EntertainmentImage = [];

  const settingSlider = {};
  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image) => {
          <EntertainmentCard src={image}></EntertainmentCard>;
        })}
      </Slider>
    </>
  );
};

export default EntertainmentCard;
