import ExperienceCard from "./ExperienceCard";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCardHolder = ({ experienceData, expanded }) => {
  const len = experienceData.experiences.length;
  const exp = experienceData.experiences;

  return (
    <motion.div layout="position">
      <h1 className="text-xl uppercase mb-2 font-semibold">Experiences</h1>
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
            <ExperienceCard experience={exp} expanded={expanded} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ExperienceCardHolder;
