import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Header from "../Components/Common/Header/Header";
import Footer from "../Components/Common/Footer/Footer";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
