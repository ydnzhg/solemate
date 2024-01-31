import React from "react";

import "./BoardCard.css";

const BoardCard = (props) => {
  return (
    <div className="BoardCard-container">
      <img src={props.image} alt="Board" className="BoardCard-image" />
      <div className="BoardCard-text">
        <p className="BoardCard-name">{props.name}</p>
        <p className="BoardCard-creator">{props.creator}</p>
      </div>
    </div>
  );
};

export default BoardCard;
