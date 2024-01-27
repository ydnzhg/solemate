import React from "react";

import "../../utilities.css";
import "./ShoeCardGrid.css";

const ShoeCardGrid = (props) => {
  return (
    <div className="BoardDisplay-cardGrid">
      {props.placeholderBoards[props.selectedBoard].shoes.map((shoe) => (
        <div key={shoe} className="SmallShoeCard-container">
          <img src={shoe.image} alt="shoe" className="SmallShoeCard-image" />
          <p className="SmallShoeCard-brand">{shoe.brand}</p>
          <p className="SmallShoeCard-name">{shoe.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoeCardGrid;
