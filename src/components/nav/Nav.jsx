import { useContext } from "react";
import { AppContext } from "../context/Context";

import "./nav.css"

function Nav() {
  const { cart } = useContext(AppContext);
  
  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__head">
          <h1>Gereka Store</h1>
        </div>
        <div className="nav__ul">
          <ul>
            <li>Home</li>
            <li>Cart {cart.length}</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
