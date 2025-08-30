import { motion } from "motion/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ModeToggleCard = ({ mode, toggleMode }) => {
  const btn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.05, width: "64px" },
    tap: { scale: 1.05 },
  };
  const icon = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    hover: { rotate: -90 },
    tap: { rotate: 0 },
  };
  return (
    <motion.button
      onClick={toggleMode}
      variants={btn}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      aria-label="Toggle color mode"
      className="w-auto h-full flex items-center justify-center group/btn cursor-pointer"
    >
      <motion.span
        style={{
          justifyContent: mode === "light" ? "flex-end" : "flex-start",
        }}
        className="flex flex-row items-center w-full p-1 sm:p-2 group-hover/btn:outline-1 outline-offset-2 outline-teal-400 rounded-full dark:border-white/50 border-black/50 border transition-colors"
      >
        <motion.span
          layout="position"
          variants={icon}
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
          className={`w-4 h-4`}
        >
          {mode === "light" ? <FiSun /> : <FiMoon />}
        </motion.span>
      </motion.span>
    </motion.button>
  );
};

export default ModeToggleCard;
