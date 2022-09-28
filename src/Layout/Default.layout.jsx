import React from "react";
// Components

//LayoutHOC
import NavBar from "../Component/NavBar/NavBar.component";

const DefaultlayoutHOC =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        {/* <div>DefaultlayoutHOC</div> */}
        <div>
          <NavBar />
          <Component {...props} />
        </div>
        <div>Footer</div>
      </div>
    );
  };

export default DefaultlayoutHOC;
