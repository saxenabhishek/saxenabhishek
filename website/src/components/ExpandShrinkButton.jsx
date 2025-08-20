import { RiExpandDiagonalSLine } from "react-icons/ri";
import { RiFullscreenExitLine } from "react-icons/ri";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { useEffect, useCallback } from "react";

const ExpandShrinkBtn = ({ onFilterChange, value, expanded, mode }) => {
  const initialColor = useMotionValue("100% 0 0");
  const setColor = useCallback(() => {
    if (mode === "dark") {
      initialColor.set("100% 0 0");
    } else {
      initialColor.set("0% 0 0");
    }
  }, [mode, initialColor]);
  useEffect(() => setColor(), [setColor]);
  const color = useMotionTemplate`oklch(${initialColor})`;
  return (
    <motion.span
      layout
      style={{ color }}
      whileHover={{ scale: 1.3 }}
      onHoverStart={() => initialColor.set("77.7% 0.152 181.912")}
      onHoverEnd={setColor}
      className="absolute top-0 right-0 p-1"
      onClick={() => (expanded ? onFilterChange(null) : onFilterChange(value))}
    >
      {expanded ? (
        <RiFullscreenExitLine className="w-6 h-6" />
      ) : (
        <RiExpandDiagonalSLine className="w-6 h-6" />
      )}
    </motion.span>
  );
};

export default ExpandShrinkBtn;
