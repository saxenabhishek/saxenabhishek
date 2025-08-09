import React from "react";
import { motion } from "framer-motion";
import { FiHexagon } from "react-icons/fi";

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
            <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-2">
              Hi, I'm Abhishek
            </h1>
            <p className="text-xl text-accent">
              Software Engineer & Problem Solver
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-4xl"
          >
            <FiHexagon />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 dark:text-textSecondary"
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
              className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
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
          className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors"
        >
          View Résumé ↗
        </a>
        <a
          href="#contact"
          className="border border-accent text-accent px-6 py-2 rounded-lg hover:bg-accent/10 transition-colors"
        >
          Email ↗
        </a>
      </motion.div>
    </motion.section>
  );
};
export default About;
