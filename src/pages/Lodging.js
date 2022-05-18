import React from 'react';
import { useParams } from 'react-router-dom';

const Lodging = () => {

let{id} = useParams()
    return (
        <div>
            {id} ccoucou ici le logement
        </div>
    );
};

export default Lodging;