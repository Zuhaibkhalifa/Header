import React from "react";
import { Box, Container, Grid, Link } from "@mui/material";
import { color } from "@mui/system";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h3 className="Foot">Footer</h3>
      <Box bgcolor={"#2b2d42"}>
        <Container maxWidth="lg">
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
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
