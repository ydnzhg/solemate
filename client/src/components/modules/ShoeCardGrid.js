import React from "react";

import "../../utilities.css";
import "./ShoeCardGrid.css";

const ShoeCardGrid = (props) => {
  return props.boards[props.selectedBoard].shoes.length !== 0 ? (
    <div>
      <p className="SmallShoeCard-heading">Added Shoes</p>
      <div className="BoardDisplay-cardGrid">
        {props.boards[props.selectedBoard].shoes.map((shoe) => (
          <div key={shoe} className="SmallShoeCard-container">
            <img src={shoe.image} alt="shoe" className="SmallShoeCard-image" />
            <p className="SmallShoeCard-brand">{shoe.brand}</p>
            <p className="SmallShoeCard-name">{shoe.name}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <p className="SmallShoeCard-heading">Added Shoes</p>
      <p className="ShoeGrid-empty">No shoes in board yet!</p>
    </div>
  );
};

export default ShoeCardGrid;
