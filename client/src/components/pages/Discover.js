import React from "react";

import "../../utilities.css";
import "./Discover.css";

import ShoeCard from "../modules/ShoeCard";

const placeholderData = {
  brand: "Nike",
  item_name: "Air Force 1",
  description:
    "The Nike Air Force 1 '07 LV8 incorporates the same hoops-inspired performance features of the 1982 original while adding fresh design details for an updated look.",
  color: "White/White",
  price: "$110",
  image:
    "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
};

const Discover = () => {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <ShoeCard
        brand={placeholderData.brand}
        item_name={placeholderData.item_name}
        description={placeholderData.description}
        color={placeholderData.color}
        price={placeholderData.price}
        image={placeholderData.image}
      />
    </div>
  );
};

export default Discover;
