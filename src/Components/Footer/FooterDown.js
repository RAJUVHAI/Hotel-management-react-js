import { Language } from "@mui/icons-material";
import React from "react";
import "./FooterDown.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterDown = () => {
  return (
    <div className="footer-down">
      <div className="footer-down-left">
        <p>&copy; 2022 Airbnb, Inc.</p>
        <ul>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
      <div className="footer-down-right">
        <div className="language-section">
          <Language style={{ marginRight: "10px" }} />
          <a href="#"> English (US)</a>
        </div>
        <div className="social-section">
          <FacebookIcon className="social-icon" />
          <TwitterIcon className="social-icon" />
          <InstagramIcon className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default FooterDown;
