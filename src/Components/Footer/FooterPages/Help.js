import React from "react";
import "./Help.css";
import SearchIcon from "@mui/icons-material/Search";
import HelpTab from "./HelpTab";
import HelpArticles from "./HelpArticles";

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="top-heading">Hi, How can we help you?</h1>
      <div className="search-btn">
        <input type="text" placeholder="Search how-tos and more" />
        <SearchIcon className="search-icon" />
      </div>
      <HelpTab />
      <HelpArticles />
    </div>
  );
};

export default Help;
