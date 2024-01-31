import React, { useState } from "react";

import "./EditBoard.css";
import "../../utilities.css";

const NewBoardForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("description", description);
    console.log("image", image);
    // Handle form submission logic here
  };

  return (
    <div className="EditBoard-container">
      <form onSubmit={handleSubmit} className="EditBoard-form">
        <img src={image} className="EditBoard-image" />
        <div className="EditBoard-text">
          <input
            type="text"
            value={name}
            placeholder="Add Name"
            onChange={handleNameChange}
            className="EditBoard-name"
          />
          <textarea
            type="text"
            value={description}
            placeholder="Add Description"
            onChange={handleDescriptionChange}
            className="EditBoard-description"
          />
          <p className="EditBoard-properties">
            <b>Creator</b>, 1/30/24 | 0 shoes | 0 likes
          </p>
        </div>
        <div className="EditBoard-buttons">
          <input type="text" onChange={handleImageChange} placeholder="Paste image URL" />
          <button type="submit">Done</button>
        </div>
      </form>
      <div>
        <p className="ShoeGrid-heading">Added Shoes</p>
        <p className="ShoeGrid-empty">No shoes in board yet!</p>
      </div>
    </div>
  );
};

export default NewBoardForm;
