import React, { useState } from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import linkedIn from "../assets/249188_linked in_social network_social media_linkedin_social_icon.png";
import Git from "../assets/249191_social media_github_git_social_octocat_icon.png";
import Discord from "../assets/discord_.png";
import GMail from "../assets/1220340_gmail_google_mail_icon.png";

const Services = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
      <div id="services">
        <div className="app container mt-4">
          <h1 className="heading">Services</h1>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                  className={`nav-link ${activeTab === "skills" ? "active" : ""}`}
                  onClick={() => handleTabClick("skills")}
              >
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button
                  className={`nav-link ${activeTab === "education" ? "active" : ""}`}
                  onClick={() => handleTabClick("education")}
              >
                Education
              </button>
            </li>
            <li className="nav-item">
              <button
                  className={`nav-link ${activeTab === "experience" ? "active" : ""}`}
                  onClick={() => handleTabClick("experience")}
              >
                Experience
              </button>
            </li>
          </ul>
          {activeTab === "skills" && <SkillsTab />}
          {activeTab === "education" && <EducationTab />}
          {activeTab === "experience" && <ExperienceTab />}
          <footer className="footer">
            <ul className="social-links">
              <li>
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src={linkedIn} className="footer-icon" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src={Git} className="footer-icon" alt="GitHub" />
                </a>
              </li>
              <li>
                <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src={Discord} className="footer-icon" alt="Discord" />
                </a>
              </li>
              <li>
                <a
                    href="mailto:example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src={GMail} className="footer-icon" alt="GMail" />
                </a>
              </li>
            </ul>
            <p className="copyright">
              &copy; {new Date().getFullYear()} Tsele Molelekoa. All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>
  );
};

const SkillsTab = () => {
  return (
      <div>
        {/* Content for Skills Tab */}
        <h2>Skills</h2>
        {/* Add your content here */}
      </div>
  );
};

const EducationTab = () => {
  return (
      <div>
        {/* Content for Education Tab */}
        <h2>Education</h2>
        {/* Add your content here */}
      </div>
  );
};

const ExperienceTab = () => {
  return (
      <div>
        {/* Content for Experience Tab */}
        <h2>Experience</h2>
        {/* Add your content here */}
      </div>
  );
};

export default Services;
