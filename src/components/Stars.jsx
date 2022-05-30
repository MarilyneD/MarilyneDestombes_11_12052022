import React from 'react';

const Stars = ({nbStars}) => {
    const stars= [1,2,3,4,5];
    const full= "../img/star-red.svg";
    const empty= "../img/star-grey.svg"
    return (
        <div className='stars'>
            {stars.map((star) =><img key={star} src ={star<=nbStars ? full : empty} alt="étoiles"/> )}
        </div>
    );
};

export default Stars;