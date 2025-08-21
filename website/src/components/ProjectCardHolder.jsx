import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";
import ExpandShrinkBtn from "./ExpandShrinkButton";

const ProjectCardHolder = ({ projectData, expanded, onFilterChange, mode }) => {
  let proj = projectData.projects;
  return (
    <motion.section
      layout="position"
      className=" flex flex-col space-y-4 relative"
    >
      <ExpandShrinkBtn
        onFilterChange={onFilterChange}
        value={"projects"}
        expanded={expanded}
        mode={mode}
      />
      <h1 className="text-2xl leading-9 tracking-wide font-heading">
        Projects
      </h1>
      {proj.map((pr, idx) => {
        return (
          <motion.article
            layout="position"
            style={{ borderRadius: 12 }}
            key={`exp-${idx}`}
            className="border-black/50 dark:border-white/20 border p-3 flex flex-col gap-2 justify-evenly lg:flex-row relative"
          >
            <ProjectCard project={pr} expanded={expanded} idx={`exp-${idx}`} />
          </motion.article>
        );
      })}
    </motion.section>
  );
};

export default ProjectCardHolder;
