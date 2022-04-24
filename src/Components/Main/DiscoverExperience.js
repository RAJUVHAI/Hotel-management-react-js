import React from "react";
import "./DiscoverExperiences.css";

const DiscoverExperience = () => {
  return (
    <div className="discover-experiences-container">
      <h1>Discover Airbnb Experiences</h1>
      <div className="discover-cards">
        <div className="discover-card1">
          <h1>
            Things to do <br /> on your trip
          </h1>
          <button className="discover-btn">Experiences</button>
        </div>
        <div className="discover-card2">
          <h1>
            Things to do <br />
            from home
          </h1>
          <button className="discover-btn">Onlice Experiences</button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverExperience;
