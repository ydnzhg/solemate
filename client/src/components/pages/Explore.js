import React from "react";

import BoardGrid from "../modules/BoardGrid";

import SortBar from "../modules/SortBar";

import { get } from "../../utilities";

import { useState, useEffect } from "react";

const Explore = () => {
  const [publicBoards, setPublicBoards] = useState([]);

  useEffect(() => {
    get("/api/public-boards").then((boardObjs) => {
      setPublicBoards(boardObjs);
    });
  }, []);

  return (
    <div>
      <SortBar />
      <BoardGrid boards={publicBoards} />
    </div>
  );
};

export default Explore;
