import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./HelpCard.css";

const HelpCard = () => {
  return (
    <div>
      <div className="content">
        <h1>Guides for getting started</h1>
        <div className="right-section">
          <a href="#">Browse all topics</a>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="card-section">
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg"
            alt=""
          />
          <h2>Getting started on Airbnb</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg"
            alt=""
          />
          <h2>Accessing your account</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt7b9def132e4aa927/help-with-a-reservation-optimized.jpg"
            alt=""
          />
          <h2>Help with a reservation</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltc2c41caec93eaf03/help-with-hosting-optimized.jpg"
            alt=""
          />
          <h2>Help with hosting</h2>
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
