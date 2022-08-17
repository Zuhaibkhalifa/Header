
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
  
    return(
        <Container sx={{ position: "relative",  height: "100vh",width: "100%",top:70 }}maxWidth="large">
          <Grid container spacing={10}>
          <Grid item sm={6} sx={{height:"850px"}}className="bg">

            </Grid>
            <Grid item sm={6} className="bg">

            </Grid>
          </Grid>
        </Container>
    )

}

export default About;