import React from "react";

const ButtonDock = (props) => {
  return (
    <div className="button-dock">
      <button className="button-dock__button">Drop</button>
      <button className="button-dock__button">Add to Collection</button>
      <button className="button-dock__button">Cop</button>
    </div>
  );
};

export default ButtonDock;
