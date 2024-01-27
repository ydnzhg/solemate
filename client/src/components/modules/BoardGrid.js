import React from "react";

import BoardCard from "./BoardCard";

import "./BoardGrid.css";

const BoardGrid = () => {
  return (
    <div className="BoardGrid-container">
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
    </div>
  );
};

export default BoardGrid;
