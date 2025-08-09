import React from "react";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import "../assets/styles/main.css";

const BentoGrid = () => {
  return (    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto min-h-screen">
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-primary/50 rounded-2xl p-6">
        <About />
      </div>
      <div className="col-span-1 row-span-2 bg-primary/50 rounded-2xl p-6">
        <Projects />
      </div>
      <div className="col-span-1 md:col-span-2 bg-primary/50 rounded-2xl p-6">
        <Experience />
      </div>
      <div className="col-span-1 bg-primary/50 rounded-2xl p-6">
        <Contact />
      </div>
    </div>
  );
};

export default BentoGrid;
