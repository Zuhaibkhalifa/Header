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
<<<<<<< HEAD
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
=======
import { Box, Container, Grid, Link } from "@mui/material";
import { color } from "@mui/system";

const Footer = () => {
  return (
    <Box bgcolor={"#2b2d42"}>
      <Container maxWidth="lg">
        <h3 className="Foot">Footer</h3>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1} color={"#edf2fd"}>
              Company
            </Box>
            <Box>
              <Link href="/aboutus" color={"#edf2fd"}>
                About Us
              </Link>
            </Box>
            <Box>
              <Link href="blog" color={"#edf2fd"}>
                Blog
              </Link>
            </Box>
            <Box>
              <Link href="partnership" color={"#edf2fd"}>
                Partnership
              </Link>
            </Box>
            <Box>
              <Link href="careers" color={"#edf2fd"}>
                Careers
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1} color={"#edf2fd"}>
              Resources
            </Box>
            <Box>
              <Link href="/" color={"#edf2fd"}>
                Application
              </Link>
            </Box>
            <Box>
              <Link href="/" color={"#edf2fd"}>
                Documentation
              </Link>
            </Box>
            <Box>
              <Link href="/" color={"#edf2fd"}>
                System
              </Link>
            </Box>
            <Box>
              <Link href="/" color={"#edf2fd"}>
                FAQ
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1} color={"#edf2fd"}>
              Social
            </Box>
            <Box>
              <Link href="/" color={"#edf2fd"}>
                Facebook
              </Link>
            </Box>
            <Box>
              <Link href="/" color={"#edf2fd"}>
                Twitter
              </Link>
            </Box>
            <Box>
              <Link href="/" color={"#edf2fd"}>
                Instagram
              </Link>
            </Box>
            <Box>
              <Link href="/" color={"#edf2fd"}>
                Linkedin
              </Link>
            </Box>
          </Grid>
        </Grid>
>>>>>>> 17f0f9bba7cb8d7110c4794ec2e87575acd561dc
      </Container>
    </Box>
  );
};

export default Footer;
