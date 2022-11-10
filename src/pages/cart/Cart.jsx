import { useContext, useEffect } from "react";
import { AppContext } from "../../components/context/Context";

import { MdDelete } from "react-icons/md";

import "./cart.css";
import Sid from "../../components/sid/Sid";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    cart,
    onIncrease,
    onDecrease,
    onRemove,
    itemPrice,
    delieveryPrice,
    totalPrice,
  } = useContext(AppContext);

  return (
    <div className="cart__container">
      <div className="detail__wrapper"></div>
      <div className="cart__div">
        <div className="tyry">
          {cart.map((item) => (
            <div className="cart__section1">
              <img src={item.img} alt="" />
              <div style={{ width: "100%" }}>
                <div className="cat__section3">
                  <span>
                    <h3>{item.name}</h3>
                  </span>

                  <span className="cat__px">Shs {item.price * item.qty}</span>
                </div>

                <div className="cat__select">
                  <div className="cat__buttons">
                    <button
                      className="cat__pa"
                      onClick={() => onDecrease(item)}
                    >
                      -
                    </button>
                    <p>{item.qty}</p>
                    <button
                      className="cat__pa"
                      onClick={() => onIncrease(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="cat__del" onClick={() => onRemove(item)}>
                  <MdDelete />
                  delete
                </span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="cat__wrapper9">
            <h2>Order Summary</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>original price</p>
                <p>Shs {itemPrice}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>Deliever price</p>
                <p>Shs {itemPrice && delieveryPrice}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>Total price</p>
                <p>Shs {itemPrice && totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sid />
    </div>
  );
};

export default Cart;
