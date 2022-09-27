import React from "react";
import { BrowserRouter as Rout } from "react-router-dom";
import Router from "../Routes/Router";
<<<<<<< HEAD
import { createTheme, ThemeProvider } from "@mui/material/styles";
=======
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
>>>>>>> 17f0f9bba7cb8d7110c4794ec2e87575acd561dc

const theme = createTheme({
  palette: {
    primary: {
<<<<<<< HEAD
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
=======
      main: "#2b2d42",
    },
>>>>>>> 17f0f9bba7cb8d7110c4794ec2e87575acd561dc
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
