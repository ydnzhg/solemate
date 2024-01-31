import React from "react";

import "./BoardDisplay.css";

import ShoeCardGrid from "./ShoeCardGrid";
import { IoLockClosed } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io5";

const BoardDisplay = (props) => {
  return props.selectedBoard !== null ? (
    <div className="BoardDisplay-container">
      <div className="BoardDisplay-boardInfo">
        <img
          src={props.boards[props.selectedBoard].image}
          alt="Board"
          className="BoardDisplay-boardImage"
        />
        <div className="BoardDisplay-boardText">
          <div>
            <p className="BoardDisplay-boardName">{props.boards[props.selectedBoard].name}</p>
            <p className="BoardDisplay-boardDescription">
              {props.boards[props.selectedBoard].description}
            </p>
          </div>
          <p className="BoardDisplay-properties">
            <b>{props.boards[props.selectedBoard].creator}</b> |{" "}
            {props.boards[props.selectedBoard].shoes.length} shoes |{" "}
            {props.boards[props.selectedBoard].likes} likes
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
      <ShoeCardGrid boards={props.boards} selectedBoard={props.selectedBoard} />
    </div>
  ) : (
    <div>
      <p className="none-selected">No board selected!</p>
    </div>
  );
};

export default BoardDisplay;
