import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";

import "./BoardSidePanel.css";

const BoardSidePanel = (props) => {
  return (
    <div className="SidePanel-container">
      <div className="SidePanel-addButton" onClick={() => console.log("Add Button clicked")}>
        <IoAddOutline className="SidePanel-addIcon" />
        <p className="SidePanel-addText">Add Board</p>
      </div>
      <div className="SidePanel-boardList">
        {props.placeholderBoards.map((board) => (
          <div
            key={board}
            className="SidePanel-board"
            onClick={() => {
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
