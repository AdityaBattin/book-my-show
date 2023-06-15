import React from "react";
//Movie Context
import { useState, createContext } from "react";

export const MovieContext = createContext();

const MovieProvier = ({ children }) => {
  const [movie, setMovie] = useState({
    //each and every movie we have will have these fields
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvier;
