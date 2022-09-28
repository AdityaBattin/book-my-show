import React from "react";
//Components :
import EntertainmentCardSlider from "../Component/Entertainment/Entertainment.Card.Component";
import HeroCrousal from "../Component/HeroCrousal/HeroCrousal.Component";
import PosterSlider from "../Component/PosterSlider/PosterSlider.Component";

//LayoutHOC
import DefaultlayoutHOC from "../Layout/Default.layout";
import { useState } from "react";

const HomePage = () => {
  const [recomendedMovies, setrecomendedMocies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineSteamingEvents, setonlineStreamingEvents] = useState([]);
  return (
    <>
      <HeroCrousal />
      <div className="constainer mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recomended Movies"
          subject="List of Recomended movies"
          posters={recomendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bookmyshow.com/explore/stream-movies-bms-premier"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subject="Brand new releses every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Event"
          subject=""
          posters={onlineSteamingEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultlayoutHOC(HomePage);
