import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import "./Home.css";
import react from "react";

const Home = () => {
  // <<<<<<< HEAD
  //   const [massage, setMassage] = useState(null);
  //   useEffect(() => {
  //     const curr = axios
  //       .get("https://dummy-server123.herokuapp.com/")
  //       .then((data) => {
  //         setMassage(data.data);
  //         console.log(data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);
  //   return (
  //     <div>
  //       {massage && (
  //         <div>
  //           <h1>{massage.status}</h1>
  //           <h2>{massage.data}</h2>
  //         </div>
  //       )}
  //     </div>
  // =======

  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [message, setMessage] = useState({});

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (em) => {
    setEmail(em.target.value);
  };

  const handleMessage = (msg) => {
    setMessage(msg.target.value);
  };

  const handleClick = () => {
    console.log(name, email, message);
  };

  // if(name !== "" && email != ""){
  //   axios.post("https://dummy-server123.herokuapp.com/",{
  //     user_name : name,
  //     eamil : email,
  //     test : message
  //   } ).then((x) => {
  //     console.log(x);
  //   },(e) => {
  //     console.log(e)
  //   })
  //   }else alert("Please fill the form");

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Container>
          <Box
            sx={{
              bgcolor: "#8d99ae",
              height: "100vh",
              width: "110%",
              position: "relative",
              left: "10px",
            }}
          >
            <Box className="form">
              <Typography
                variant="h5"
                component="h5"
                sx={{ textAlign: "center", pl: 20 }}
              >
                Enter your details below
              </Typography>
              <TextField
                sx={{ width: "70%", mt: 3, ml: 11 }}
                id="outlined-basics"
                label="username"
                variant="outlined"
                onChange={handleName}
              ></TextField>
              <TextField
                sx={{ width: "70%", mt: 2, ml: 11 }}
                id="outlined-basics"
                label="Email"
                variant="outlined"
                onChange={handleEmail}
              ></TextField>
              <TextField
                sx={{ width: "70%", mt: 2, ml: 11 }}
                id="outlined-basics"
                label="Message"
                multiline
                variant="outlined"
                rows={10}
                onChange={handleMessage}
              ></TextField>
              <Button
                variant="outlined"
                onClick={handleClick}
                sx={{
                  marginTop: 5,
                  marginLeft: 30,
                  bgcolor: "#2b2d42",
                  padding: "10px 30px",
                }}
              >
                Submit
              </Button>
            </Box>
            <Typography className="head" variant="h3" component="h3">
              Library Registration Form
            </Typography>
          </Box>
        </Container>
        <Container>
          <Box
            className="back"
            sx={{
              height: "100vh",
              width: "900px",
              marginLeft: -3,
              position: "relative",
              left: "15px",
            }}
          ></Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
