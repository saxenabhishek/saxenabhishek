import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence, stagger } from "motion/react";

const ProjectCardHolder = ({ projectData, expanded }) => {
  const len = projectData.projects.length;
  let proj = projectData.projects;

  return (
    <motion.section layout className=" flex flex-col space-y-4">
      <h1 className="text-2xl leading-9 tracking-wide font-heading">
        Projects
      </h1>
      {proj.map((pr, idx) => {
        return (
          <motion.article
            layout
            key={`exp-${idx}`}
            className="rounded-xl border-black/50 dark:border-white/50 border p-3 flex gap-2 flex-col justify-center lg:flex-row min-h-48 relative"
          >
            <ProjectCard project={pr} expanded={expanded} />
          </motion.article>
        );
      })}
    </motion.section>
  );
};

export default ProjectCardHolder;
