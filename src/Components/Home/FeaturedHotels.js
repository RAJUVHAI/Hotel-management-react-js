import React, { useEffect, useState } from 'react';
import "./FeaturedHotels.css"
import FeaturedHotelsData from "../data/Featured.json"
import FeaturedHotel from './FeaturedHotel';

const FeaturedHotels = () => {

    const [featuredhotels, setFeaturedHotels] = useState({});
    useEffect(() => {
        fetch(FeaturedHotelsData)
          .then((res) => res.json())
          .then((data) => setFeaturedHotels(data));
      }, []);
    return ( 
        <div className='featured-hotels'>
            <h1>Featured Hotels and Properties</h1>
            <div className="featured-hotel">
            {
                FeaturedHotelsData.map((featuredhotel) => (<FeaturedHotel key={featuredhotel.id} featuredhotel = {featuredhotel}/>))
            }
            </div>
        </div>
    );
};

export default FeaturedHotels;