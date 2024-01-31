import React from "react";

import BoardGrid from "../modules/BoardGrid";

import SortBar from "../modules/SortBar";

import { get } from "../../utilities";

import { useState, useEffect } from "react";

const Explore = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    get("/api/public-boards").then((boardObjs) => {
      setBoards(boardObjs);
    });
  }, []);

  return (
    <div>
      <SortBar />
      <BoardGrid boards={boards} />
    </div>
  );
};

export default Explore;
