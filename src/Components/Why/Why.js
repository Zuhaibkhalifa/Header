import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import l1 from "../../Assets/Images/l1.png";
import l2 from "../../Assets/Images/l2.png";
import l3 from "../../Assets/Images/l3.png";
import l4 from "../../Assets/Images/l4.png";

import "../../Assets/Styles/why.scss";

function Why() {
  return (
    <Box sx={{ height: "60vh" }} id="Why">
      <Typography variant="h3" align="center" sx={{ fontWeight: 700 }}>
        Why Choose Us
      </Typography>
      <Grid container spacing={4} sx={{ width: "80%", margin: "auto" }}>
        <Grid item xs={3}>
          <Paper elevation={8} className="Paper">
            <div className="back">
              <img src={l1} alt="le" className="logo" />
            </div>

            <Box sx={{ mt: 5, p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Well Documentation
              </Typography>
              <Typography variant="p" className="typo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor
                ornare in mattis
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={8} className="Paper">
            <div className="back">
              <img src={l2} alt="l2" className="logo"></img>
            </div>
            <Box sx={{ mt: 5, p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Live Support
              </Typography>
              <Typography variant="p" className="typo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor
                ornare in mattis
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={8} className="Paper">
            <div className="back">
              <img src={l3} alt="l3" className="logo"></img>
            </div>
            <Box sx={{ mt: 5, p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Free Resource
              </Typography>
              <Typography variant="p" className="typo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor
                ornare in mattis
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={8} className="Paper">
            <div className="back">
              <img src={l4} alt="l4" className="logo"></img>
            </div>
            <Box sx={{ mt: 5, p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Regular Update
              </Typography>
              <Typography variant="p" className="typo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor
                ornare in mattis
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Why;
