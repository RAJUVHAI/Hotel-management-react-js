import React from 'react';
import ByType from './ByType';
import Explore from './Explore';
import FeaturedHotels from './FeaturedHotels';
import Header from './Header';
import Places from './Places';
import Navigation from '../PagesSubComponents/Navigation'
import Footer from './Footer';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <ByType />
            <Explore />
            <Places />
            <FeaturedHotels />
            <Footer />
        </div>
    );
};

export default Home;