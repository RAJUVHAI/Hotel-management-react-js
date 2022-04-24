import React from "react";
import "./HelpArticles.css";

const HelpArticles = () => {
  return (
    <div className="help-articles">
      <h1>Top articles</h1>
      <div className="articles">
        <div className="article">
          <a href="#">
            <h2>About Airbnb for Work</h2>
          </a>
          <a className="article-desc" href="#">
            <p>
              Arranging accommodation for business trips is a cinch with Airbnb
              for Work, which puts a worldw
            </p>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <h2>Suspension of Airbnb operations in Russia and Belarus</h2>
          </a>
          <a className="article-desc" href="#">
            <p>
              Airbnb has suspended operations in Russia and Belarus. This means
              that new reservations
            </p>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <h2>
              Regulations impacting financial institutions in Russia and Belarus
            </h2>
          </a>
          <a className="article-desc" href="#">
            <p>
              Because of recent regulations, Airbnb can no longer process
              transactions affiliated with
            </p>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <h2>Sanctions impacting hosting in the Donbas region</h2>
          </a>
          <a className="article-desc" href="#">
            <p>
              Because of recent sanctions, reservations in the Donbas region of
              Ukraine are no longer available. This is a developing situation,
              and
            </p>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <h2>Signing your company up to Airbnb for Work</h2>
          </a>
          <a className="article-desc" href="#">
            <p>
              Because of recent sanctions, reservations in the Donbas region of
              Ukraine are no longer available. This is a developing situation,
              and
            </p>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <h2>How to manage company travel</h2>
          </a>
          <a className="article-desc" href="#">
            {" "}
            <p>
              We've made it easy to manage business travel on Airbnb, with a
              specialized Airbnb for Work
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpArticles;
