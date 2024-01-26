import React from "react";

import "./BoardDisplay.css";

const BoardDisplay = (props) => {
  return (
    <div className="BoardDisplay-container">
      {props.placeholderBoards[props.selectedBoard].shoes.map((shoe) => (
        <div key={shoe}>
          <p>{shoe.brand}</p>
          <p>{shoe.name}</p>
          <p>${shoe.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BoardDisplay;
