<<<<<<< HEAD
import React from "react";
import { Box, Typography, Button, Grid, Paper, TextField } from "@mui/material";
import Header from "../Common/Header/Header";
import background from "../../Assets/Images/background.png";
import javaS from "../../Assets/Images/javaS.png";
import net from "../../Assets/Images/net.png";
import vue from "../../Assets/Images/vue.png";
import tool from "../../Assets/Images/tool.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "../../Assets/Styles/home.scss";

const icons = {
  position: "absolute",
  zIndex: 1,
  filter: "drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1))",
  borderRadius: "5px",
=======
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";

import "./Home.css";
import React from "react";

import { useState } from "react";
import {Table,
TableBody,
TableCell,
TableContainer,
TableHead,
TableRow,
Paper,
} from "@mui/material";

const Home = () => {
  const [table, setTable] = useState([]);

  const submit = () => {
    axios.get("https://dummy-server123.herokuapp.com/user").then((response) => {
      console.log(response);
      setTable(response.data.data);
    });
  };

  return (
    <>

    <Button onClick={submit} variant="outlined">Get Data</Button>
    <Box>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ maxWidth: "100%" }}
                    size="large"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="left" sx={{display: "none"}}>ID</TableCell>
                        <TableCell align="center" sx={{width: "30%"}}>Name</TableCell>
                        <TableCell align="center" sx={{width: "30%"}}>Email</TableCell>
                        <TableCell align="center" sx={{width: "30%"}}>Message</TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
              </Box>
    {
      table.map((value)=> {
        return (
          <Box>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: "100%" }}
                    size="medium"
                    aria-label="a dense table"
                  >
                    {/* <TableHead>
                      <TableRow>
                      <TableCell align="left">ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Message</TableCell>
                      </TableRow>
                    </TableHead> */}
                    <TableBody>
                      <TableRow>
                        <TableCell align="left" sx={{display: "none"}}>{value._id}</TableCell>
                        <TableCell align="center" sx={{width: "33%"}}>{value.name}</TableCell>
                        <TableCell align="center" sx={{width: "35%"}}>{value.email}</TableCell>
                        <TableCell align="center" sx={{width: "40%"}}>{value.message}</TableCell><br/>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
        )
      })
    }

      <Button onClick={submit}>Get</Button>
      {table.map((value) => {
        return (
          <Box>
            <Typography>{value.name}</Typography>
            <Typography>{value.email}</Typography>
            <Typography>{value.message}</Typography>
            <br />
          </Box>
        );
      })}

    </>
  );
>>>>>>> 17f0f9bba7cb8d7110c4794ec2e87575acd561dc
};

function Home() {
  return (
    <div className="hidden">
      <Header />
      <Box
        sx={{
          ...icons,
          right: "250px",
          top: "220px",
        }}
      >
        <img src={background} alt="Ang"></img>
      </Box>
      <Box
        sx={{
          ...icons,
          right: "540px",
          top: "450px",
        }}
      >
        <img src={javaS} alt="Javs"></img>
      </Box>
      <Box
        sx={{
          ...icons,
          right: "80px",
          top: "500px",
        }}
      >
        <img src={net} alt="net"></img>
      </Box>
      <Box
        sx={{
          ...icons,
          right: "340px",
          top: "600px",
        }}
      >
        <img src={vue} alt="vue"></img>
      </Box>
      <Box
        sx={{
          ...icons,
          right: "620px",
          top: "260px",
        }}
      >
        <img src={tool} alt="tools"></img>
      </Box>
      <Box
        sx={{
          width: "885px",
          height: "891px",
          top: "-109px",
          right: "-200px",
          position: "absolute",
          borderRadius: "50%",
          background:
            "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
          transform: "rotate(-180deg)",
        }}
      ></Box>
      <Box sx={{ position: "absolute", top: "254px", left: "200px" }}>
        <Grid container sx={{ width: "700px", mb: 5 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "70px", fontWeight: "700", mb: 5 }}
          >
            World Top <span className="span">Themes, Plugins & Templates</span>
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "22px",
              fontWeight: "600",
              lineHeight: "30px",
              color: "#828089",
              width: "600px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            ultricies habitant eget volutpat ut aenean in dolor. Praesent mi
            velit in id hac platea leo vulputate.
          </Typography>
        </Grid>
        <Grid sx={{ width: "550px" }}>
          <Paper elevation={5}>
            <TextField
              variant="standard"
              InputProps={{ disableUnderline: true }}
              color="primary"
              sx={{ p: 2, width: "405px", borderBottom: "none" }}
              placeholder="e.g. “wordpress”"
            />

            <Button
              startIcon={<SearchRoundedIcon />}
              sx={{
                textTransform: "none",
                mt: 0.5,
                p: 1.5,
                fontSize: "18px",
                background:
                  "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
              }}
              aria-label="menu"
            >
              Search
            </Button>
          </Paper>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
