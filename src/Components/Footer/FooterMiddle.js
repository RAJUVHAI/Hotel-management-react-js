import React from "react";
import { Link } from "react-router-dom";
import "./FooterMiddle.css";
import Help from "./FooterPages/Help";

const FooterMiddle = () => {
  return (
    <div className="footer-middle">
      <div className="footer-support">
        <h4>Support</h4>
        <ul>
          <li>
            <Link to="/help"> Help Center </Link>
          </li>
          <li>
            <a href="#">Safety Information</a>
          </li>
          <li>
            <a href="#"> Cancelation Option</a>
          </li>
          <li>
            <a href="#">Our Covid-19 Response</a>
          </li>
          <li>
            <a href="#">Support people with disabilities</a>
          </li>
          <li>
            <a href="#">Report a neighborhood concern</a>
          </li>
        </ul>
      </div>
      <div className="community-section">
        <h4>Community</h4>
        <ul>
          <li>
            <a href="#">Airbnb.org:disaster relief housing</a>
          </li>
          <li>
            <a href="#">Support Afgan Refuges</a>
          </li>
          <li>
            <a href="#">Combating Discrimination</a>
          </li>
        </ul>
      </div>
      <div className="hosting">
        <h4>Hosting</h4>
        <ul>
          <li>
            <a href="#">Try Hosting</a>
          </li>
          <li>
            <a href="#">Aircover:protection for host</a>
          </li>
          <li>
            <a href="#">Explore hosting resources</a>
          </li>
          <li>
            <a href="#">Visit our community forum</a>
          </li>
          <li>
            <a href="#">How to host responsibly</a>
          </li>
        </ul>
      </div>
      <div className="about-section">
        <h4>About</h4>
        <ul>
          <li>
            <a href="#">Newsroom</a>
          </li>
          <li>
            <a href="#">Learn about new features</a>
          </li>
          <li>
            <a href="#">Letter from our founders</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Investors</a>
          </li>
          <li>
            <a href="#">Airbnb Luxe</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMiddle;
