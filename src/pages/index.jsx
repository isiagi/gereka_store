import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Detail from "./detail/Detail";
import HomePage from "./HomePage";
import { Context } from "../components/context/Context";
import Footer from "../components/footer/Footer";
import Cart from "./cart/Cart";
import Category from "../components/category/Category";

const index = () => {
  return (
    <Router>
      <Context>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:name" element={<Category />} />
        </Routes>
      </Context>
      <Footer />
    </Router>
  );
};

export default index;
