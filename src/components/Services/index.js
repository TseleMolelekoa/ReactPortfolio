import React from "react";
import './Services.css';
import NodeJS from "../assets/NodeJS.png";
import VSCode from '../assets/VS Code.png';
import JavaScript from "../assets/JavaScript.png";
import Java from "../assets/315426_document_file_java_icon.png";
import Reacts from "../assets/React.png";
import Html  from "../assets/html.png";
import css from "../assets/291788_css3_icon.png";
import Experience from "../assets/Experience.png";
import CAP from "../assets/graduation-cap.png";
import python from "../assets/308445_long shadow_python_script language_web_web technology_icon.png";
import Settings  from "../assets/engage-6630_256.gif";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import linkedIn from "../assets/249188_linked in_social network_social media_linkedin_social_icon.png";
import Git from "../assets/249191_social media_github_git_social_octocat_icon.png";
import GMail from "../assets/1220340_gmail_google_mail_icon.png";
import Discord from "../assets/discord_.png";


const ServicesContent = () => {
  const isDesktopOrLaptop = useMediaQuery('(min-width:1224px)');
  const isBigScreen = useMediaQuery('(min-width:1824px)');
  const isTabletOrMobile = useMediaQuery('(max-width:1224px)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isRetina = useMediaQuery('(min-resolution:  2dppx)');

  if (isDesktopOrLaptop) {
    return <div></div>;
  } else if (isBigScreen) {
    return <div></div>;
  } else if (isTabletOrMobile) {
    return <div></div>;
  } else if (isPortrait) {
    return <div></div>;
  } else if (isRetina) {
    return <div></div>;
  } else {
    return <div></div>;
  }
};

const Services = () => {
  return (
    <div id='services'>
      <div className="app">
        <h1 className='heading'>Services</h1>
        <div className="flip-card-container">
          <ServicesContent/>
          <SkillsCard/>
          <EducationCard/>
          <ExperienceCard/>
        </div>
        <footer className="footer">
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={linkedIn}
                                                                                                   className="footer-icon"/></a>
            </li>
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src={Git}
                                                                                             className="footer-icon"/></a>
            </li>
            <li><a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><img src={Discord}
                                                                                              className="footer-icon"/></a>
            </li>
            <li><a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer"><img src={GMail}
                                                                                                  className="footer-icon"/></a>
            </li>
          </ul>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Tsele Molelekoa. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

const SkillsCard = () => {
  return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3>Skills</h3>
            <img src={Settings} style={{width: '150px', height: '150px'}}/>
          </div>
          <div className="flip-card-back">
            <div className="icon-row">
              <img src={css} style={{width: '80px', height: '70px'}}/>
              <img src={Html} style={{width: '80px', height: '70px'}}/>
              <img src={Java} style={{width: '80px', height: '70px'}}/>
              <img src={VSCode} style={{width: '80px', height: '70px'}}/>
            </div>
            <div className="icon-row">
              <img src={python} style={{width: '80px', height: '70px'}}/>
              <img src={NodeJS} style={{ width: '80px', height: '70px' }} />
            <img src={Reacts} style={{ width: '80px', height: '70px' }} />
            <img src={JavaScript} style={{ width: '80px', height: '70px' }} />
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
          <img src={CAP}/>
        </div>
        <div className="flip-card-back">
          <span>BTech: Project Management Central University of Technology  2019-2021</span><br/>
          <span>Diploma Information Technology Damelin College  2015-2018</span><br/>
          <span>Matric - Mamello Secondary School  2010-2014</span>
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
        <img src={Experience} />
        </div>
        <div className="flip-card-back">
          <div className="EX-back">
          <span>January 2024-Current Junior Software Developer @ Younglings Africa in Cape Town.<br/></span>
          <span>August 2023-January 2024 Full-Stack Development and Desktop Support Technician• Junior Position • Cape Innovation and Technology Initiative Cape Town<br/></span>
          <span>July 2022-April 2023 • Assistant Officer • University of Free State Bloemfontein<br/></span>
          <span>July 2021-June 2022 • Intern • University of Free State Bloemfontein<br/></span>
          <span>October 2020-June 2021 Van Assistant • Raptosec Logistics Bloemfontein<br/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
