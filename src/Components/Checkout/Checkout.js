import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import React from "react";
import "../../Assets/Styles/Checkout.scss";
import i1 from "../../Assets/Images/product 1.png";
import i2 from "../../Assets/Images/la2.png";
import i3 from "../../Assets/Images/i3.png";
import i4 from "../../Assets/Images/i4.png";
import i5 from "../../Assets/Images/i5.png";
import i6 from "../../Assets/Images/i6.png";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const button = {
  mr: 5,
  fontSize: 20,
  p: 1.5,
  textTransform: "none",
  "&:hover": {
    background: "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
    color: "white",
  },
};

const Preview = {
  textTransform: "none",
  mr: 2,
  pr: 5,
  pl: 5,
};

const cart = {
  fontSize: 30,
  color: "white",
  borderRadius: "10px",
  p: 0.8,
  background: "linear-gradient(238.66deg, #0283e9 -18.13%, #fc01ca 120.27%) ",
};


function Checkout() {
  return (
    <Box id="Check">
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 700, pt: 20, pb: 5 }}
      >
        Let’s Check Out News Product Theme Templates & Plugin
      </Typography>
      <Box>
        <AppBar
          position="static"
          sx={{
            flexGrow: 1,
            width: "80%",
            padding: 1,
            borderRadius: "10px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <Toolbar>
            <Box>
              <Button
                color="inherit"
                sx={{
                  ...button,
                }}
              >
                All Categories
              </Button>
              <Button
                color="inherit"
                sx={{
                  ...button,
                }}
              >
                HTML Design
              </Button>
              <Button
                color="inherit"
                sx={{
                  ...button,
                }}
              >
                WP Themes
              </Button>
              <Button
                color="inherit"
                sx={{
                  ...button,
                }}
              >
                CMS Themes
              </Button>
              <Button
                color="inherit"
                sx={{
                  ...button,
                }}
              >
                eCommerce
              </Button>
              <Button
                color="inherit"
                sx={{
                  ...button,
                }}
              >
                Blogging
              </Button>
              <Button
                color="inherit"
                sx={{
                  ...button,
                }}
              >
                UI Templates
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Grid container spacing={4} sx={{ width: "80%", mt: 5, ml: 22 }}>
          <Grid item xs={3}>
            <Paper elevation={8} sx={{ height: "334px" }}>
              <div className="image">
                <img className="image-img" src={i2} alt="image" />
                <div className="overlay">
                  <Button
                    variant="outlined"
                    sx={{
                      ...Preview,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...cart,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    ml: 2,
                  }}
                >
                  Monstroid2 - Multipurpose Mo...
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
          <Grid item xs={3}>
            <Paper elevation={8} sx={{ height: "334px" }}>
              <div className="image">
                <img className="image-img" src={i1} alt="image" />
                <div className="overlay">
                  <Button
                    variant="outlined"
                    sx={{
                      ...Preview,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...cart,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    ml: 2,
                  }}
                >
                  Hazel - Clean Minimalist Multi...
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
          <Grid item xs={3}>
            <Paper elevation={8} sx={{ height: "334px" }}>
              <div className="image">
                <img className="image-img" src={i2} alt="image" />
                <div className="overlay">
                  <Button
                    variant="outlined"
                    sx={{
                      ...Preview,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...cart,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    ml: 2,
                  }}
                >
                  Techno - IT Solutions & Business...
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
          <Grid item xs={3}>
            <Paper elevation={8} sx={{ height: "334px" }}>
              <div className="image">
                <img className="image-img" src={i3} alt="image" />
                <div className="overlay">
                  <Button
                    variant="outlined"
                    sx={{
                      ...Preview,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...cart,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    ml: 2,
                  }}
                >
                  PathSoft - IT Solutions for Your ...
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
          <Grid item xs={3}>
            <Paper elevation={8} sx={{ height: "334px" }}>
              <div className="image">
                <img className="image-img" src={i4} alt="image" />
                <div className="overlay">
                  <Button
                    variant="outlined"
                    sx={{
                      ...Preview,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...cart,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    ml: 2,
                  }}
                >
                  Brave Theme Multipurpose HTML
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
          <Grid item xs={3}>
            <Paper elevation={8} sx={{ height: "334px" }}>
              <div className="image">
                <img className="image-img" src={i5} alt="image" />
                <div className="overlay">
                  <Button
                    variant="outlined"
                    sx={{
                      ...Preview,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...cart,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    ml: 2,
                  }}
                >
                  Technology & IT Solution Servic...
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
          <Grid item xs={3}>
            <Paper elevation={8} sx={{ height: "334px" }}>
              <div className="image">
                <img className="image-img" src={i6} alt="image" />
                <div className="overlay">
                  <Button
                    variant="outlined"
                    sx={{
                      ...Preview,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      ...cart,
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    ml: 2,
                  }}
                >
                  Techno - IT Solutions & Business...
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
          <Grid item xs={3}>
            <Paper elevation={8} sx={{ height: "334px" }}>
              <div className="image">
                <img className="image-img" src={i1} alt="image" />
                <div className="overlay">
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      mr: 2,
                      pr: 5,
                      pl: 5,
                    }}
                  >
                    Preview
                  </Button>
                  <ShoppingCartIcon
                    sx={{
                      fontSize: 30,
                      color: "white",
                      borderRadius: "10px",
                      p: 0.8,
                      background:
                        "linear-gradient(238.66deg, #0283e9 -18.13%, #fc01ca 120.27%) ",
                    }}
                  />
                </div>
              </div>
              <Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    ml: 2,
                  }}
                >
                  PathSoft - IT Solutions for Your ...
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

export default Checkout;
