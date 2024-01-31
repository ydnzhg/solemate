import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "./BoardSidePanel.css";

const BoardSidePanel = (props) => {
  return (
    <div className="SidePanel-container">
      <div
        className="SidePanel-addButton"
        onClick={() => {
          props.setEditing(true);
        }}
      >
        <IoAddOutline className="SidePanel-addIcon" />
        <p className="SidePanel-addText">Add Board</p>
      </div>
      <div className="SidePanel-boardList">
        {props.placeholderBoards.map((board) => (
          <div
            key={board}
            className="SidePanel-board"
            onClick={() => {
              props.setEditing(false);
              console.log("Board clicked");
              props.setSelectedBoard(props.placeholderBoards.indexOf(board));
            }}
          >
            <IoGridOutline />
            <p className="SidePanel-boardName">{board.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardSidePanel;
