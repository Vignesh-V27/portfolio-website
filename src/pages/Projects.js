import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "UniPlay – University Centered Sports Community App",
    description:
      "Designed and developed a university-centered sports community app that simplifies the process of finding teammates, forming teams, and scheduling games. Conducted over 50 customer interviews and competitive research to identify user pain points, leading to the creation of an intuitive MRD, PRD, and a strategic pitch deck. Implemented a skill-based matching algorithm to optimize team formation, ensuring balanced competition and user engagement.",
    kpi: "🏆 Runner-up in Product Management class (20 teams)",
    skills: ["Market Research", "Product Roadmap", "UX Wireframing"],
    icon: "📋",
    link: "https://github.com/Vignesh-V27/Uniplay",
    image: "uniplay.jpg",
  },
  {
    title: "Smart Basket Billing System",
    description:
      "Led a strategic initiative to develop an RFID-based smart shopping cart system that automates real-time billing and removes checkout queues. Designed the product roadmap, integrating RFID sensors with digital screens for live transaction updates. Conducted usability testing with simulated store environments, refining the checkout experience. Analyzed customer behavior patterns to optimize store layouts, reducing bottlenecks and increasing transaction speed.",
    kpi: "📊 Increased customer satisfaction by 58.7% through seamless checkout",
    skills: ["Product Strategy", "Automation", "Data Analytics"],
    icon: "🛒",
    link: "https://github.com/Vignesh-V27/Smart-Basket-Billing-System",
    image: "smart-basket.jpg",
  },
  {
    title: "WhatsApp Productivity Tool",
    description:
      "Developed an AI-powered feature that integrates WhatsApp with calendar scheduling to automate meeting reminders. Implemented NLP-based message parsing to detect scheduling intents within chat conversations, reducing manual calendar entries. Enhanced business workflow efficiency by enabling automated availability updates, reducing missed appointments and scheduling conflicts. Conducted A/B testing, refining AI accuracy for seamless user adoption.",
    kpi: "🤖 Predicted to improve user efficiency by 42.3% through AI automation",
    skills: ["AI Integration", "Workflow Automation", "Business Analysis"],
    icon: "🔧",
    link: "https://github.com/Vignesh-V27/WhatsApp-Productivity-Tool",
    image: "whatsapp-tool.jpg",
  },
  {
    title: "House Price Prediction (Statistical Modeling)",
    description:
      "Developed a predictive analytics model to estimate house prices in the Boston area based on key market factors such as location, property features, and economic trends. Used regression modeling and feature engineering to identify top predictive variables. Created a user-friendly dashboard displaying real-time predictions and pricing trends to assist homebuyers and real estate agencies in data-driven decision-making.",
    kpi: "📈 Improved prediction accuracy by 19.4% through data-driven modeling",
    skills: ["Probability and Statistics", "Visualization", "Statistical Modeling"],
    icon: "🏠",
    link: "https://github.com/Vignesh-V27/House-Price-Prediction-Statistical-Modeling-",
    image: "house-price.jpg",
  },
  {
    title: "Sales Performance Dashboard (Power BI)",
    description:
      "Designed and deployed an interactive Power BI dashboard to analyze supermarket sales data. Created key insights into revenue trends, customer purchasing behavior, and product performance across multiple locations. Integrated advanced visualizations and predictive analytics, enabling stakeholders to identify opportunities for revenue growth. Conducted business intelligence reporting to support strategic decision-making for supply chain optimization.",
    kpi: "📊 Identified revenue optimization strategies, improving sales by 25.8%",
    skills: ["Data Visualization", "Power BI", "Business Intelligence"],
    icon: "📊",
    link: "https://github.com/Vignesh-V27/SalesDashboard",
    image: "powerbi-dashboard.jpg",
  }
];

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 6px 15px rgba(255, 152, 0, 0.6)" }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p className="project-kpi">{project.kpi}</p>
              <div className="project-skills">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{project.icon} {skill}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Read more <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
