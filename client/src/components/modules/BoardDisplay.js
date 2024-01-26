import React from "react";

import "./BoardDisplay.css";

const BoardDisplay = (props) => {
  return (
    <div className="BoardDisplay-container">
      <div className="BoardDisplay-boardInfo">
        <img src={props.placeholderBoards[props.selectedBoard].image} alt="Board" />
        <div className="BoardDisplay-boardText">
          <h1>{props.placeholderBoards[props.selectedBoard].name}</h1>
          <p>{props.placeholderBoards[props.selectedBoard].description}</p>
          <p>Author: {props.placeholderBoards[props.selectedBoard].creator}</p>
        </div>
      </div>
      <div className="BoardDisplay-cardGrid">
        {props.placeholderBoards[props.selectedBoard].shoes.map((shoe) => (
          <div key={shoe} className="SmallShoeCard-container">
            <img src={shoe.image} alt="shoe" className="SmallShoeCard-image" />
            <p className="SmallShoeCard-brand">{shoe.brand}</p>
            <p className="SmallShoeCard-name">{shoe.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardDisplay;
