import { createTheme } from "@mui/system";
import { makeStyles } from "@mui/material/styles";

const colors = {
  primary: "#edf2fd",
  secondary: "#8d99ae",
  highlight: "#2b2d42",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
});
export default theme;
