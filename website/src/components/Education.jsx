import { AnimatePresence, motion } from "motion/react";
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

        {expanded && (
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            layout
            className="text-sm md:text-base tracking-wide leading-4 md:leading-6 text-neutral-600 dark:text-neutral-400 pb-1"
          >
            Minor in {edu.minor}
          </motion.p>
        )}
        <div className="text-xs md:text-sm leading-5 text-neutral-600 dark:text-neutral-400">
          <p>{edu.period}</p>
          <p>{edu.location}</p>
        </div>
        {expanded && (
          <motion.div
            layout="position"
            key={edu.institution}
            exit={{ y: -50, opacity: 0 }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xs md:text-sm leading-5 pb-2 text-neutral-600 dark:text-neutral-400"
          >
            {edu.courses && (
              <>
                <p className="text-sm md:text-base tracking-wide leading-4 md:leading-6 text-neutral-600 dark:text-neutral-400 py-1">
                  Courses
                </p>
                <ul className="pl-4 text-gray-800 dark:text-gray-300 text-xs leading-4 md:text-sm md:leading-5 md:tracking-wide tracking-[0.4px] py-2">
                  {edu.courses?.map((cour, idx) => {
                    return (
                      <li key={`cour-${idx}`} className="list-disc">
                        {cour}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </motion.div>
        )}
      </div>
    ))}
  </motion.div>
);

export default Education;
