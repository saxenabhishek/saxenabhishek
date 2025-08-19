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
      <h2 className="text-2xl font-heading font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-white/10 px-2 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
