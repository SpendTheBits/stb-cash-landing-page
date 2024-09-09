import React from "react";
import "./style.scss";

const Loader = (props) => {
  return (
    <div
      className="loader"
      style={
        props.borderColor
          ? { border: `6px solid ${props.borderColor}` }
          : { border: "6px solid var(--primaryColor)" }
      }
    ></div>
  );
};

export default Loader;
