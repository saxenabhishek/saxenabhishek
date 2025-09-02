import { RiExpandDiagonalSLine } from "react-icons/ri";
import { RiFullscreenExitLine } from "react-icons/ri";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useEffect, useCallback } from "react";

const ExpandShrinkBtn = ({ onFilterChange, value, expanded, mode }) => {
  const initialColor = useMotionValue(mode == "dark" ? "100% 0 0" : "0% 0 0");
  const scale = useMotionValue(1);
  const color = useMotionTemplate`oklch(${initialColor})`;

  const setColor = useCallback(() => {
    if (mode === "dark") {
      initialColor.set("100% 0 0");
    } else {
      initialColor.set("0% 0 0");
    }
  }, [mode, initialColor]);
  useEffect(() => setColor(), [setColor]);

  const handleClick = () => {
    expanded ? onFilterChange(null) : onFilterChange(value);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setColor();
    animate(scale, 1);
  };
  return (
    <motion.span
      layout
      style={{ color, scale }}
      onHoverStart={() => {
        initialColor.set("77.7% 0.152 181.912");
        animate(scale, 1.3);
      }}
      onHoverEnd={() => {
        setColor();
        animate(scale, 1);
      }}
      className="absolute top-0 right-0 p-1 "
      onClick={handleClick}
    >
      {expanded ? (
        <RiFullscreenExitLine className="w-5 h-5 sm:w-6 sm:h-6" />
      ) : (
        <RiExpandDiagonalSLine className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
    </motion.span>
  );
};

export default ExpandShrinkBtn;
