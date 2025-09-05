import { motion } from "motion/react";

const ExperienceCard = ({ experience, expanded, idx }) => (
  <>
    <h2 className="text-lg tracking-[0.1px] md:tracking-normal md:text-xl leading-7 pb-1">
      {experience.company}
    </h2>
    <h3 className="text-sm md:text-base tracking-wide leading-4 md:leading-6 text-neutral-600 dark:text-neutral-400 pb-1">
      {experience.role}
    </h3>
    <h4 className="text-xs md:text-sm leading-5 pb-2 text-neutral-600 dark:text-neutral-400">
      {experience.period}
    </h4>
    {expanded && (
      <motion.ul
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-gray-800 dark:text-gray-300 text-xs leading-4 md:text-sm md:leading-5 md:tracking-wide tracking-[0.4px] list-disc pl-4 pb-1"
      >
        {experience.highlights.map((resumeItem) => {
          return <li key={resumeItem}>{resumeItem}</li>;
        })}
      </motion.ul>
    )}

    <motion.div className="flex flex-wrap gap-2 mt-auto pb-4">
      {experience.technologies.map((tech, index) => (
        <motion.span
          layoutId={`${idx}-${experience.company}-${index}`}
          key={tech}
          className="bg-teal-300/20 px-2 py-1 rounded-lg text-[11px] md:text-xs leading-4 tracking-wider font-light"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  </>
);

export default ExperienceCard;
