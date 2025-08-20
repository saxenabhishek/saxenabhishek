import React from "react";
import educationData from "../data/education.json";

const Education = ({ expanded }) => (
  <div>
    <h2 className="text-2xl leading-9 tracking-wide font-heading pb-4">
      Education
    </h2>
    {educationData.education.map((edu) => (
      <div key={edu.institution} className="mb-2">
        <p className="text-lg tracking-[0.1px] md:tracking-normal md:text-xl leading-7 pb-1">
          {edu.institution}
        </p>
        <p className="text-sm md:text-base tracking-wide leading-4 md:leading-6 text-neutral-600 dark:text-neutral-400 pb-1">
          {edu.degree}
        </p>
        <p className="text-xs md:text-sm leading-5 pb-4 text-neutral-600 dark:text-neutral-400">
          {edu.period}
        </p>
      </div>
    ))}
  </div>
);

export default Education;
