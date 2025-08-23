import ProjectCard from "./leafComponents/ProjectCard";
import { motion, stagger, AnimatePresence } from "motion/react";
import ExpandShrinkBtn from "./leafComponents/ExpandShrinkButton";
import projectData from "../data/projects.json";

const ProjectCardHolder = ({ expanded, onFilterChange, mode }) => {
  let proj = projectData.projects;
  if (proj.length > 2 && !expanded) {
    proj = projectData.projects.slice(0, 2);
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: stagger(0.2, { ease: "easeIn" }) },
    },
  };
  const cardChild = {
    hidden: { y: -50, x: 100, opacity: 0 },
    visible: { y: 0, x: 0, opacity: 1 },
    exit: { opacity: 0, y: -100, transition: { duration: 4 } },
  };
  return (
    <motion.section
      layout="position"
      className=" flex flex-col space-y-4 relative"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <ExpandShrinkBtn
        onFilterChange={onFilterChange}
        value={"projects"}
        expanded={expanded}
        mode={mode}
      />
      {!expanded && (
        <p className="absolute top-0 right-10 p-1">
          +{projectData.projects.length - 2} More
        </p>
      )}
      <h1 className="text-2xl leading-9 tracking-wide font-heading">
        Projects
      </h1>
      {proj.map((pr, idx) => {
        return (
          <motion.article
            layout="preserve-aspect"
            style={{ borderRadius: 12 }}
            variants={cardChild}
            exit={"exit"}
            key={`exp-${idx}`}
            className="border-black/50 dark:border-white/20 border p-3 flex flex-col gap-2 justify-evenly lg:flex-row relative"
          >
            <ProjectCard
              project={pr}
              expanded={expanded}
              idx={`exp-${idx}`}
              githubLink={pr.links[0]}
            />
          </motion.article>
        );
      })}
    </motion.section>
  );
};

export default ProjectCardHolder;
