import React from "react";
import linkedIn from "../assets/249188_linked in_social network_social media_linkedin_social_icon.png";
import Git from "../assets/249191_social media_github_git_social_octocat_icon.png";
import GMail from "../assets/1220340_gmail_google_mail_icon.png";
import Discord from "../assets/discord_.png";
import profileImage from '../assets/_MG_1509_1.jpg'; // Import your profile image
import './about.css'; // Import your CSS file

const AboutMe = () => {
  return (
      <div id='About' className="container">
        <h2 className="about-heading text-center mt-5">About Tsele Molelekoa<br/>A Junior Software-Developer</h2>
        <div className="about-me-container row">
          <div className="col-md-6 image">
            <img src={profileImage} alt="Profile" className="img-fluid" />
          </div>
          <div className="col-md-6 content-container">
            <div className="text">
              <p className='about_me'>
                Hi! my name is Tsele Molelekoa. I'm passionate about Software Development. This is a space where I'll share a
                little bit about myself.
                <span>I am a qualified IT enthusiast with experience in providing excellent customer <br/>support to network users as well as expertise in troubleshooting technical issues.</span>
                <span> I have practical experience and competence in a variety of security, networking, and operating system software. <br/>I graduated with a Btech degree in Project Management at the Central University of Technology because I saw the growing need to broaden industry knowledge and skills relating to the management and execution of IT-related projects that any organization wishes to undertake. </span>
              </p>
            </div>
          </div>
        </div>
        <footer className="footer mt-5">
          <ul className="social-links d-flex justify-content-center">
            <li className="mx-3"><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} className="footer-icon" alt="LinkedIn"/></a></li>
            <li className="mx-3"><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src={Git} className="footer-icon" alt="GitHub"/></a></li>
            <li className="mx-3"><a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><img src={Discord} className="footer-icon" alt="Discord"/></a></li>
            <li className="mx-3"><a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer"><img src={GMail} className="footer-icon" alt="Gmail"/></a></li>
          </ul>
          <p className="text-center mt-3">
            &copy; {new Date().getFullYear()} Tsele Molelekoa. All rights reserved.
          </p>
        </footer>
      </div>
  );
}

export default AboutMe;
