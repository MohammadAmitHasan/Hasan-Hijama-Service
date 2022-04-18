import React from 'react';
import Banner from '../Banner/Banner';
import Hijama from '../Hijama/Hijama';
import Services from '../Services/Services';


const Home = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Hijama></Hijama>
        </div>
    );
};

export default Home;