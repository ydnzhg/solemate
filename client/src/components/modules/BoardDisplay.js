import React from "react";

import "./BoardDisplay.css";

import ShoeCardGrid from "./ShoeCardGrid";
import { IoLockClosed } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io5";

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
          <div>
            <p className="BoardDisplay-boardName">
              {props.placeholderBoards[props.selectedBoard].name}
            </p>
            <p className="BoardDisplay-boardDescription">
              {props.placeholderBoards[props.selectedBoard].description}
            </p>
          </div>
          <p className="BoardDisplay-properties">
            <b>{props.placeholderBoards[props.selectedBoard].creator}</b>, 1/30/24 | 0 shoes | 0
            likes
          </p>
        </div>
        <div className="BoardDisplay-buttonList">
          <div className="BoardDisplay-button">
            <IoPencil className="BoardDisplay-buttonIcon" />
          </div>
          <div className="BoardDisplay-button">
            <IoLockClosed className="BoardDisplay-buttonIcon" />
          </div>
          <div className="BoardDisplay-button">
            <IoLogoPinterest className="BoardDisplay-buttonIcon" />
          </div>
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
