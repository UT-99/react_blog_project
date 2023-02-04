import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Hollywood from "./Hollywood";
import Technology from "./Technology";
import Fitness from "./Fitness";
import Food from "./Food";
import OnClick from "./OnClick";

const Routing = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home item = {props.array} />}></Route>
        <Route path="/bollywood" element={<Bollywood  item = {props.array}/>}></Route>
        <Route path="/hollywood" element={<Hollywood />}></Route>
        <Route path="/Technolgy" element={<Technology />}></Route>
        <Route path="/Food" element={<Food />}></Route>
        <Route path="/Fitness" element={<Fitness />}></Route>
        <Route path="/OnClickOfImage" element={<OnClick />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
