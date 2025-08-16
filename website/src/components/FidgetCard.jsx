import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuCat, LuLamp } from "react-icons/lu";

const FidgetCard = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [icon, setIcon] = useState(false);
  const moveCat = () => {
    setIcon(!icon);
    setPos({
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
    });
  };
  return (
    <div className="relative h-32 w-full cursor-pointer overflow-hidden">
      <motion.span
        animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="absolute text-3xl select-none"
        style={{ transform: "translate(-50%, -50%)" }}
        onClick={moveCat}
      >
        {icon ? <LuCat /> : <LuLamp />}
      </motion.span>
      Click the cat!
    </div>
  );
};

export default FidgetCard;
