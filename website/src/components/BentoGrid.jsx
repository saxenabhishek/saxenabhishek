import React from "react";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import "../assets/styles/main.css";

const BentoGrid = () => {
  return (
    <div className="bento-grid">
      <div className="bento-item about">
        <About />
      </div>
      <div className="bento-item experience">
        <Experience />
      </div>
      <div className="bento-item projects">
        <Projects />
      </div>
      <div className="bento-item contact">
        <Contact />
      </div>
    </div>
  );
};

export default BentoGrid;
