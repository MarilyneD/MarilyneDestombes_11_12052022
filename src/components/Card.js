import React from 'react';

const Card = ({rental}) => {
    
    return (
        <li className='card'><img src={rental.pictures[0]} alt={"image de " + rental.title} />
        <h2>{rental.title}</h2>
        </li>
    );
};

export default Card;