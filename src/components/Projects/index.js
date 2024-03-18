import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
      <div id="projects">
        <h1 className="heading">Projects</h1>
        <div className="projects-page">
          <div className="container"> {/* Wrap your content in a Bootstrap container */}
            <div className="row"> {/* Use Bootstrap row class */}
              <div className="col-md-4"> {/* Use Bootstrap grid system for responsive layout */}
                <div className="card">
                  <h3>Tech Career website</h3>
                  <a href="https://github.com/TseleMolelekoa/GroupWebsite" target="_blank">
                    <motion.button
                        className="btn btn-success"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >GitHub</motion.button>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3>Banking App using Python</h3>
                  <a href="https://github.com/TseleMolelekoa/BANKCALCULATORAPP" target="_blank">
                    <motion.button
                        className="btn btn-success"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >GitHub</motion.button>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3>Tax-Calculator using JAVA</h3>
                  <a href="https://github.com/tselemolelekoa/repository/tax-calculator-java" target="_blank">
                    <motion.button
                        className="btn btn-success"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >GitHub</motion.button>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-white text-center">Please note that all the above projects are not live as they are all in progress!!!!!</p> {/* Centered and white text */}
            <div className="button-container2 d-flex justify-content-center"> {/* Center the button */}
              <a href="https://github.com/TseleMolelekoa?tab=repositories">
                <button className="btn btn-primary">Load For More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
