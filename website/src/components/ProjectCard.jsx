import React from "react";

const ProjectCard = ({ project, expanded }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-xl font-heading font-semibold text-accent underline">
      {project.name}
    </h3>
    <p className="text-sm text-gray-700 dark:text-textSecondary mt-2">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mt-2">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
    {expanded && (
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-textSecondary mt-2 space-y-1 flex-1">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    )}
    {project.githubLink && (
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-accent underline text-sm"
      >
        GitHub ↗
      </a>
    )}
  </div>
);

export default ProjectCard;
