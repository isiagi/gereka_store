import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

import "./nav.css"

function Nav() {
  const [open, setOpen] = React.useState(false);
  const { cart } = useContext(AppContext);

  const [offSet, setOffset] = React.useState(0);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  
  return (
    <div className={offSet > 40 ? "nav__container1" : "nav__container"}>
      <div className="nav__wrapper">
        <div className="nav__head">
          <h1>Gereka Store</h1>
        </div>
        <div className={`${"nav__ul"} ${open ? "active" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Cart {cart.length}</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav__icons">
          {open ? (
            <GiCancel onClick={() => setOpen(false)} className="nav__icon" />
          ) : (
            <MdTableRows onClick={() => setOpen(true)} className="nav__icon"/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
