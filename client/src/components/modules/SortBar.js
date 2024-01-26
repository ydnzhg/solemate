import React from "react";

import "./SortBar.css";

const SortBar = (props) => {
  return (
    <div className="SortBar-container">
      <p className="SortBar-option">Sort By: </p>
      <p className="SortBar-option">Trending</p>
      <p className="SortBar-option">Newest</p>
      <p className="SortBar-option">Oldest</p>
      <p className="SortBar-option">Creator</p>
    </div>
  );
};

export default SortBar;
