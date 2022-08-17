import React from "react";
import { BrowserRouter as Rout } from "react-router-dom";
import Router from "../Routes/Router";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8d99ae",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Rout>
        <Router />
      </Rout>
    </ThemeProvider>
  );
}

export default App;
