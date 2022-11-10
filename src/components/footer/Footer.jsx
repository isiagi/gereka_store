import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CgHeadset } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
// import { Link } from 'react-router-dom';

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container container">
      <div className="footer__contain">
        <div className="footer__wrapper">
          <div>
            <h3>Gereka Store</h3>
          </div>
          <div className="footer__info">
            <p>
              Gereka Store is your one stop physical and online furniture store
              where all quality furniture items for your home, office and daily
              life is found.
            </p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <BsFacebook style={{ fontSize: "1.5rem", color: "#8e8c8c" }} />
            <BsInstagram
              style={{
                fontSize: "1.5rem",
                marginLeft: "1rem",
                color: "#8e8c8c",
              }}
            />
            <AiFillTwitterCircle
              style={{
                fontSize: "1.5rem",
                marginLeft: "1rem",
                color: "#8e8c8c",
              }}
            />
          </div>
        </div>

        <div className="footer__links">
          <div>
            <h3>Services</h3>
          </div>
          <div>
            <ul>
              <li>
                <p to="/">Home Furniture</p>
              </li>
              <li>
                <p to="/">Work Furniture</p>
              </li>
              <li>
                <p to="/">Interior Furniture</p>
              </li>
              <li>
                <p to="/">Outdoor Furniture</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__links">
          <div>
            <h3>Contact Us</h3>
          </div>
          <div>
            <ul>
              <li>
                <CgHeadset style={{ color: "#8e8c8c", fontSize: "1.5rem" }} />{" "}
                0758356777 / 0758356777
              </li>
              <li>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div>
                    <HiOutlineMail
                      style={{ color: "#8e8c8c", fontSize: "1.5rem" }}
                    />
                  </div>
                  <div>
                    <p>gerekastore.gmail.com</p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div>
                    <GoLocation
                      style={{ color: "#8e8c8c", fontSize: "1.5rem" }}
                    />
                  </div>
                  <div>
                    <p>
                      Location <br />
                      Here
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__links">
          <div>
            <h3>Quick Link</h3>
          </div>
          <div>
            <ul>
              <li>
                <p to="/">Home</p>
              </li>
              <li>
                <p to="/about">About Us</p>
              </li>
              <li>
                <p to="/contact">Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
