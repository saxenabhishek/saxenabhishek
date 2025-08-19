import React from "react";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const ProjectCard = ({ project, expanded }) => (
  <>
    <div className="h-40 w-auto lg:w-1/3 max-w-52 bg-stone-500 rounded-lg"></div>
    <div className="h-2/3 w-full">
      <span className="flex w-full justify-between items-center">
        <h3 className="text-lg font-heading">{project.name}</h3>
        <LuCircleArrowOutUpRight />
      </span>
      <p className="text-sm text-gray-700 dark:text-textSecondary mt-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.technologies.slice(0, 2).map((tech) => (
          <span
            key={tech}
            className="bg-teal-400/10 text-teal-400 px-2 py-1 rounded-lg text-xs"
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
          className="mt-auto underline text-xs"
        >
          GitHub ↗
        </a>
      )}
    </div>
  </>
);

export default ProjectCard;
