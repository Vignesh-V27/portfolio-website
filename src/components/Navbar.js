import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={800}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={800}>About</Link></li>
          <li><Link to="education" smooth={true} duration={800}>Education</Link></li>
          <li><Link to="experience" smooth={true} duration={800}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={800}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={800}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
