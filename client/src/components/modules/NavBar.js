import React from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCagTXzKoHSBDXnWj1p1kLB6WkoXuFwwZX_g&usqp=CAU"
        alt="logo"
        className="NavBar-logo"
      />
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
