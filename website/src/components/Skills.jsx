import React from "react";

const Skills = () => {
  const skills = [
    "React",
    "TypeScript",
    "Python",
    "Java",
    "Docker",
    "Kubernetes",
  ];

  return (
    <div>
      <h2 className="text-2xl leading-9 tracking-wide font-heading pb-4">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-teal-300/10 px-2 py-1 rounded-lg text-[11px] md:text-xs leading-4 tracking-wider"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
