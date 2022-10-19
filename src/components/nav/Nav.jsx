import React from "react";

import "./nav.css"

function Nav() {
  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__head">
          <h1>Gereka Store</h1>
        </div>
        <div className="nav__ul">
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
