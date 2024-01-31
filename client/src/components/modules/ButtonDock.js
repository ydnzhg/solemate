import React from "react";

import "./ButtonDock.css";

import { IoTrash } from "react-icons/io5";
import { IoFlame } from "react-icons/io5";

const ButtonDock = (props) => {
  return (
    <div className="button-dock">
      <div className="buttonDock-button">
        <IoTrash className="buttonDock-trash" />
      </div>
      <div className="buttonDock-button">
        <IoFlame className="buttonDock-fire" />
      </div>
    </div>
  );
};

export default ButtonDock;
