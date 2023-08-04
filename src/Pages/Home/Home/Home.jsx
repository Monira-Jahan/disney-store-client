//import React from 'react';

import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import Category from "../ShopByCategory/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <Gallery></Gallery>
            <Category></Category>
            <Reviews></Reviews>
            
           
        </div>
    );
};

export default Home;