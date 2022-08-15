import React from "react";
import { Grid, Container, Button } from "@mui/material";
import "./contact.css";

function Contact() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <div className="form">
            <h1>Contact Us</h1>
            <h3>Our friendly team would love to here from you</h3>
            <div className="inner-form">
              <label placeholder="Name" htmlFor="name">
                Name
              </label>
              <input id="name" type="text" />
              <label placeholder="Email" htmlFor="email">
                email
              </label>
              <input id="email" type="text" />

              <label htmlFor="story">Masssage</label>
              <textarea
                placeholder="Enter the massage"
                id="story"
                name="story"
                cols="10"
                rows="5"
              ></textarea>
            </div>
          </div>
          <Button sx={{ backgroundColor: "#8d99ae" }} variant="contained">
            submit
          </Button>
        </Grid>
        <Grid item xs={6}>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30970.92225380132!2d74.5397454!3d13.99634195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc431e28dabfab%3A0x7060a42cfeac9a4!2sBhatkal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1660458205021!5m2!1sen!2sin"
              style={{ width: 600, height: 450, border: 0, loading: "lazy" }}
              title="myFrame"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
