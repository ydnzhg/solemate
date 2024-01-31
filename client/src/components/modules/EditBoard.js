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
    setImage(URL.createObjectURL(e.target.files[0]));
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
        <input type="text" value={name} placeholder="Add Name" onChange={handleNameChange} />
        <input
          type="text"
          value={description}
          placeholder="Add Description"
          onChange={handleDescriptionChange}
        />
        <input type="file" onChange={handleImageChange} accept="image/png, image/jpg" />
        <img src={image} className="EditBoard-displayImage" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBoardForm;
