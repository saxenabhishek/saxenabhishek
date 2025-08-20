import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, expanded }) => (
  <>
    {/* This is the image card */}
    <div className="h-40 w-auto lg:w-1/3 max-w-44 bg-neutral-500 rounded-lg"></div>

    {project.githubLink && (
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto underline text-xs absolute top-3 right-3"
      >
        <FaGithub className=" w-7 h-7 hover:fill-teal-400 hover:scale-110" />
      </a>
    )}

    <div className="h-2/3 w-full">
      <span className="flex justify-between">
        <h3 className="text-lg tracking-[0.1px] md:tracking-normal md:text-xl leading-7 pb-1">
          {project.name}
        </h3>
      </span>
      <p className="text-base leading-6 pb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 pb-2">
        {project.technologies.slice(0, 2).map((tech) => (
          <span
            key={tech}
            className="bg-teal-300/10 px-2 py-1 rounded-lg text-[11px] md:text-xs leading-4 tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>
      {expanded && (
        <ul className="text-gray-800 dark:text-gray-300 text-xs leading-4 md:text-sm md:leading-5 md:tracking-wide tracking-[0.4px] list-disc pl-4 pb-2">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  </>
);

export default ProjectCard;
