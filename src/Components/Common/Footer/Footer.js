import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 20,
        height: "550px",
        background: "#2B2B2B",
      }}
    >
      <Box sx={{ height: "180px", background: "#FFFFFF", opacity: 0.12 }}></Box>
      <Box sx={{ position: "relative", bottom: 180 }}>
        <Typography
          inline
          variant="h5"
          align="center"
          component="span"
          sx={{ color: "#FFFFFF", position: "relative", top: 70, left: 610 }}
        >
          Newsletter
        </Typography>
        <Paper
          sx={{
            width: "400px",
            margin: "auto",
            textAlign: "end",
            p: 1.5,
            position: "relative",
            top: 20,
            zIndex: 1,
          }}
        >
          <TextField
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ width: "350px", position: "relative", top: 5 }}
            placeholder="Your Email"
          ></TextField>
          <TelegramIcon
            sx={{
              cursor: " pointer",
              p: 1,
              borderRadius: "10px",
              color: "white",
              background:
                "linear-gradient(238.66deg,#0283e9 -18.13%, #fc01ca 120.27%)",
            }}
          />
        </Paper>
      </Box>
      <Container sx={{ mt: 10 }}>
        <Grid container xs={12} justifyContent="space-between">
          <Typography color="white" inline>
            <a href="#">Home</a>
          </Typography>

          <Typography color="white" inline>
            <a href="#Why"> Why Choose Us</a>
          </Typography>
          <Typography color="white" inline>
            <a href="#F"> Featured Products</a>
          </Typography>
          <Typography color="white" inline>
            <a href="#Check"> News Product</a>
          </Typography>
          <Typography color="white" inline>
            <a href="#O">Our Clients</a>
          </Typography>
          <Typography color="white" inline>
            <a href="#News"> Latest News</a>
          </Typography>
        </Grid>
        <Box sx={{ position: "relative", top: 100 }}>
          <Grid container xs={12} justifyContent="center">
            <Typography inline color="white">
              <CopyrightIcon />
            </Typography>
            <Typography inline color="white" sx={{ ml: 4 }}>
              2021 JS Template. Designd By Ojjomedia All Rights Reserved
            </Typography>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
