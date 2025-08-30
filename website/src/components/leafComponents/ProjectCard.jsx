import { motion } from "motion/react";
import { FaGithubAlt } from "react-icons/fa";

const ProjectCard = ({ project, expanded, idx, githubLink }) => (
  <>
    {/* Project Image */}
    <motion.a
      layout="preserve-aspect"
      href={githubLink || ""}
      target="_blank"
      rel="noopener noreferrer"
      className="sm:w-1/3 w-auto h-16 sm:h-auto max-w-42 m-1 overflow-clip relative"
    >
      <img
        src={project.image_url}
        style={{ borderRadius: 14 }}
        alt={`Project Photo ${project.name}`}
        className=" border h-full w-full object-cover border-neutral-400 bg-neutral-500"
      />
    </motion.a>

    {/* GithubLink */}
    {githubLink && (
      <motion.a
        layout="position"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto underline absolute text-xs top-3 right-3"
      >
        <FaGithubAlt className="w-5 h-5 hover:fill-teal-400 hover:scale-110" />
      </motion.a>
    )}

    <motion.div layout className="sm:w-2/3 w-full">
      <span className="flex justify-between">
        <motion.h3
          layout="position"
          className="text-lg tracking-[0.1px] md:tracking-normal md:text-xl leading-7 pb-1"
        >
          {project.name}
        </motion.h3>
      </span>
      <p className="text-xs md:text-sm leading-3 md:leading-5 text-neutral-600 dark:text-neutral-400 pb-1">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2 pb-2">
        {project.technologies.slice(0, 2).map((tech) => (
          <span
            key={`${idx}-${tech}`}
            className="bg-teal-300/10 px-2 py-1 rounded-lg text-[11px] md:text-xs leading-4 tracking-wider font-light"
          >
            {tech}
          </span>
        ))}
      </div>
      {expanded && (
        <motion.ul
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-gray-800 dark:text-gray-300 text-xs leading-4 md:text-sm md:leading-5 md:tracking-wide tracking-[0.4px] list-disc pl-4 pb-2"
        >
          {project.description.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  </>
);

export default ProjectCard;
