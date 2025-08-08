import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "Go", "C++"],
    frameworks: [
      "PyTorch",
      "Spring Boot",
      "Angular",
      "React",
      "FastAPI",
      "Django",
      "Express.js",
    ],
    testing: ["PyTest", "Jest", "Cypress"],
    tools: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GraphQL",
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="about p-8 space-y-6"
    >
      <h2 className="text-3xl font-heading font-bold text-accent1">About Me</h2>
      <div className="space-y-4">
        <p className="text-lg">
          Currently pursuing my MS in Computer Engineering with a Minor in
          Machine Learning at The George Washington University (2025–2026
          expected).
        </p>
        <p className="text-lg">
          I'm passionate about building scalable architectures, optimizing
          systems, and developing ML-driven solutions. My experience spans
          backend, frontend, and DevOps, allowing me to tackle complex
          challenges from multiple angles.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-heading font-semibold text-accent2">
          Skills & Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-2 capitalize">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-accent2/10 text-accent2 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
