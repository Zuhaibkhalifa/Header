import React from "react";
import { BrowserRouter as Rout } from "react-router-dom";
import Router from "../Routes/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "rgba(0,0,0)",
    },
    secondary: {
      main: "#828089",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
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
