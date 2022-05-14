import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Rentals from '../components/Rentals';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Banner />
            <Rentals /> 
           
        </div>
    );
};

export default Home;