import React from "react";

const ProjectCard = ({ project, expanded }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-xl font-semibold text-accent2">{project.name}</h3>
    {expanded && (
      <>
        <p className="text-textSecondary mt-2 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-accent1/10 text-accent1 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    )}
  </div>
);

export default ProjectCard;
