import React from "react";

const ExperienceCard = ({ experience, expanded }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-xl font-heading font-semibold text-accent">
      {experience.company}
    </h3>
    <p className="text-sm text-gray-700 dark:text-textSecondary">{experience.role}</p>
    {expanded ? (
      <>
        <p className="text-sm text-gray-700 dark:text-textSecondary mt-2">
          {experience.period}
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-textSecondary mt-2 flex-1 space-y-1">
          {experience.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    ) : (
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-textSecondary mt-2 space-y-1">
        {experience.highlights.slice(0, 2).map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    )}
  </div>
);

export default ExperienceCard;
