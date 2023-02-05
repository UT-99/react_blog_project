import React from "react";
import { Link } from "react-router-dom";
import "./OnClick.css";
import CardCategoryWise from "./CardCategoryWise";
import "./Bollywood.css";
import './CardCategory.css'
import CardRight from "./CardRight";

const Fitness = (props) => {
  const bollywoodFilms = props.item.filter((e) => e.category === "Fitness");
  return (
    <div>
      <h2 className="BoolywoodMovies_Heading">Fitness </h2>
      <hr className="RedLineDiv" />
      <br />

      <div className="bollywoodDisplyayContainer">
        <div className="mainDivForAnyCategoryContainerItemsLeft">
          {bollywoodFilms.map((ele) => (
            <CardCategoryWise
              img={ele.img}
              title={ele.title}
              desc={ele.description.slice(0, 134)}
              cate={ele.category}
            />
          ))}
        </div>

      

        <div className="mainDivForAnyCategoryContainerItemsRight">
          <h2>Top Posts </h2>
          <div><hr className="topmostHrRule" /></div>
          
          {bollywoodFilms.map((ele) => (
            <CardRight
              img={ele.img}
              title={ele.title}
              desc={ele.description.slice(0, 134)}
              cate={ele.category}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Fitness;
