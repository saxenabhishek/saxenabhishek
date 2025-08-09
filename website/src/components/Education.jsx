import React from "react";
import educationData from "../data/education.json";

const Education = ({ expanded }) => (
  <div>
    <h2 className="text-2xl font-heading font-semibold text-accent mb-2">Education</h2>
    {educationData.education.map((edu) => (
      <div key={edu.institution} className="text-gray-700 dark:text-textSecondary">
        <p>{`${edu.degree}, ${edu.institution}`}</p>
        {expanded && <p className="mt-1">{edu.period}</p>}
      </div>
    ))}
  </div>
);

export default Education;
