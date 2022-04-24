import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./HelpCard.css";

const HelpCardExprHost = () => {
  return (
    <div>
      <div className="content">
        <h1>Guides for Experience Hosts</h1>
        <div className="right-section">
          <a href="#">Browse all topics</a>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="card-section">
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltc5b5fba2bdc0a264/getting-paid-optimized.jpg"
            alt=""
          />
          <h2>Getting paid</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt657a7e0ce479dcf1/managing-your-experience-optimized.jpg"
            alt=""
          />
          <h2>Managing your Exprience</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt4f32d08e271c7ba5/changes-and-cancellations-optimized.jpg"
            alt=""
          />
          <h2>Changes and cancellations</h2>
        </div>
        <div className="card">
          <img
            src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltbe0500ef75ea2ee7/how-cohosting-works-optimized.jpg"
            alt=""
          />
          <h2>How Co-Hosting works</h2>
        </div>
      </div>
    </div>
  );
};

export default HelpCardExprHost;
