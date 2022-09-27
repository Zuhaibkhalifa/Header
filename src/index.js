import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Container/App";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
