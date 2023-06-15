import React from "react";
import { Link } from "react-router-dom";
const Poster = (props) => {
  return (
    <Link
      to={`/movie/${props.id}`}
      className="flex items-center justify-center "
    >
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-60">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="poster"
            className="w-full h-full rounded-md"
          />
        </div>
        <h3
          className={`text-md font-bold  ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

export default Poster;