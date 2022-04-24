import React from 'react';
import ByType from './ByType';
import Explore from './Explore';
import FeaturedHotels from './FeaturedHotels';
import Header from './Header';
import Places from './Places';
import Navigation from '../PagesSubComponents/Navigation'
const Home = () => {
    return (
        <div>
            <Navigation ></Navigation>
            <Header />
            <ByType />
            <Explore />
            <Places />
            <FeaturedHotels />
        </div>
    );
};

export default Home;