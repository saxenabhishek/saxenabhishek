import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCardHolder = ({ projectData, expanded }) => {
  const len = projectData.projects.length;
  let proj = projectData.projects;

  return (
    <motion.section layout="position" className="">
      <h1 className="text-xl uppercase mb-2 font-semibold">Projects</h1>
      {proj.map((pr, idx) => {
        return (
          <motion.article
            layout="preserve-aspect"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: -10, opacity: 0 }}
            key={`exp-${idx}`}
            className=" mb-2 rounded-md ring-1 p-3 ring-white/10 flex gap-2 flex-col justify-center lg:flex-row min-h-48 bg-stone-600/25"
          >
            <ProjectCard project={pr} expanded={expanded} />
          </motion.article>
        );
      })}
    </motion.section>
  );
};

export default ProjectCardHolder;
