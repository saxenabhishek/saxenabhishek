import { motion } from "motion/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ModeToggleCard = ({ mode, toggleMode }) => {
  const btn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.1 },
  };
  const icon = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    hover: { rotate: -90 },
  };
  return (
    <motion.button
      onClick={toggleMode}
      variants={btn}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      aria-label="Toggle color mode"
      className="w-full h-full flex items-center justify-center group/btn cursor-pointer"
    >
      <motion.span
        style={{
          justifyContent: mode === "light" ? "flex-end" : "flex-start",
        }}
        className="flex flex-row items-center w-16 p-2 group-hover/btn:outline-1 outline-offset-4  outline-teal-400 rounded-full dark:border-white/50 border-black/50 border"
      >
        <motion.span
          layout
          variants={icon}
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
          className={` w-4 h-4`}
        >
          {mode === "light" ? <FiSun /> : <FiMoon />}
        </motion.span>
      </motion.span>
    </motion.button>
  );
};

export default ModeToggleCard;
