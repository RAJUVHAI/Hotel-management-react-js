import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./HelpCard.css";

const HelpCardTrAdmin = () => {
  return (
    <div>
      <div className="content">
        <h1>Guides for Travel Admins</h1>
        <div className="right-section">
          <a href="#">Browse all topics</a>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="card-section">
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt1a805240919340d9/getting-started-with-airbnb-for-work-optimized.jpg"
            alt=""
          />
          <h2>Getting started with Airbnb for Work</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt2df554f2a14d9276/using-your-dashboard-optimized.jpg"
            alt=""
          />
          <h2>Using your dashboard</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltf091f0eaa3ac1b5e/how-booking-and-reservations-work-optimized.jpg"
            alt=""
          />
          <h2>How booking and reservations work</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt2583b2eaa4ae1c4d/help-with-billing-optimized.jpg"
            alt=""
          />
          <h2>Help with billing</h2>
        </div>
      </div>
    </div>
  );
};

export default HelpCardTrAdmin;
