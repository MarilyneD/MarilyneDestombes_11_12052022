import React from 'react';

const Stars = () => {
    const stars= [1,2,3,4,5];
    return (
        <div>
            {stars.map((star) =><img key={star} src ="../img/star-red.svg" /> )}
        </div>
    );
};

export default Stars;