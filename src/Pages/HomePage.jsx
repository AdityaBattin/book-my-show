import React from "react";
//Axios package for Making API Requests
import axios from "axios";
//Components :
import EntertainmentCardSlider from "../Component/Entertainment/Entertainment.Card.Component";
import HeroCrousal from "../Component/HeroCrousal/HeroCrousal.Component";
import PosterSlider from "../Component/PosterSlider/PosterSlider.Component";

//LayoutHOC
import DefaultlayoutHOC from "../Layout/Default.layout";
import { useState } from "react";
import { useEffect } from "react";

const HomePage = () => {
  const [recomendedMovies, setrecomendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineSteamingEvents, setonlineStreamingEvents] = useState([]);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setrecomendedMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularmovies = await axios.get("/movie/popular");
      setpremierMovies(getPopularmovies.data.results);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestupcomingMovies = async () => {
      const getupcomingMovies = await axios.get("/movie/upcoming");
      setonlineStreamingEvents(getupcomingMovies.data.results);
    };

    requestupcomingMovies();
  }, []);

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
          subtitle="List of Recomended movies"
          posters={recomendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-darkBackground2-700 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releses every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Event"
          subtitle="Lets begin here"
          posters={onlineSteamingEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultlayoutHOC(HomePage);
