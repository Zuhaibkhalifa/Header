import React from "react";
<<<<<<< HEAD
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { styled, alpha } from "@mui/material/styles";

const StyledMenu = styled((props) => (
  <Menu
    disableScrollLock="true "
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "right",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 5,
    marginTop: 4,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    minWidth: 200,

    "& .MuiMenu-list": {
      padding: "8px",
    },

    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "&:hover": {
        background:
          "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
        color: "white",
        borderRadius: 6,
      },
    },
  },
}));

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        width: "80%",
        borderRadius: "10px",
        margin: "auto",
        position: "absolute",
        padding: 2,
        top: "40px",
        left: "0",
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Link sx={{ textDecoration: "none" }}>
                <Avatar
                  sx={{
                    fontSize: "1.5rem",
                    width: "51.77px",
                    height: "52.63px",
                    background:
                      "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
                  }}
                >
                  ZK
                </Avatar>
              </Link>
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "Center",
            }}
          >
            <Typography variant="h4" sx={{ ml: 1.5, fontWeight: 600 }}>
              DigiSell
            </Typography>
            <Box
              sx={{
                flexGrow: 1,

                display: { xs: "none", md: "flex", width: "271px" },
              }}
            >
              <Box
                sx={{
                  ml: 5,
                  width: "298.1px",
                  borderRadius: "5px",
                  background:
                    "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
                }}
              >
                <Button
                  sx={{
                    background:
                      "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
                    color: "white",
                    p: 2,
                    fontSize: "20px",
                    textTransform: "none",
                    borderRadius: "5px",
                  }}
                  onClick={handleClick}
                  variant="standard"
                  startIcon={<WidgetsIcon />}
                  endIcon={<ArrowDropDownIcon sx={{ ml: 20 }} />}
                >
                  Categories
                </Button>
                <StyledMenu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    HTML Design
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    WP Themes
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    CMS Themes
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    eCommerce
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Blogging
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    UI Templates
                  </MenuItem>
                </StyledMenu>
              </Box>
            </Box>
            <Box>
              <IconButton>
                <FavoriteRoundedIcon
                  sx={{
                    color: "white",
                    fontSize: "40px",
                    background:
                      "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
                    p: 1,
                    borderRadius: "5px",
                  }}
                />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <LocalMallIcon
                  sx={{
                    color: "white",
                    fontSize: "40px",
                    background:
                      "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
                    p: 1,
                    borderRadius: "5px",
                  }}
                />
              </IconButton>
            </Box>
            <Box>
              <Button
                startIcon={<PersonIcon fontSize="inherit" />}
                sx={{
                  padding: 1.3,
                  pl: 5,
                  pr: 5,
                  fontWeight: 600,
                  fontSize: "20px",
                  background:
                    "linear-gradient(238.66deg, #0283E9 -18.13%, #FC01CA 120.27%)",
                  textTransform: "none",
                  marginLeft: 3,
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
=======
import { Link } from "react-router-dom";
import "./Header.css";
import AbcRoundedIcon from '@mui/icons-material/AbcRounded';
import {useState} from 'react'


const Header= () =>{  
  const[active,setActive] = useState()

  return (
    
  <div className='navbar'>
   
      <AbcRoundedIcon style={{fontSize:'60pt',marginLeft:'20px',width:'5%'}}/>
 
    
  
    
    <div className='navbar1'>
      <Link className={active ==='/' ? 'aactive': false} onClick={()=> setActive('/') }to="/" style={{textDecoration: 'none',color:"black"}}>Home</Link>
   
      <Link className={active === '/About' ? 'aactive': false} onClick={()=> setActive('/About') }  to="/About" style={{textDecoration: 'none',color:"black"}}>About</Link>
    
      <Link className={active === '/Contact' ? 'aactive': false} onClick={()=> setActive('/Contact')} to="/Contact" style={{textDecoration: 'none', color:"black"}}>Contact</Link>
      </div>


    
  </div>
)}


export default Header;



>>>>>>> 17f0f9bba7cb8d7110c4794ec2e87575acd561dc
