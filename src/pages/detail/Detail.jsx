import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../components/context/Context";
import DetailSlider from "../../components/detailSlide/DetailSlider";

import { useParams } from "react-router-dom";

import data from "../../util/data";

import "./detail.css";

const Detail = () => {
  const [item, setItem] = useState({});
  const [count, setCount] = useState(1);
  const [tab, setTab] = useState("desc");
  const { cart, addCart, onIncrease, onDecrease } = useContext(AppContext);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ite = data.filter((item) => {
      return item.id === parseInt(id);
    });
    console.log(ite[0]);
    setItem(ite[0]);
  }, [id]);

  return (
    <div>
      <div className="detail__wrapper">{/* <h3>Detail</h3> */}</div>
      <div className="detail__show">
        <div className="detail__slider">
          <DetailSlider show={item.img} />
        </div>
        <div className="detail__info">
          <h1>{item.name}</h1>
          <h2>
            <em>shs {item.price}</em>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <div className="detail__cart">
            <div className="detail__count">
              <div>{cart.length === 0 ? item.qty : count}</div>
              <div>
                <span onClick={() => setCount(prev => prev + 1)}>+</span>
                <span onClick={() => setCount(prev => prev === 1 ? prev : prev - 1)}>-</span>
              </div>
            </div>
            <button onClick={() => addCart(item, count)}>Add To Cart</button>
          </div>
          <div style={{ margin: "2rem 0" }}>
            <p>
              Category: <span style={{ color: "#8e8c8c" }}>Furniture</span>
            </p>
            <p>
              Tags: <span style={{ color: "#8e8c8c" }}>Interior</span>
            </p>
          </div>
        </div>
      </div>
      <div className="detail__info">
        <div className="detail__info__head">
          <h3 onClick={() => setTab("desc")}>Description</h3>
          <h3 onClick={() => setTab("info")}>Info</h3>
          <h3 onClick={() => setTab("rev")}>Reviews (0)</h3>
        </div>
        <div className="detail__info__info">
          {tab === "desc" ? (
            <p>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi
            </p>
          ) : (
            <p>
              WEIGHT 5 kg <br />
              DIMENSIONS 10 × 10 × 10 cm <br />
              SIZES L- 450x550cm, M- 330x550cm, S- 220x330cm
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
