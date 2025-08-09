import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ModeToggleCard = ({ mode, toggleMode }) => (
  <button
    onClick={toggleMode}
    aria-label="Toggle color mode"
    className="w-full h-full flex items-center justify-center text-accent"
  >
    {mode === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
  </button>
);

export default ModeToggleCard;
