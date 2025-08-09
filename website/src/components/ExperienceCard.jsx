import React from "react";

const ExperienceCard = ({ experience, expanded }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-xl font-semibold text-accent1">{experience.company}</h3>
    <p className="text-sm text-textSecondary">{experience.role}</p>
    {expanded && (
      <>
        <p className="text-sm text-textSecondary mt-2">{experience.period}</p>
        <ul className="list-disc list-inside text-textSecondary mt-2 flex-1">
          {experience.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default ExperienceCard;
