import React from "react";

import "./Home.css";
import Card from "./Card";

const Home = (props) => {
  return (
    <>
      <div className="home_first-flex">
        <div className="left_flex_div">
          <img
            src="https://images.unsplash.com/photo-1675084184839-bb084eadd9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            style={{ width: "100%", height: "inherit" }}
            className="borderRaduis"
          />
        </div>
        <div className="right-flex_div">
          <img
            src="https://images.unsplash.com/photo-1674856320941-7e442d7c4799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="borderRaduis"
          />

          <img
            src="https://images.unsplash.com/photo-1674500021669-27da4b40772a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            srcset=""
            className="borderRaduis"
          />
        </div>
      </div>

      <br />

      <h2 className="theLatest">The Latest</h2>
      <hr className="hrLine" />
      <br />

      <div className="flextwo">
        <div className="flexTwoItmes">
          {props.item
            .filter((e) => e.category === "bollywood")
            .map((e) => (
              <Card url={e.img} desc={e.description} title={e.title} />
            ))}
        </div>

        <div className="flexTwoItmes">
          {props.item
            .filter((e) => e.category === "technology")
            .map((e) => (
              <Card url={e.img} desc={e.description} title={e.title} />
            ))}
        </div>

        <div className="flexTwoItmes">
          {props.item
            .filter((e) => e.category === "food")
            .map((e) => (
              <Card url={e.img} desc={e.description} title={e.title} />
            ))}
        </div>
      </div>

      <h2 className="theLatest"> Latest Articles</h2>

    </>
  );
};

export default Home;
