import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-heading">
          Hi, I'm Abhishek Saxena
          <span className="block text-2xl md:text-3xl text-accent1 mt-2">
            Software Engineer & Problem Solver
          </span>
        </h1>

        <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto">
          Turning complex challenges into scalable, high-performance solutions.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent2 text-white px-6 py-3 rounded-lg font-medium"
            href="/private/Saxena_Abhishek_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-accent1 text-accent1 px-6 py-3 rounded-lg font-medium"
            href="#contact"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
