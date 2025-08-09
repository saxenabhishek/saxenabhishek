import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Python",
    "Java",
    "TypeScript",
    "React",
    "PyTorch",
    "AWS",
    "Docker",
    "Kubernetes",
    "Spring Boot",
    "FastAPI",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col justify-between"
    >
      <div className="space-y-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
              Hi, I'm Abhishek
            </h1>
            <p className="text-xl text-accent1">
              Software Engineer & Problem Solver
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 rounded-full bg-gradient-to-r from-accent1 to-accent2 flex items-center justify-center text-4xl font-bold"
          >
            AS
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-textSecondary"
        >
          MS in Computer Engineering @ GWU. Building scalable systems and ML
          solutions.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 pt-4"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-accent2/10 text-accent2 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="/private/Saxena_Abhishek_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent2 text-white px-6 py-2 rounded-lg hover:bg-accent2/90 transition-colors"
        >
          View Resume
        </a>
        <a
          href="#contact"
          className="border border-accent1 text-accent1 px-6 py-2 rounded-lg hover:bg-accent1/10 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
};
export default About;
