import React from "react";
import { motion } from "framer-motion";
import experienceData from "../data/experience.json";

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="experience p-8 space-y-6"
    >
      <h2 className="text-3xl font-heading font-bold text-accent1">
        Experience
      </h2>
      <div className="space-y-8">
        {experienceData.experiences.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="border-l-2 border-accent2 pl-6 space-y-3"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold text-accent2">
                  {job.company}
                </h3>
                <p className="text-lg text-textSecondary">{job.role}</p>
              </div>
              <span className="text-sm text-textSecondary bg-accent2/10 px-3 py-1 rounded-full">
                {job.period}
              </span>
            </div>

            <ul className="space-y-2 list-disc list-inside">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="text-textSecondary">
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {job.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-accent1/10 text-accent1 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
