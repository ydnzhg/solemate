import React from "react";
import BoardSidePanel from "../modules/BoardSidePanel";
import BoardDisplay from "../modules/BoardDisplay";
import EditBoard from "../modules/EditBoard";
import { useState } from "react";

import "./Collections.css";

const placeholderBoards = [
  {
    name: "Winter Shoes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Winter_forest_silver.jpg/640px-Winter_forest_silver.jpg",
    description: "Shoes for the winter",
    creator: "Myself",
    shoes: [
      {
        id: 1,
        brand: "Nike",
        name: "Air Max",
        price: 100,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
      {
        id: 2,
        brand: "Adidas",
        name: "Ultraboost",
        price: 120,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
      {
        id: 3,
        brand: "Puma",
        name: "RS-X",
        price: 80,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
    ],
  },
  {
    name: "Spring Shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/XN_Fruehjahrswiese_00.jpg",
    description: "Shoes for the spring",
    creator: "Myself",
    shoes: [
      {
        id: 1,
        brand: "Reebok",
        name: "Air Max",
        price: 100,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
      {
        id: 2,
        brand: "Converse",
        name: "Ultraboost",
        price: 120,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
      {
        id: 3,
        brand: "Crocs",
        name: "RS-X",
        price: 80,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
    ],
  },
  {
    name: "Fall Shoes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Autumn_Lane.jpg/640px-Autumn_Lane.jpg",
    description: "Shoes for the fall",
    creator: "Myself",
    shoes: [
      {
        id: 1,
        brand: "Uggs",
        name: "Air Max",
        price: 100,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
      {
        id: 2,
        brand: "Adidas",
        name: "Ultraboost",
        price: 120,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
      {
        id: 3,
        brand: "Puma",
        name: "RS-X",
        price: 80,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
    ],
  },
  {
    name: "Summer Shoes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Field_Hamois_Belgium_Luc_Viatour.jpg",
    description: "Shoes for the summer",
    creator: "Myself",
    shoes: [
      {
        id: 1,
        brand: "Crocs",
        name: "Air Max",
        price: 100,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
      {
        id: 2,
        brand: "Slides",
        name: "Ultraboost",
        price: 120,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
      {
        id: 3,
        brand: "Puma",
        name: "RS-X",
        price: 80,
        image:
          "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
      },
    ],
  },
];

const Collections = () => {
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [editing, setEditing] = useState(false);

  return (
    <div className="Collections-container">
      <BoardSidePanel
        placeholderBoards={placeholderBoards}
        setSelectedBoard={setSelectedBoard}
        setEditing={setEditing}
      />
      {editing ? (
        <EditBoard />
      ) : (
        <BoardDisplay placeholderBoards={placeholderBoards} selectedBoard={selectedBoard} />
      )}
    </div>
  );
};

export default Collections;
