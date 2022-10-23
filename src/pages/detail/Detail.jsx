import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../components/context/Context";
import DetailSlider from "../../components/detailSlide/DetailSlider";

import { useParams } from "react-router-dom";

import data from "../../util/data";

import "./detail.css";

const Detail = () => {
  const [item, setItem] = useState({});
  const { addCart, onIncrease, onDecrease, } = useContext(AppContext);

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
      <div className="detail__wrapper">
        <h3>Detail</h3>
      </div>
      <div className="detail__show">
        <div className="detail__slider">
          <DetailSlider show={item.img}/>
        </div>
        <div className="detail__info">
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <div className="detail__cart">
            <div className="detail__count">
              <div>{item.qty}</div>
              <div>
                <span onClick={() => onIncrease(item)}>+</span>
                <span onClick={() => onDecrease(item)}>-</span>
              </div>
            </div>
            <button onClick={() => addCart(item)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
