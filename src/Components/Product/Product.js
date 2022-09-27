import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import React from "react";
import "../../Assets/Styles/Checkout.scss";
import P2 from "../../Assets/Images/product 2.png";
import P1 from "../../Assets/Images/product 1.png";
import P3 from "../../Assets/Images/product 3.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pre = {
  textTransform: "none",
  mr: 2,
  pr: 5,
  pl: 5,
};
const shop = {
  fontSize: 30,
  color: "white",
  borderRadius: "10px",
  p: 0.8,
  background: "linear-gradient(238.66deg, #0283e9 -18.13%, #fc01ca 120.27%) ",
};

const para = {
  fontSize: "27px",
  alignItems: "center",
  textAlign: "center",
  ml: 2,
};

function Product() {
  return (
    <Box id="F" sx={{ height: "100vh", backgroundColor: "#F4F4F4" }}>
      <Box sx={{ pt: 20 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700 }}>
          Featured Product
        </Typography>
        <Grid container spacing={4} sx={{ width: "80%", margin: "auto" }}>
          <Grid item xs={4}>
            <Paper elevation={8} sx={{ height: "445px" }}>
              <div className="image">
                <img className="image-img2" src={P1} alt="image" />
                <div className="overlay2">
                  <Button
                    variant="outlined"
                    sx={{
                      ...pre,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...shop,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    ...para,
                  }}
                >
                  Hazel - Clean Minimalist Multi-Pu...
                </Typography>
                <Grid container sx={{ ml: 2, mt: 4 }}>
                  <Grid item xs={9}>
                    <Typography variant="h5">$50</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="p" color={"secondary"}>
                      258 Sale
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={8} sx={{ height: "445px" }}>
              <div className="image">
                <img className="image-img2" src={P2} alt="image" />
                <div className="overlay2">
                  <Button
                    variant="outlined"
                    sx={{
                      ...pre,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...shop,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    ...para,
                  }}
                >
                  Hazel - Clean Minimalist Multi-Pu...
                </Typography>
                <Grid container sx={{ ml: 2, mt: 4 }}>
                  <Grid item xs={9}>
                    <Typography variant="h5">$50</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="p" color={"secondary"}>
                      258 Sale
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={8} sx={{ height: "445px" }}>
              <div className="image">
                <img className="image-img2" src={P3} alt="image" />
                <div className="overlay2">
                  <Button
                    variant="outlined"
                    sx={{
                      ...pre,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...shop,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    ...para,
                  }}
                >
                  Hazel - Clean Minimalist Multi-Pu...
                </Typography>
                <Grid container sx={{ ml: 2, mt: 4 }}>
                  <Grid item xs={9}>
                    <Typography variant="h5">$50</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="p" color={"secondary"}>
                      258 Sale
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Box sx={{ margin: "auto" }}>
            <Button
              variant="contained"
              sx={{
                fontSize: "16px",
                textTransform: "none",
                color: "white",
                mt: 5,
                background:
                  "linear-gradient(238.66deg, #0283e9 -18.13%, #fc01ca 120.27%)",
              }}
            >
              View All Product
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default Product;
