import React from "react";
import { Box, Container, Grid, Link } from "@mui/material";
import { color } from "@mui/system";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Box bgcolor={"#2b2d42"}>
        <Container maxWidth="lg">
          <h3 className="Foot">Footer</h3>
          <Grid container spacing={5}>
            <Grid item xs={3} sm={4}>
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
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
