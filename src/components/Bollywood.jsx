import React from "react";
import { Link } from "react-router-dom";
import './OnClick.css'

const Bollywood = (props) => {

  const bollywoodFilms = props.item.filter( e => e.category === "Bollywood")
  return (
    <div>
      Bollywood{" "}
      {bollywoodFilms.map((e) => (
        <div className='flex'>
          <Link to="/OnClickOfImage"  state={{src :e.img}}>{e.id }   { <img src={e.img}  ></img>}</Link>
          
        </div>
      ))}
    </div>
  );
};

export default Bollywood;
