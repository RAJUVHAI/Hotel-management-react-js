import React from 'react';
import "./FeaturedHotel.css"

const FeaturedHotel = ({featuredhotel}) => {
    const {name, image, location, price} = featuredhotel;

    return (
        <div className='hotel'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{location}</p>
            <p>Starting from <span>$ {price} per night.</span></p>
            <button>View Details</button>
            
        </div>
    );
};

export default FeaturedHotel;