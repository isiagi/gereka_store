import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Detail from "./detail/Detail";
import HomePage from "./HomePage";
import { Context } from "../components/context/Context";

const index = () => {
  return (
    <Router>
      <Context>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Context>
    </Router>
  );
};

export default index;
