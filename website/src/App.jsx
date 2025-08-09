import React, { useState } from "react";
import BentoGrid from "./components/BentoGrid.jsx";
import "./assets/styles/main.css";

const App = () => {
  const [filter, setFilter] = useState(null);
  const [mode, setMode] = useState("dark");
  const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="min-h-screen font-body bg-white text-black dark:bg-primary dark:text-textPrimary">
        <main className="p-4 max-w-7xl mx-auto">
          <BentoGrid
            filter={filter}
            onFilterChange={setFilter}
            mode={mode}
            toggleMode={toggleMode}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
