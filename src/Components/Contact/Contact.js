import React, { useState } from "react";
import {
  Grid,
  Container,
  Button,
  TextField,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ThemeProvider } from "styled-components";
import theme from "./Styles";
import axios from "axios";
import "./contact.css";
// import { Styled } from "@mui/system";

// const useStyles = Styled({
//   btn: {
//     fontSize: 20,
//     "&:hover": {
//       backgroundColor: "#65f",
//       color: "#5d8",
//     },
//   },
// });

function Contact() {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [massage, setMassage] = useState();
  const [data, setData] = useState({});

  const handleClick = () => {
    if (name !== "" && mail !== "") {
      axios
        .post("https://dummy-server123.herokuapp.com/user", {
          name: name,
          email: mail,
          message: massage,
        })
        .then((response) => {
          // handle success
          setData(response.data.data);
          console.log(response.data.data);
          alert("success");
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    } else alert("please fill the form");

    reset();
  };

  const reset = () => {
    setMail("");
    setName("");
    setMassage("");
  };
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ width: "100%", position: "relative", top: 100, height: "81.9vh" }}
        maxWidth="lg"
      >
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <div className="forms">
              <h1>Contact Us</h1>
              <h3>Our friendly team would love to here from you</h3>
              <div className="inner-form">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                  type="text"
                />
                <Box width="350px">
                  <TextField
                    id="outlined-basic"
                    label="Massage"
                    fullWidth
                    placeholder="Enter Your Massage"
                    multiline
                    rows={4}
                    required
                    variant="outlined"
                    onChange={(e) => setMassage(e.target.value)}
                    value={massage}
                    type="text"
                  />
                </Box>
              </div>
            </div>
            <Button
              onClick={handleClick}
              // className={classes.btn}
              // sx={{ backgroundColor: "#8d99ae" }}
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              submit
            </Button>
            {data !== true ? (
              <Box>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: "100%" }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Massage</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {data.name}
                        </TableCell>
                        <TableCell align="left">{data.email}</TableCell>
                        <TableCell align="left">{data.message}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={6}>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30970.92225380132!2d74.5397454!3d13.99634195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc431e28dabfab%3A0x7060a42cfeac9a4!2sBhatkal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1660458205021!5m2!1sen!2sin"
                style={{ width: 600, height: 450, border: 0, loading: "lazy" }}
                title="myFrame"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Contact;
