import React from "react";

const ProjectCard = ({ project, expanded }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-xl font-heading font-semibold text-accent underline">
      {project.name}
    </h3>
    {expanded && (
      <>
        <p className="text-sm text-gray-700 dark:text-textSecondary mt-2 flex-1">
          {project.description}
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-textSecondary mt-2 space-y-1">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-accent underline"
          >
            GitHub ↗
          </a>
        )}
      </>
    )}
  </div>
);

export default ProjectCard;
