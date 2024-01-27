import React from "react";

import "../../utilities.css";
import "./ShoeCard.css";

const ShoeCard = (props) => {
  return (
    <div className="ShoeCard-container">
      <img src={props.image} alt="clothing image" className="ShoeCard-image" />
      <div className="ShoeCard-text">
        <p className="ShoeCard-brand">{props.brand}</p>
        <p className="ShoeCard-name">{props.item_name}</p>
        <p className="ShoeCard-description">{props.description}</p>
      </div>
      <div className="ShoeCard-properties">
        <p className="ShoeCard-color">{props.color}</p>
        <p className="ShoeCard-price">{props.price}</p>
      </div>
    </div>
  );
};

export default ShoeCard;
