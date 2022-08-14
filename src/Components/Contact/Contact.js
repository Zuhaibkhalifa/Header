import React from "react";
import { Grid, Container, TextField, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function Contact() {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <div className="form">
            <h1>Contact Us</h1>
            <p>Our friendly team would love to here from you</p>
            <label>
              Name
              <TextField id="outlined-basic" variant="outlined" />
            </label>
            <label>
              Email
              <TextField id="outlined-basic" variant="outlined" />
            </label>
            <label>
              Masssage
              <TextField id="story" name="story" multiline="true" minRows="5">
                It was a dark and stormy night...
              </TextField>
            </label>
            <Button variant="contained">submit</Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30970.92225380132!2d74.5397454!3d13.99634195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc431e28dabfab%3A0x7060a42cfeac9a4!2sBhatkal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1660458205021!5m2!1sen!2sin"
              style={{ width: 600, height: 450, border: 0, loading: "lazy" }}
              title="myFrame"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
