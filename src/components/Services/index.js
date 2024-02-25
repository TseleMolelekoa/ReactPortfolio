import React from "react";
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faPython,
  faNodeJs,
  faJava,
  faGit
} from '@fortawesome/free-brands-svg-icons';
import { SettingsApplications } from '@material-ui/icons';

const SkillsCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>Skills</h3>
          <SettingsApplications className="icon" />
        </div>
        <div className="flip-card-back">
          <div className="icon-row">
            <FontAwesomeIcon icon={faHtml5} size="4x" />
            <FontAwesomeIcon icon={faCss3} size="4x" />
            <FontAwesomeIcon icon={faJs} size="4x" />
            <FontAwesomeIcon icon={faReact} size="4x" />
          </div>
          <div className="icon-row">
            <FontAwesomeIcon icon={faPython} size="4x" />
            <FontAwesomeIcon icon={faNodeJs} size="4x" />
            <FontAwesomeIcon icon={faJava} size="4x" />
            <FontAwesomeIcon icon={faGit} size="4x" />
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>Education</h3>
          <briefcase />
        </div>
        <div className="flip-card-back">
          <span>BTech: Project Management Central University of Technology 2019-2021</span><br/>
          <span>Diploma Information Technology Damelin College 2015-2018</span><br/>
          <span>Matric - Mamello Secondary School 2010-2014</span>
        </div>
      </div>
    </div>
  );
};


const ExperienceCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>Experience</h3>
          {/* Add work experiences */}
        </div>
        <div className="flip-card-back">
          <span>January 2024-Current Junior Software Developer @ Younglings Africa in Cape Town.</span>
          <span>August 2023-January 2024 Full-Stack Development and Desktop Support Technician• Junior Position • Cape Innovation and Technology Initiative Cape Town</span>
          <span>July 2022-April 2023 • Assistant Officer • University of Free State Bloemfontein</span>
          <span>July 2021-June 2022 • Intern • University of Free State Bloemfontein</span>
          <span>October 2020-June 2021 Van Assistant • Raptosec Logistics Bloemfontein</span>
          <span>July 2018-October 2020 Van Assistant • Brezzy Distributors Bloemfontein</span>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div id='services'>
      <div className="app">
        <h1 className='heading'>Services</h1>
        <div className="flip-card-container">
          <SkillsCard />
          <EducationCard />
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
