import React from "react";

import BoardCard from "./BoardCard";

import "./BoardGrid.css";

const BoardGrid = (props) => {
  return props.boards.length !== 0 ? (
    <div className="BoardGrid-container">
      {props.boards.map((board) => (
        <BoardCard image={board.image} name={board.name} creator={board.creator} />
      ))}
    </div>
  ) : (
    <p>Currently no public boards!</p>
  );
};

export default BoardGrid;
