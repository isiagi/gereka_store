import im2 from '../../assets/images/7.jpg'
import "./cart.css";

const Cart = () => {
  return (
    <section className="cart__wrapper">
      <div>
        <div className="cart__section2">
          <img src={im2} alt="hello" />
          <div>
            <div className="cat__section3">
              <span>
                <h3>hello</h3>
                <h3>Black/Leather</h3>
              </span>
              <span className="cat__px">Shs </span>
            </div>

            <div className="cat__select">
              <h4>Size: large</h4>
              <div className="cat__buttons">
                <button
                  className="cat__pa"
                  // onClick={() => onRemove(x)}
                >
                  -
                </button>
                {1}
                <button className="cat__pa" 
                // onClick={() => onAdd(x)}
                >
                  +
                </button>
              </div>
            </div>
            <span className="cat__del" 
            // onClick={() => onDeleted(x)}
            >
              delete
            </span>
          </div>
        </div>
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
  );
};

export default Cart;
