import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

<<<<<<< HEAD

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
  )
}
=======
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
>>>>>>> 152161c1e8052d6ccc3636eeae193b1f7b7b4fa7

export default Header;



