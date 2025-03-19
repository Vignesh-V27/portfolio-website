import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  // Set document title
  useEffect(() => {
    document.title = "Vignesh Venkatasubramani Portfolio";
  }, []);

  // Global Theme State
  const [theme, setTheme] = useState("dark"); // Default is dark mode

  // Toggle Theme Function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`app ${theme}-mode`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Element name="home"><Home theme={theme} /></Element>
      <Element name="about"><About theme={theme} /></Element>
      <Element name="education"><Education theme={theme} /></Element>
      <Element name="experience"><Experience theme={theme} /></Element>
      <Element name="projects"><Projects theme={theme} /></Element>
      <Element name="contact"><Contact theme={theme} /></Element>
      <Footer />
    </div>
  );
}

export default App;
