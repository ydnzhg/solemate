import React from "react";

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
    </nav>
  );
};

export default NavBar;
