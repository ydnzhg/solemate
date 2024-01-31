import React from "react";

import BoardCard from "./BoardCard";

import "./BoardGrid.css";

const BoardGrid = (props) => {
  return (
    <div className="BoardGrid-container">
      {props.boards.map((board) => (
        <BoardCard image={board.image} name={board.name} creator={board.creator} />
      ))}
    </div>
  );
};

export default BoardGrid;
