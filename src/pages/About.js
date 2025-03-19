import React from "react";
import { FaDatabase, FaChartLine, FaUserCog, FaLightbulb, FaUsers, FaTools } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="about">
      {/* Intro Section */}
      <div className="about-container">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
          Hi, I'm Vignesh Venkatasubramani! I’m passionate about building products that solve real problems by blending technology, business strategy, and user experience. With a background in Engineering Management and Electrical & Electronics Engineering, I’ve worked across different roles that have shaped my journey toward product management.
          </p>
          <p>
          At Advanced Energy, I worked as a Product Marketing Intern, where I analyzed customer insights, optimized SKU categorization for better revenue forecasting, and helped draft a product roadmap using real user data. Before that, as an Application Business Analyst at L&T Infotech, I collaborated with development teams to improve SaaS products, managed deployment workflows, and played a key role in reducing production downtime.
          </p>
          <p>
          Beyond my corporate experience, I co-founded Warrior Chess Academy, growing it to over 550 students through thoughtful market strategies and data-driven decision-making. This experience helped me understand what it takes to scale a product, listen to users, and continuously improve based on feedback.
          </p>
          <p>
          I love working at the intersection of technology, business, and design, and I get excited about solving problems, optimizing workflows, and creating products that people love to use. Whether it’s analyzing market trends, defining product requirements, or collaborating with cross-functional teams, I enjoy the entire process of bringing an idea to life.
          </p>
          <p>
          Let’s connect and talk about product strategy, user experience, or how technology can drive meaningful change!
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills-container">
          <h2>My Product & Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <FaDatabase className="skill-icon" />
              <span>SQL & Data Analysis</span>
            </div>
            <div className="skill-item">
              <FaChartLine className="skill-icon" />
              <span>Market & Competitive Analysis</span>
            </div>
            <div className="skill-item">
              <FaUserCog className="skill-icon" />
              <span>Product Strategy & Lifecycle</span>
            </div>
            <div className="skill-item">
              <FaLightbulb className="skill-icon" />
              <span>Problem Solving & Decision Making</span>
            </div>
            <div className="skill-item">
              <FaUsers className="skill-icon" />
              <span>Stakeholder Management</span>
            </div>
            <div className="skill-item">
              <FaTools className="skill-icon" />
              <span>Agile & Scrum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
