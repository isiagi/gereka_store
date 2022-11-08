import { TfiWorld } from "react-icons/tfi";
import { GiReturnArrow } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";

import './sid.css'

const Sid = () => {
  return (
    <div className="sid__container">
      <div className="sid__wrapper">
        <TfiWorld className="sid__icon"/>
        <h2>24H SERVICE</h2>
      </div>
      <div className="sid__wrapper">
        <GiReturnArrow className="sid__icon"/>
        <h2>20 day returns</h2>
      </div>
      <div className="sid__wrapper">
        <GrDeliver className="sid__icon"/>
        <h2>FAST DELIVERY</h2>
      </div>
    </div>
  );
};

export default Sid;
