import React from 'react';
import {  Link } from "react-router-dom";
import "./Header.css";


const Header= () =>{
  return (
  <div className='navbar'>
    
    
      <Link to="/" style={{textDecoration: 'none',color:"black"}}>Home</Link>
   
      <Link to="/About" style={{textDecoration: 'none',color:"black"}}>About</Link>
    
      <Link to="/Contact" style={{textDecoration: 'none', color:"black"}}>Contact</Link>

      <Link to="/form" style={{textDecoration: 'none', color:"black"}}>Sign In</Link>
      <Link to="/form" style={{textDecoration: 'none', color:"black"}}>Sign up</Link>
   
  </div>
  );
}
export default Header;