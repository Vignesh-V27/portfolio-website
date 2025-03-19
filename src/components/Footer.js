import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        
        {/* ✅ Email on the Left */}
        <p className="footer-email">
          <FaEnvelope className="footer-icon" />
          <strong>Email:</strong>
          <a href="mailto:venkatasubramani.v@northeastern.edu"> venkatasubramani.v@northeastern.edu</a> |
          <a href="mailto:vignesh.venkatasubramani@gmail.com"> vignesh.venkatasubramani@gmail.com</a>
        </p>

        {/* ✅ Phone in the Center */}
        <p className="footer-phone">
          <FaPhone className="footer-icon" />
          <strong>Phone:</strong>
          <a href="tel:+18574882655"> +1 (857) 488-2655</a>
        </p>

        {/* ✅ LinkedIn on the Right */}
        <p className="footer-linkedin">
          <FaLinkedin className="footer-icon" />
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/vigneshvenkatasubramani/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/vigneshvenkatasubramani
          </a>
        </p>

      </div>
    </div>
  );
}

export default Footer;
