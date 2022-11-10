import { useContext } from "react";
import { AppContext } from "../context/Context";
import "./card.css";

import { FaCartArrowDown } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

const Card = ({ id, price, img, name, qty }) => {
  const { addCart } = useContext(AppContext);

  return (
    <>
      <div className="card__Container" key={id}>
        <div className="card__image">
          <div className="card__img__overlay" />
          <img src={img} alt="hey" width="100%" />
          <div className="card__overlay">
            <div className="card__text">
              <span>
                <Link to={`/${id}`}>
                  Preview
                </Link>
              </span>
              <span onClick={() => addCart({ id, price, img, name, qty })}>
                <FaCartArrowDown className="card__icon"/>
              </span>
            </div>
          </div>
        </div>
        <Link to={`/${id}`}>
          <div className="card__detail">
            <div className="card__detail1">
              <p>{name}</p>
              {/* <p>Ugx {price}</p> */}
            </div>
            <div style={{paddingBottom: '10px'}}>
              <p>Tag: Interior</p>
            </div>
          </div>
        </Link>
      </div>

      {/* id: 1, img: "/static/media/shoe.9484e62d3cda2b2a0e01.jpeg", head: "Nike Air", para: "70000" */}
    </>
  );
};

export default Card;
