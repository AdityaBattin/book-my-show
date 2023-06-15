import React from "react";
import MovielayoutHOC from "../Layout/Movie.layout";

//importing axios
import axios from "axios";

import PosterSlider from "../Component/PosterSlider/PosterSlider.Component";

//using the parameter in the given route
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

//importing movie context
import { MovieContext } from "../context/MovieContext";

//for slider
import Slider from "react-slick";

//for icons
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

const MoviePage = () => {
  const { id } = useParams();

  //using the data from movie context
  const { movie, setMovie } = useContext(MovieContext);
  //now you can use this here ever you want

  const [cast, setCast] = useState([]);
  const [SimilarMovies, setSimilarMovies] = useState([]);
  const [RecomendedMovies, setRecomendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };

    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.cast);
    };

    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecomendedMovies = async () => {
      const getRecomendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecomendedMovies(getRecomendedMovies.data.cast);
    };

    requestRecomendedMovies();
  }, [id]);

  const settigsCast = {};
  const settings = {};

  return (
    <>
      {/* <MovieHeroComponent></MovieHeroComponent> */}
      <div className="my-12 conatainer py-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the Movie</h1>
          <p>{movie.overview}</p>
          <div className="my-8">
            <hr />
          </div>

          <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-3">
              Applicable Offers
            </h2>
            <div className="flex flex-col gap-3 lg:flex-row ">
              <div className="flex items-center gap-2 bg-yellow-100 p-3 border-yellow-400 border-2 border-dashed rounded-md">
                <div className="w-10 h-10">
                  <FaCcVisa className="w-full h-full"></FaCcVisa>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-4 ">
                    Visa Steam Offer
                  </h3>
                  <p className="">50% off up to 150 INR on BookMyShow Steam</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 p-3 border-yellow-400 border-2 border-dashed rounded-md">
                <div className="w-10 h-10">
                  <FaCcApplePay className="w-full h-full"></FaCcApplePay>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-4 ">Film Pass</h3>
                  <p className="">50% off up to 150 INR on BookMyShow Steam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <hr />
          </div>

          {/* Cast and Crew Slider  */}

          <div className="my-8">
            <hr />
          </div>

          {/* recommnded movies slider  */}
          <div className="my-8">
            <PosterSlider
              config={settings}
              title="Recomended Movies"
              posters={RecomendedMovies}
              isDark={false}
            ></PosterSlider>
          </div>

          <div className="my-8">
            <hr />
          </div>

          {/* recomended movies slider  */}
        </div>
      </div>
    </>
  );
};

export default MovielayoutHOC(MoviePage);
