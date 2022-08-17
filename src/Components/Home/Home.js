import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
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

  const [table,setTable] = useState([])

  const submit = () => {
    axios.get("https://dummy-server123.herokuapp.com/user")
    .then((response) =>{
      console.log(response);
      setTable(response.data.data)
    })
  }

  return(
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
    </>
  )
}

export default Home;