import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AbcRoundedIcon from "@mui/icons-material/AbcRounded";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState();

  return (
    <div className="navbar">
      <AbcRoundedIcon
        style={{ fontSize: "60pt", marginLeft: "20px", width: "5%" }}
      />

      <div className="navbar1">
        <Link
          className={active === "/" ? "aactive" : false}
          onClick={() => setActive("/")}
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Home
        </Link>

        <Link
          className={active === "/About" ? "aactive" : false}
          onClick={() => setActive("/About")}
          to="/About"
          style={{ textDecoration: "none", color: "black" }}
        >
          About
        </Link>

        <Link
          className={active === "/Contact" ? "aactive" : false}
          onClick={() => setActive("/Contact")}
          to="/Contact"
          style={{ textDecoration: "none", color: "black" }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
