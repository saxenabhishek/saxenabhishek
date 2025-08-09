import React from "react";
import { motion } from "framer-motion";
const About = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-full flex flex-col justify-center"
  >
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="space-y-4"
    >
      <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-2">
        Hi, I'm Abhishek
      </h1>
      <p className="text-xl text-accent">Software Engineer & Problem Solver</p>
      <p className="text-gray-700 dark:text-textSecondary">
        MS in Computer Engineering @ GWU. Building scalable systems and ML
        solutions.
      </p>
    </motion.div>
  </motion.section>
);

export default About;
