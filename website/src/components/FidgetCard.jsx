import React, { useState } from "react";
import { motion } from "framer-motion";

const FidgetCard = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const moveCat = () => {
    setPos({
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
    });
  };
  return (
    <div
      onClick={moveCat}
      className="relative h-32 w-full cursor-pointer overflow-hidden"
    >
      <motion.span
        animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="absolute text-3xl select-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        😺
      </motion.span>
      <p className="absolute bottom-2 w-full text-center text-xs text-gray-700 dark:text-textSecondary">
        Click the cat!
      </p>
    </div>
  );
};

export default FidgetCard;
