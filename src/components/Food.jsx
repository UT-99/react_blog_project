import React from "react";
import "./OnClick.css";
import CardCategoryWise from "./CardCategoryWise";
import "./Bollywood.css";
import "./CardCategory.css";
import CardRight from "./CardRight";

const Food = (props) => {
  const bollywoodFilms = props.item.filter((e) => e.category === "Food");
  return (
    <div>
      <h2 className="BoolywoodMovies_Heading">Food </h2>
      <hr className="RedLineDiv" />
      <br />

      <div className="bollywoodDisplyayContainer">
        <div className="mainDivForAnyCategoryContainerItemsLeft">
          {bollywoodFilms.map((ele) => (
            <CardCategoryWise
              key={ele.id}
              img={ele.img}
              title={ele.title}
              desc={ele.description.slice(0, 134)}
              cate={ele.category}
            />
          ))}
        </div>

        <div className="mainDivForAnyCategoryContainerItemsRight">
          <h2>Top Posts </h2>
          <div>
            <hr className="topmostHrRule" />
          </div>

          {bollywoodFilms.map((ele) => (
            <CardRight
              key={ele.id}
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

export default Food;
