import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll"; 
import "./Home.css";

function Home() {
  return (
    <div className="home-page"> {/* Apply Dark Theme to Home */}
      <section className="landing">
        {/* Profile Picture */}
        <motion.div 
          className="profile-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img 
            src="your-photo.jpg" 
            alt="Vignesh" 
            className="profile-pic"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Name */}
        <h1 className="name">Hi, I'm Vignesh Venkatasubramani</h1>

        {/* Typewriter Effect */}
        <p className="typewriter">
          <Typewriter
            words={[
              "Engineering Product Manager & Business Analyst",
              "Chess Player | Tech Enthusiast",
              "Innovator | Problem Solver"
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={5000}
          />
        </p>

        {/* Quote */}
        <motion.p 
          className="quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          "The only way to do great work is to love what you do!"
        </motion.p>

        {/* Buttons */}
        <div className="buttons">
          <motion.a
            href="/resume.pdf"
            download="Vignesh_Venkatasubramani_Resume.pdf"
            className="resume-btn"
            whileHover={{ scale: 1.1 }}
          >
            Resume 
          </motion.a>
          <Link to="contact" smooth={true} duration={800} className="contact-btn">
            Contact Me 📩
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
