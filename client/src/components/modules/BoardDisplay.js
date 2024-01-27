import React from "react";

import "./BoardDisplay.css";

import ShoeCardGrid from "./ShoeCardGrid";

const BoardDisplay = (props) => {
  return (
    <div className="BoardDisplay-container">
      <div className="BoardDisplay-boardInfo">
        <img
          src={props.placeholderBoards[props.selectedBoard].image}
          alt="Board"
          className="BoardDisplay-boardImage"
        />
        <div className="BoardDisplay-boardText">
          <p className="BoardDisplay-boardName">
            {props.placeholderBoards[props.selectedBoard].name}
          </p>
          <p className="BoardDisplay-boardDescription">
            {props.placeholderBoards[props.selectedBoard].description}
          </p>
          <p className="BoardDisplay-boardOwner">
            Author: {props.placeholderBoards[props.selectedBoard].creator}
          </p>
        </div>
        <div className="BoardDisplay-buttonList">
          <button className="BoardDisplay-button">Edit</button>
          <button className="BoardDisplay-button">Share</button>
          <button className="BoardDisplay-button">Export</button>
        </div>
      </div>
      <ShoeCardGrid
        placeholderBoards={props.placeholderBoards}
        selectedBoard={props.selectedBoard}
      />
    </div>
  );
};

export default BoardDisplay;
