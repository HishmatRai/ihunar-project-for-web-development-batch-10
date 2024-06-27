import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import Button from '@mui/material/Button';
const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/gallery")}>Gallery</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={() => navigate("/function")}>Function</button>
        <button onClick={() => navigate("/class")}>Class</button>
        <button onClick={() => navigate("/sign-up")}>Sign Up</button>
        {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
      </div>
      <h3 style={{color:props.color}}>{props.title}</h3>
    </div>
  );
};
export default Navbar;
