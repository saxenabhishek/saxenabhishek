import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({ experience, expanded }) => (
  <>
    <h3 className="text-lg font-heading">{experience.company}</h3>
    <p className="text-sm text-gray-400 pb-1">{experience.role}</p>
    <p className="text-xs text-gray-500 pb-1">{experience.period}</p>
    {expanded && (
      <motion.ul
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        className="text-gray-300 text-sm list-disc pl-4 pb-2"
      >
        {experience.highlights.map((resumeItem) => {
          return <li key={resumeItem}>{resumeItem}</li>;
        })}
      </motion.ul>
    )}

    <motion.div className="flex flex-wrap gap-2 mt-auto pb-4">
      {experience.technologies.map((tech, idx) => (
        <motion.span
          layoutId={`${experience.company}-${idx}`}
          key={tech}
          className="bg-teal-400/10 text-teal-400 px-2 py-1 rounded-lg text-xs"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  </>
);

export default ExperienceCard;
