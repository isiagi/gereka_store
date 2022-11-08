import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./nav.css";

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
    <div className={offSet > 20 ? "nav__container1" : "nav__container"}>
      <div className="nav__wrapper">
        <div className="nav__head">
          <Link to="/">
            <h1>Gereka Store</h1>
          </Link>
        </div>
        <div className={`${"nav__ul"} ${open ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                <BsCart3 />
                Cart {cart.length}
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__icons">
          {open ? (
            <GiCancel onClick={() => setOpen(false)} className="nav__icon" />
          ) : (
            <MdTableRows onClick={() => setOpen(true)} className="nav__icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
