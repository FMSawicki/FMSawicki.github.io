import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div id="navBarMain">
        {/* Logo picture will be NavLink  for Landing component */}

        <NavLink className="navLinks" to="about">
          About Me
        </NavLink>

        <NavLink className="navLinks" to="projects">
          Projects
        </NavLink>

        {/* <NavLink to="contact" activeStyle={{ color: "white" }}>
                Contact 
              </NavLink> */}

        <NavLink className="navLinks" to="/">
          <img src={Logo} className="logo" alt="logo" />
        </NavLink>

        <a className="navLinks" href="#">
          LinkedIn
        </a>

        <a className="navLinks" href="#">
          GitHub
        </a>
      </div>
    );
  }
}
export default Navbar;
