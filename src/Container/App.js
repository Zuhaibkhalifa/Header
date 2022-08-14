import React from "react";
import { BrowserRouter as Rout } from "react-router-dom";
import Router from "../Routes/Router";
import "./App.css";

function App() {
  return (
    <>
      <Rout>
        <Router />
      </Rout>
    </>
  );
}

export default App;
