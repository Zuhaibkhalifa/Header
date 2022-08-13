import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Components/Common/Header/Header";
import Footer from "../Components/Common/Footer/Footer";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
