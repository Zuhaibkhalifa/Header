import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";

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
    <Button onClick={submit} >Get</Button>
    {
      table.map((value)=> {
        return (
          <Box>
            <Typography>{value.name}</Typography>
            <Typography>{value.email}</Typography>
            <Typography>{value.message}</Typography><br/>
          </Box>
        )
      })
    }
    </>
  )
}

export default Home;