import React from "react";

export function NextArrow(props) {
  return (
    <>
      <div
        classname={props.classname}
        // style={...props.style}
        style={{ color: "red", padding: "10px" }}
        onClick={props.onClick}
      ></div>
    </>
  );
}

export function PrevArrow(props) {
  return (
    <>
      <div
        classname={props.classname}
        // style={...props.style}
        style={{ color: "red", padding: "10px" }}
        onClick={props.onClick}
      ></div>
    </>
  );
}
