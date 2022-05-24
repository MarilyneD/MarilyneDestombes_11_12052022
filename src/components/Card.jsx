import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ rentalprops }) => {
  return (
    <li className="card">
      <NavLink to={"/Lodging/" + rentalprops.id} >
        <img src={rentalprops.pictures[0]} alt={"image de " + rentalprops.title} />
        <h2>{rentalprops.title}</h2>
      </NavLink>
    </li>
  );
};

export default Card;
