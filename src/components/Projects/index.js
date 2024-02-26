import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import cogGif from '../assets/cogs-4218_512.gif';


const Projects = () => {
  return (
    <div id="projects">
      <h1 className="heading">Projects</h1>
      <div className="projects-page">
        <div className="gif-container">
          <img src={cogGif} alt="GIF" />
        </div>
        <div className="component1"></div>
        <div className="layer-small"></div>
        <div className="Rectangle_6"></div>
        <div className="Rectangle_5"></div>
        <div className="Rectangle_4"></div>
        <div className="Rectangle_3"></div>
        <div className="Rectangle_2"></div>
        <div className="shape1"></div>
        <circle />
        <div className="shape2"></div>
        <div className="shape3"></div>
        <div className="shape4"></div>
        <div className="shape5"></div>
        <div className="Rectangle1"></div>
        <div className="Rectangle8"></div>
        <div className="Rectangle9"></div>
        <div className="Rectangle4"></div>
        <circle />
        <div className="Rectangle6"></div>
        <div className="shape15"></div>
        <div className="projects-page">
          <div className="cards-container">
            <motion.div className="card" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <h3>Tech Career website</h3>
              <a href="https://github.com/TseleMolelekoa/GroupWebsite" target="_blank">
                <motion.button
                  className="github-button"
                  whileHover={{ scale: 1.1, backgroundColor: "#4CAF50", color: "white" }}
                  whileTap={{ scale: 0.9 }}
                >GitHub
                </motion.button>
              </a>
            </motion.div>
            <motion.div className="card" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <h3>Banking App using Python</h3>
              <a href="https://github.com/TseleMolelekoa/BANKCALCULATORAPP" target="_blank">
                <motion.button
                  className="github-button"
                  whileHover={{ scale: 1.1, backgroundColor: "#4CAF50", color: "white" }}
                  whileTap={{ scale: 0.9 }}
                > GitHub
                </motion.button>
              </a>
            </motion.div>
            <motion.div className="card" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <h3>Tax-Calculator using JAVA</h3>
              <a href="https://github.com/yourusername/tax-calculator-java" target="_blank">
                <motion.button
                  className="github-button"
                  whileHover={{ scale: 1.1, backgroundColor: "#4CAF50", color: "white" }}
                  whileTap={{ scale: 0.9 }}
                > GitHub
                </motion.button>
              </a>
            </motion.div>
          </div>
          <p>Please note that all the above projects are not live as they are all in progress!!!!!</p>
          <div className="button-container2">
            <a href="https://github.com/TseleMolelekoa?tab=repositories">
              <button>Load For More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
