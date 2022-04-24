import React from "react";
import "./GiftCard.css";

const GiftCard = () => {
  return (
    <div className="gift-card">
      <div className="gift-card-content">
        <h1>
          Shop Airbnb <br /> gift cards
        </h1>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="gift-card-card">
        <img
          src="https://a0.muscache.com/im/pictures/3d10c82b-0d98-4557-b35a-7ff82052e466.jpg?im_w=960"
          alt=""
        />
      </div>
    </div>
  );
};

export default GiftCard;
