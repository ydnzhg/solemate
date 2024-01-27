import React from "react";
import { useState } from "react";

import "./SortBar.css";

const SortBar = (props) => {
  const [selectedOption, setSelectedOption] = useState("Trending");

  return (
    <div className="SortBar-container">
      <p className="SortBar-option">Sort By: </p>
      <p
        className="SortBar-option"
        onClick={() => {
          setSelectedOption("Trending");
        }}
      >
        Trending
      </p>
      <p
        className="SortBar-option"
        onClick={() => {
          setSelectedOption("Newest");
        }}
      >
        Newest
      </p>
      <p
        className="SortBar-option"
        onClick={() => {
          setSelectedOption("Oldest");
        }}
      >
        Oldest
      </p>
      <p
        className="SortBar-option"
        onClick={() => {
          setSelectedOption("Creator");
        }}
      >
        Creator
      </p>
    </div>
  );
};

export default SortBar;
