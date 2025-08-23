import ExpandShrinkBtn from "./leafComponents/ExpandShrinkButton";
import ExperienceCard from "./leafComponents/ExperienceCard";
import { motion } from "motion/react";
import experienceData from "../data/experience.json";

const ExperienceCardHolder = ({ expanded, onFilterChange, mode }) => {
  const exp = experienceData.experiences;

  return (
    <motion.div layout="position" className="relative">
      <h1 className="text-2xl leading-9 tracking-wide font-heading pb-4">
        Experience
      </h1>
      <ExpandShrinkBtn
        onFilterChange={onFilterChange}
        value={"experience"}
        expanded={expanded}
        mode={mode}
      />
      {exp.map((exp, idx) => {
        return (
          <motion.div
            layout="preserve-aspect"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: -10, opacity: 0 }}
            key={`exp-${idx}`}
            className="pb-2"
          >
            <ExperienceCard
              experience={exp}
              expanded={expanded}
              idx={`exp-${idx}`}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ExperienceCardHolder;
