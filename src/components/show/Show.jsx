import Card from "../card/Card";

import "./show.css";

// id, price, img, name, qtyid, price, img, name, qty


const Show = ({heading, items}) => {
  return (
    <div>
      <p style={{textAlign: "center"}}>BROWSE OUR ITEMS</p>
      <h1 style={{textAlign: "center",fontWeight: 400}}>{heading}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="card">
          {items.map(({ id, price, img, name, qty }) => (
            <Card id={id} price={price} name={name} img={img} qty={qty} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Show;
