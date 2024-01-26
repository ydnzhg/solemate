import React from "react";
import BoardSidePanel from "../modules/BoardSidePanel";
import BoardDisplay from "../modules/BoardDisplay";
import { useState } from "react";

import "./Collections.css";

const placeholderBoards = [
  {
    name: "Winter Shoes",
    shoes: [
      { id: 1, brand: "Nike", name: "Air Max", price: 100 },
      { id: 2, brand: "Adidas", name: "Ultraboost", price: 120 },
      { id: 3, brand: "Puma", name: "RS-X", price: 80 },
    ],
  },
  {
    name: "Spring Shoes",
    shoes: [
      { id: 1, brand: "Reebok", name: "Air Max", price: 100 },
      { id: 2, brand: "Converse", name: "Ultraboost", price: 120 },
      { id: 3, brand: "Crocs", name: "RS-X", price: 80 },
    ],
  },
  {
    name: "Fall Shoes",
    shoes: [
      { id: 1, brand: "Uggs", name: "Air Max", price: 100 },
      { id: 2, brand: "Adidas", name: "Ultraboost", price: 120 },
      { id: 3, brand: "Puma", name: "RS-X", price: 80 },
    ],
  },
  {
    name: "Summer Shoes",
    shoes: [
      { id: 1, brand: "Crocs", name: "Air Max", price: 100 },
      { id: 2, brand: "Slides", name: "Ultraboost", price: 120 },
      { id: 3, brand: "Puma", name: "RS-X", price: 80 },
    ],
  },
];

const Collections = () => {
  const [selectedBoard, setSelectedBoard] = useState(0);

  return (
    <div className="Collections-container">
      <BoardSidePanel placeholderBoards={placeholderBoards} setSelectedBoard={setSelectedBoard} />
      <BoardDisplay placeholderBoards={placeholderBoards} selectedBoard={selectedBoard} />
    </div>
  );
};

export default Collections;
