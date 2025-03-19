import React, { useState } from "react";
import "./Education.css";

function Education() {
  const [activeTab, setActiveTab] = useState("northeastern");

  return (
    <div className="education">
      <h1>Education</h1>

      {/* Tab Navigation */}
      <div className="education-tabs">
        <button 
          className={activeTab === "northeastern" ? "active" : ""} 
          onClick={() => setActiveTab("northeastern")}
        >
          Northeastern University
        </button>
        <button 
          className={activeTab === "anna" ? "active" : ""} 
          onClick={() => setActiveTab("anna")}
        >
          Anna University
        </button>
      </div>

      {/* Tab Content */}
      <div className="education-content">
        {activeTab === "northeastern" && (
          <div className="education-tab">
            <img src="/logos/northeastern_university.jpg" alt="Northeastern University" className="edu-logo" />
            <h2>Northeastern University</h2>
            <h3>MS in Engineering Management | 2023 – 2025</h3>
            <h4>📚 Relevant Coursework</h4>
            <ul className="education-list">
              <li><span className="list-icon">📌</span> Deterministic Operational Research</li>
              <li><span className="list-icon">📌</span> Probability and Statistics</li>
              <li><span className="list-icon">📌</span> Digital Product Design and Management</li>
              <li><span className="list-icon">📌</span> Supply Chain Engineering</li>
              <li><span className="list-icon">📌</span> Data Management for Analytics</li>
              <li><span className="list-icon">📌</span> Engineering Project Management</li>
              <li><span className="list-icon">📌</span> Economic Decision Making</li>
            </ul>
            <h4>🚀 Activities & Leadership</h4>
            <ul className="education-list">
              <li><span className="list-icon">♟️</span> Strategic Head – Northeastern Chess Club (Fall 2024)</li>
              <li><span className="list-icon">🏅</span> Graduate Leadership Institute (GLI) Certificate</li>
              <li><span className="list-icon">📅</span> Events Planning Board – NUPM Club</li>
              <li><span className="list-icon">📢</span> VP Communication – APMC</li>
            </ul>
            <h4>💼 Part-Time Roles</h4>
            <ul className="education-list">
              <li><span className="list-icon">💻</span> <b>Instructional Assistant (Fall 2024 & Spring 2025):</b> Assisted faculty with classroom tech (Canvas, Zoom, AV) for hybrid teaching.</li>
              <li><span className="list-icon">📊</span> <b>Graduate Teaching Assistant – Digital Product Design (Spring 2025):</b></li>
              <ul className="sub-list">
                <li>Led a team of 6 TAs across 3 sections, tracking grades for 150+ students.</li>
                <li>Guided 50+ students on PRD/MRD development, agile, and product lifecycle.</li>
                <li>Served as liaison between faculty, students, and TAs to optimize course content.</li>
              </ul>
            </ul>
          </div>
        )}

        {activeTab === "anna" && (
          <div className="education-tab">
            <img src="/logos/anna_university.jpg" alt="Anna University" className="edu-logo" />
            <h2>Anna University</h2>
            <h3>BE in Electrical & Electronics Engineering | 2017 – 2021</h3>
            <h4>📚 Relevant Coursework</h4>
            <ul className="education-list">
              <li><span className="list-icon">📌</span> Object Oriented Programming</li>
              <li><span className="list-icon">📌</span> Principles of Management</li>
            </ul>
            <h4>🚀 Activities & Leadership</h4>
            <ul className="education-list">
              <li><span className="list-icon">📅</span> Event Manager – Dept. Symposium</li>
              <li><span className="list-icon">♟️</span> 2× Zonal Chess Champion</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
