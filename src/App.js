import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage/index';
import About from './components/about/index';
import "./components/HomePage/HomePage.css";
import Services from './components/Services/index';
import Projects from './components/Projects/index';
import ContactPage from './components/ContactPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },  1500); // Simulate a loading delay
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <HomePage />
          <About />
          <Services />
          <Projects />
          <ContactPage />
        </div>
      )}
    </div>
  );
};

export default App;
