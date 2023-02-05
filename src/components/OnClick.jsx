import React from "react";
import "./OnClick.css";
import "./Overall.css";
import { Link, useLocation } from "react-router-dom";

const OnClick = () => {
  const prop = useLocation();
  const imagesrc = prop.state.imgageUrl;
  const imagetitle = prop.state.imagetitle;
  const category = prop.state.category;

  return (
    <>
      <center>
        <div className="flex align">
          <img src={imagesrc} alt="" className="imageSizeOnCLick" />
        </div>
        <h3>{imagetitle}</h3>
        <Link to={"/" + category}>
          <button title={"Explore more" + category + " movies"}>Go back</button>
        </Link>
        <pre> </pre>
        <Link to="/">
          <button title="Click Here to go home page">Go Home</button>
        </Link>
      </center>
    </>
  );
};

export default OnClick;
