import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({rental}) => {
    //console.log(rental)
    return (
        <li className='card'>
        < NavLink to="/Lodging">
        <img src={rental.pictures[0]} alt={"image de " + rental.title} />
        <h2>{rental.title}</h2>
        </NavLink>
        </li>
    );
};

export default Card;