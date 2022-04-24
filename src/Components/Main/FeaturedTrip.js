import React from "react";
import "./FeaturedTrip.css";

const FeaturedTrip = () => {
  return (
    <div className="featured-trip-container">
      <h1>Inspiration for your next trip</h1>
      <div className="featured-cards">
        <div className="featured-card">
          <img
            src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240"
            alt=""
          />
          <div className="featured-card-content">
            <h2>Dhaka</h2>
            <p>10 kilometers away</p>
          </div>
        </div>
        <div className="featured-card">
          <img
            src="https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_w=240"
            alt=""
          />
          <div className="featured-card-content">
            <h2>Dhanmondi</h2>
            <p>4 kilometers away</p>
          </div>
        </div>
        <div className="featured-card">
          <img
            src="https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg?im_w=240"
            alt=""
          />
          <div className="featured-card-content">
            <h2>Chattagram</h2>
            <p>207 kilometers away</p>
          </div>
        </div>
        <div className="featured-card">
          <img
            src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=240"
            alt=""
          />
          <div className="featured-card-content">
            <h2>Sylhet</h2>
            <p>197 kilometers away</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTrip;
