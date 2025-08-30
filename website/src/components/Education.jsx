import { motion } from "motion/react";
import educationData from "../data/education.json";
import ExpandShrinkBtn from "./leafComponents/ExpandShrinkButton";

const Education = ({ expanded, onFilterChange, mode }) => (
  <motion.div layout="position" className="relative">
    <ExpandShrinkBtn
      onFilterChange={onFilterChange}
      value={"education"}
      expanded={expanded}
      mode={mode}
    />
    <h2 className="text-2xl leading-9 tracking-wide font-heading pb-4">
      Education
    </h2>
    {educationData.education.map((edu) => (
      <div key={edu.institution} className="mb-2">
        <p className="text-lg tracking-[0.1px] md:tracking-normal md:text-xl leading-7 pb-1">
          {edu.institution}
        </p>
        <p className="text-sm md:text-base tracking-wide leading-4 md:leading-6 text-neutral-600 dark:text-neutral-400 pb-1">
          {edu.degree}
        </p>
        <div className="text-xs md:text-sm leading-5 pb-2 text-neutral-600 dark:text-neutral-400">
          <p>{edu.period}</p>
          <p>{edu.location}</p>
        </div>

        {expanded && (
          <motion.div
            key={edu.institution}
            exit={{ y: 40, opacity: 0 }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            layout="scale"
            className="text-gray-800 dark:text-gray-300 text-xs leading-4 md:text-sm md:leading-5 md:tracking-wide tracking-[0.4px] pb-1"
          >
            <p>Minor in {edu.minor}</p>
            {edu.gpa && <p>GPA {edu.gpa}</p>}
          </motion.div>
        )}
      </div>
    ))}
  </motion.div>
);

export default Education;
