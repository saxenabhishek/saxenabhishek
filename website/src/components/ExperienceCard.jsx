import React from "react";

const ExperienceCard = ({ experience }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-xl font-heading font-semibold text-accent">
      {experience.company}
    </h3>
    <p className="text-sm text-gray-700 dark:text-textSecondary">
      {experience.role}
    </p>
    <p className="text-xs text-gray-500 dark:text-textSecondary mt-1">
      {experience.period}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto pt-4">
      {experience.technologies.map((tech) => (
        <span
          key={tech}
          className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceCard;
