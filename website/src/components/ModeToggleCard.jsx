import React from "react";
const ModeToggleCard = ({ mode, toggleMode }) => (
  <button
    onClick={toggleMode}
    aria-label="Toggle color mode"
    className="w-full h-full flex items-center justify-center"
  >
    <span className="relative inline-block w-12 h-6 rounded-full bg-black/20 dark:bg-white/20 transition-colors">
      <span
        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
          mode === "light" ? "translate-x-6" : ""
        }`}
      />
    </span>
  </button>
);

export default ModeToggleCard;
