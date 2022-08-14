import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AbcRoundedIcon from '@mui/icons-material/AbcRounded';

<<<<<<< Updated upstream

const Header= () =>{  
  return (
  <div className='navbar'>
    <AbcRoundedIcon style={{fontSize:'60pt',marginLeft:'20px',width:'5%'}}/>
    
    <div className='navbar1'>
      <Link to="/" style={{textDecoration: 'none',color:"black"}}>Home</Link>
   
      <Link to="/About" style={{textDecoration: 'none',color:"black"}}>About</Link>
    
      <Link to="/Contact" style={{textDecoration: 'none', color:"black"}}>Contact</Link>
      </div>

      <Link to="/form" style={{textDecoration: 'none', color:"black",marginRight:'40px'}}>
        Register
      </Link>

      
   
  </div>
=======
const Header = () => {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        Home
      </Link>

      <Link to="/About" style={{ textDecoration: "none", color: "black" }}>
        About
      </Link>

      <Link to="/Contact" style={{ textDecoration: "none", color: "black" }}>
        Contact
      </Link>

      <Link to="/form" style={{ textDecoration: "none", color: "black" }}>
        Sign In
      </Link>
      <Link to="/form" style={{ textDecoration: "none", color: "black" }}>
        Sign up
      </Link>
    </div>
>>>>>>> Stashed changes
  );
};
export default Header;
