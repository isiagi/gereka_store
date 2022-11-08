import { useContext } from "react";
import { AppContext } from "../../components/context/Context";

import { MdDelete } from "react-icons/md";

import im2 from "../../assets/images/7.jpg";

import "./cart.css";

const Cart = () => {
  const { cart, addCart, onIncrease, onDecrease } = useContext(AppContext);

  return (
    <div className="cart__container">
      <div className="detail__wrapper"></div>
      <section className="cart__wrapper">
        <div>
          {[1, 2, 3].map(() => (
            <div className="cart__wrapper5">
              <div className="cart__section2">
                <img src={im2} alt="hello" />
                <div style={{ width: "100%", lineHeight: "3rem" }}>
                  <div className="cat__section3">
                    <span>
                      <h3>Bed</h3>
                    </span>
                    <span className="cat__px">Shs 200000</span>
                  </div>

                  <div className="detail__cart">
                    <div className="detail__count">
                      <div>{cart.length === 0 ? item.qty : cart[0].qty}</div>
                      <div>
                        <span onClick={() => onIncrease(item)}>+</span>
                        <span onClick={() => onDecrease(item)}>-</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="cat__del"
                    // onClick={() => onDeleted(x)}
                  >
                    <MdDelete />
                    delete
                  </span>
                </div>
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
                <p>Shs 0</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>Deliever price</p>
                <p>Shs 0</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>Total price</p>
                <p>Shs 0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
