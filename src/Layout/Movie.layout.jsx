import React from "react";
import MovieNavbar from "../Component/NavBar/MovieNavBar.component";

const MovielayoutHOC =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <div>MovielayoutHOC</div>
        <div>
          <MovieNavbar />
          <Component {...props} />
        </div>
        <div>Footer</div>
      </div>
    );
  };

export default MovielayoutHOC;
