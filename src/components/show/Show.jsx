import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/11.jpg";
import img3 from "../../assets/images/17.jpg";
import img4 from "../../assets/images/8.jpg";
import img5 from "../../assets/images/9.jpg";
import Card from "../card/Card";

import "./show.css";

// id, price, img, name, qtyid, price, img, name, qty

const items = [
  {
    id: 1,
    price: 200000,
    img: img1,
    name: "Bed",
  },
  {
    id: 2,
    price: 200000,
    img: img2,
    name: "Bed",
  },
  {
    id: 3,
    price: 200000,
    img: img3,
    name: "Bed",
  },
  {
    id: 4,
    price: 200000,
    img: img4,
    name: "Bed",
  },
  {
    id: 5,
    price: 200000,
    img: img5,
    name: "Bed",
  },
];

const Show = () => {
  return (
    <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
      <div className="card">
        {items.map(({ id, price, img, name }) => (
          <Card id={id} price={price} name={name} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Show;
