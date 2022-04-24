import React from "react";
import "./HelpCard.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HelpCardHost = () => {
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
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg"
            alt=""
          />
          <h2>Accessing your account</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltc5b5fba2bdc0a264/getting-paid-optimized.jpg"
            alt=""
          />
          <h2>Getting paid</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltc2c41caec93eaf03/help-with-hosting-optimized.jpg"
            alt=""
          />
          <h2>Help with hosting</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt991e9dd0be644c17/getting-reimbursed-through-aircover-optimized.jpg"
            alt=""
          />
          <h2>Getting protected through AirCover</h2>
        </div>
      </div>
    </div>
  );
};

export default HelpCardHost;
