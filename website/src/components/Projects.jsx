import React from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="projects p-8 space-y-6"
    >
      <h2 className="text-3xl font-heading font-bold text-accent1">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-accent2/5 rounded-xl p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold text-accent2">
              {project.name}
            </h3>
            <p className="text-textSecondary">{project.description}</p>

            <ul className="space-y-2 list-disc list-inside text-textSecondary">
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-accent1/10 text-accent1 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-accent2 hover:text-accent1"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
