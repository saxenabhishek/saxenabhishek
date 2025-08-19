import React, { useState } from "react";
import BentoGrid from "./components/BentoGrid.jsx";
import "./assets/styles/main.css";

const App = () => {
  const [filter, setFilter] = useState(null);
  const [mode, setMode] = useState("dark");
  const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="min-h-screen font-body  text-black  bg-black [background:radial-gradient(125%_125%_at_50%_10%,#444_40%,#1c1c1c_100%)] dark:text-textPrimary">
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
