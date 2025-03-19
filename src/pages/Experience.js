import React from "react";
import { motion } from "framer-motion";
import { FaCogs } from "react-icons/fa";
import "./Experience.css";

const experiences = [
  {
    title: "Product Marketing Intern",
    company: "Advanced Energy",
    duration: "Sept 2024 – Jan 2025 | Boston, MA",
    logo: "/logos/advanced_energy.png", 
    
    responsibilities: [
      "Integrated 6 product lines into the Pricebook 2.0 SKU by implementing product mapping with VLOOKUP functions with a new power wattage categorization, enabling improved revenue forecasting for 2025–2027.",
      "Recommended 60% decrease in MOQ by calculating Turns Ratio for Part Numbers grouped by product families using Salesforce POS.",
      "Drafted a product roadmap using insights from 750 Voice of Customer (VOC) data points and Kano Model analysis for 3 product lines",
      "Analyzed sales data for SL Power medical devices product line to identify slow-moving products, categorizing 650+ SKUs into different strategic tiers."
    ]
  },
  {
    title: "Application Business Analyst",
    company: "L&T Infotech",
    duration: "Aug 2021 – Jul 2023 | Chennai, India",
    logo: "/logos/lt_infotech.jpg", 
    
    responsibilities: [
      "Executed 2000+ monthly MySQL queries with Navicat to troubleshoot technical issues, resulting in a 19.5% surge in customer rating.",
      "Deployed over 250 ServiceNow deployment requests monthly by the dev team on the respective environment’s Apache web servers.",
      "Prioritized Jira tickets and user stories in the scrum meeting to actively manage issues and minimize production downtime by 72%.",
      "Gathered project requirements from stakeholders and assisted in sprint planning and execution of the 3 successful SaaS products",
      "Cross-functionally developed a form using PHP & JS, leveraging version control to streamline and reduce deployment time by 38%."
    ]
  },
  {
    title: "Head of Product Manager / Co-Founder",
    company: "Warrior Chess Academy",
    duration: "Jan 2020 – Aug 2023 | Chennai, India",
    logo: "/logos/warrior_chess_academy.png", 
    
    responsibilities: [
      "Established a 550+ student base chess academy and implemented a go-to-market strategy leading to a 35% annual growth YoY.",
      "Tracked 210 student records to generate weekly performance reports for the Talent Development Program using Office Suite tools.",
      "Conducted financial modeling & analysis using PowerBI, including Cost/benefit analysis, to improve 30% cost-revenue profit margin.",
      "Implemented budgeting and invoice management, incorporating Customer Acquisition Cost (CAC) analysis, to ensure efficient resource allocation for achieving a 15% profit margin quarterly.",
      "Organized 25+ virtual community outreach to improve Net Promoter Score (NPS) by 43% enhancing the academy’s online branding."
    ]
  }
];

function Experience() {
  return (
    <div className="experience">
      <h1 className="experience-heading">Work Experience</h1>
      <p className="experience-subheading">
        Here's a rundown of my current and past experiences!
      </p>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={`experience-card ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} 
            whileHover={{ scale: 1.07, boxShadow: "0px 10px 30px rgba(255, 152, 0, 0.7)" }}
          >
            <div className="experience-content">
              {/* Company Logo */}
              <img src={exp.logo} alt={exp.company} className="company-logo" />
              
              <div className="experience-header">
                {exp.icon}
                <div>
                  <h2>{exp.title}</h2>
                  <h3>{exp.company} | {exp.duration}</h3>
                </div>
              </div>
              <ul className="experience-list">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}><FaCogs className="list-icon" /> {task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
