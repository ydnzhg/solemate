import React from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <img src="./logo-no-name.png" alt="logo" className="NavBar-logo" />
      <Link to="/discover" className="NavBar-link">
        Discover
      </Link>
      <Link to="/collections" className="NavBar-link">
        Collections
      </Link>
      <Link to="/explore" className="NavBar-link">
        Explore
      </Link>
    </nav>
  );
};

export default NavBar;
