import { Check } from "@mui/icons-material";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Checkout from "../Components/Checkout/Checkout";
import Footer from "../Components/Common/Footer/Footer";

import Home from "../Components/Home/Home";
import News from "../Components/News/News";
import Our from "../Components/Our/Our";
import Product from "../Components/Product/Product";
import Why from "../Components/Why/Why";

function Router() {
  return (
    <>
      <Home />
      <Why />
      <Product />
      <Checkout />
      <Our />
      <News />
      <Footer />
    </>
  );
}

export default Router;
