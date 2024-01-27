import React from "react";

import "./BoardCard.css";

const BoardCard = (props) => {
  return (
    <div className="BoardCard-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fb/XN_Fruehjahrswiese_00.jpg"
        alt="Board"
        className="BoardCard-image"
      />
      <div className="BoardCard-text">
        <p className="BoardCard-name">Board Name</p>
        <p className="BoardCard-creator">Creator</p>
      </div>
    </div>
  );
};

export default BoardCard;
