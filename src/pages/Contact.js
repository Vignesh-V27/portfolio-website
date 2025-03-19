import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";
import "./Section.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        {/* Contact Information */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to me.</p>
          <div className="contact-details">
            <p><FaEnvelope className="contact-icon" /> <a href="mailto:venkatasubramani.v@northeastern.edu">venkatasubramani.v@northeastern.edu</a></p>
            <p><FaPhone className="contact-icon" /> +1 (857) 488-2655</p>
            <p><FaLinkedin className="contact-icon" /> <a href="https://www.linkedin.com/in/vigneshvenkatasubramani/">LinkedIn Profile</a></p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Contact;
