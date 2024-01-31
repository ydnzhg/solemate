import React from "react";

import "../../utilities.css";
import "./Discover.css";

import ShoeCard from "../modules/ShoeCard";
import ButtonDock from "../modules/ButtonDock";

const placeholderData = {
  brand: "Nike",
  item_name: "Air Force 1",
  description:
    "The Nike Air Force 1 ‘07 ‘Triple White’ gives the classic silhouette a blank-slate makeover, one that accentuates the shoe’s classic lines. Built with white leather, the upper is appointed with heritage details, including a perforated toe box, variable width lacing, and metallic silver lace dubrae. A matching white rubber cupsole packs an Air-sole heel unit encapsulated in lightweight foam. Underfoot, the rubber outsole features the original pivot-point traction pattern.",
  color: "White/White",
  price: "$110",
  image:
    "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=1000",
};

const Discover = () => {
  return (
    <div className="Discover-container">
      <ShoeCard
        brand={placeholderData.brand}
        item_name={placeholderData.item_name}
        description={placeholderData.description}
        color={placeholderData.color}
        price={placeholderData.price}
        image={placeholderData.image}
      />
      <ButtonDock />
    </div>
  );
};

export default Discover;
