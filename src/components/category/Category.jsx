import { useParams } from "react-router-dom";
import items from "../../util/data";
import Card from "../card/Card";

function Category() {
  const{name} = useParams()

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <div className="detail__wrapper"></div>
      <div style={{padding: '30px 0', background: '#715A35', marginBottom: '2rem'}}>
        <h2 style={{fontWeight: '400', color: '#fff'}}>{capitalizeFirstLetter(name)} Selection</h2>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="card">
          {items.map(({ id, price, img, name, qty }) => (
            <Card id={id} price={price} name={name} img={img} qty={qty} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
