import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Hijama from './Hijama/Hijama';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Hijama></Hijama>
        </div>
    );
};

export default Home;