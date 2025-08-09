import React from "react";
import { motion } from "framer-motion";
import experienceData from "../data/experience.json";

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full overflow-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-heading font-bold text-accent1">
          Experience
        </h2>
        <span className="text-sm text-accent2">2021 - Present</span>
      </div>

      <div className="space-y-4">
        {experienceData.experiences.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-4 border-l border-accent2"
          >
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent2" />
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-accent2">
                  {job.company}
                </h3>
                <p className="text-sm text-textSecondary">{job.role}</p>
              </div>
              <span className="text-xs text-textSecondary">{job.period}</span>
            </div>

            <ul className="mt-2 space-y-1">
              {job.highlights.slice(0, 2).map((highlight, i) => (
                <li key={i} className="text-sm text-textSecondary">
                  • {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1 mt-2">
              {job.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="bg-accent1/10 text-accent1 px-2 py-0.5 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
              {job.technologies.length > 3 && (
                <span className="text-xs text-textSecondary">
                  +{job.technologies.length - 3} more
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
