import React, { useState } from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import linkedIn from "../assets/249188_linked in_social network_social media_linkedin_social_icon.png";
import Git from "../assets/249191_social media_github_git_social_octocat_icon.png";
import Discord from "../assets/discord_.png";
import GMail from "../assets/1220340_gmail_google_mail_icon.png";
import NodeJS from "../assets/NodeJS.png";
import VSCode from "../assets/VS Code.png";
import JavaScript from "../assets/JavaScript.png";
import Java from "../assets/315426_document_file_java_icon.png";
import Reacts from "../assets/React.png";
import Html from "../assets/html.png";
import css from "../assets/291788_css3_icon.png";
import python from "../assets/308445_long shadow_python_script language_web_web technology_icon.png";

const Services = () => {
    const [activeTab, setActiveTab] = useState("skills");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div id="services">
            <h1 className="heading text-center">Services</h1>
            <div className="app container mt-4">
                <ul className="nav nav-tabs justify-content-end">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${
                                activeTab === "skills" ? "active" : ""
                            } text-center`}
                            onClick={() => handleTabClick("skills")}
                        >
                            Skills
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${
                                activeTab === "education" ? "active" : ""
                            } text-center`}
                            onClick={() => handleTabClick("education")}
                        >
                            Education
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${
                                activeTab === "experience" ? "active" : ""
                            } text-center`}
                            onClick={() => handleTabClick("experience")}
                        >
                            Experience
                        </button>
                    </li>
                </ul>
                {activeTab === "skills" && <SkillsTab/>}
                {activeTab === "education" && <EducationTab/>}
                {activeTab === "experience" && <ExperienceTab/>}
                <footer className="footer text-center">
                    <ul className="social-links">
                        <li>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedIn} className="footer-icon" alt="LinkedIn"/>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/tselemolelekoa/repository"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={Git} className="footer-icon" alt="GitHub"/>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://discord.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={Discord} className="footer-icon" alt="Discord"/>
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:example@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={GMail} className="footer-icon" alt="GMail"/>
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
            <h2 className="text-center">Skills</h2>
            <div className="skills-icons text-center">
                <div className="icon-row">
                    <img src={css} style={{ width: "80px", height: "70px" }} alt="CSS" />
                    <img src={Html} style={{ width: "80px", height: "70px" }} alt="HTML" />
                    <img src={Java} style={{ width: "80px", height: "70px" }} alt="Java" />
                    <img src={VSCode} style={{ width: "80px", height: "70px" }} alt="VS Code" />
                </div>
                <div className="icon-row">
                    <img src={python} style={{ width: "80px", height: "70px" }} alt="Python" />
                    <img src={NodeJS} style={{ width: "80px", height: "70px" }} alt="NodeJS" />
                    <img src={Reacts} style={{ width: "80px", height: "70px" }} alt="React" />
                    <img src={JavaScript} style={{ width: "80px", height: "70px" }} alt="JavaScript" />
                </div>
            </div>
        </div>
    );
};

const EducationTab = () => {
    return (
        <div>
            {/* Content for Education Tab */}
            <h2 className="text-center">Education</h2>
            <div className="text-center">
        <span>
          BTech: Project Management Central University of Technology 2019-2021
        </span>
                <br />
                <span>
          Diploma Information Technology Damelin College 2015-2018
        </span>
                <br />
                <span>Matric - Mamello Secondary School 2010-2014</span>
            </div>
        </div>
    );
};

const ExperienceTab = () => {
    return (
        <div>
            {/* Content for Experience Tab */}
            <h2 className="text-center">Experience</h2>
            <div className="experience-details text-center">
        <span>
          January 2024-Current Junior Software Developer @ Younglings Africa
          in Cape Town.
          <br />
        </span>
                <span>
          August 2023-January 2024 Full-Stack Development and Desktop
          Support Technician • Junior Position • Cape Innovation and
          Technology Initiative Cape Town
          <br />
        </span>
                <span>
          July 2022-April 2023 • Assistant Officer • University of Free
          State Bloemfontein
          <br />
        </span>
                <span>
          July 2021-June 2022 • Intern • University of Free State
          Bloemfontein
          <br />
        </span>
                <span>
          October 2020-June 2021 Van Assistant • Raptosec Logistics
          Bloemfontein
          <br />
        </span>
            </div>
        </div>
    );
};

export default Services;
