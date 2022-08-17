
import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import "./About.css";

const About = () => {

  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [message, setMessage] = useState({});

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (em) => {
    setEmail(em.target.value);
  };

  const handleMessage = (msg) => {
    setMessage(msg.target.value);
  };

  const handleClick = () => {
      axios.post("https://dummy-server123.herokuapp.com/user",{
        name : name,
        email : email,
        message : message
      } ).then((x) => {
        console.log(x);
      },(e) => {
        console.log(e)
      })
  };
  
    return(
        <Container sx={{ position: "relative",  height: "100vh",width: "100%",top:70 }}maxWidth="large">
            <Grid container spacing={10}>
                <Grid item sm={6} sx={{backgroundColor: "#8d99ae"}}>
                <Box className="for">
                <Typography
                variant="h5"
                component="h5"
                
              >
                Enter your details below
              </Typography>
            <Box className="inner">
              <TextField
                // sx={{ width: "70%"}}
                id="outlined-basics"
                label="username"
                variant="outlined"
                onChange={handleName}
              ></TextField>
              <TextField
                // sx={{ width: "70%"}}
                id="outlined-basics"
                label="Email"
                variant="outlined"
                onChange={handleEmail}
              ></TextField>
              <TextField
                // sx={{ width: "70%"}}
                id="outlined-basics"
                label="Message"
                multiline
                variant="outlined"
                cols="10"
                rows="5"
                onChange={handleMessage}
              ></TextField>
              <Button
                className="btn"
                variant="outlined"
                onClick={handleClick}
                sx={{
                  width:"30%",
                  m:"auto",
                  backgroundColor: "#8d99ae",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
          
                </Grid>
                <Grid item sm={6} className="bg">

                </Grid>
            </Grid>
        </Container>
    )

}

export default About;