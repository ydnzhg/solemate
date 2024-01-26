import React from "react";

import "./SortBar.css";

const SortBar = (props) => {
  return (
    <div className="SortBar-container">
      <label>
        Sort By:
        <select>
          <option value="">Select an option</option>
          <option value="trending">Trending</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="creator">Creator</option>
        </select>
      </label>
    </div>
  );
};

export default SortBar;
