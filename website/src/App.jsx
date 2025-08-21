import { useState } from "react";
import BentoGrid from "./components/BentoGrid.jsx";
import "./main.css";

const App = () => {
  const [filter, setFilter] = useState(null);
  const [mode, setMode] = useState("dark");
  const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="min-h-screen subpixel-antialiased font-body text-black dark:text-neutral-200 bg-gradient-to-b from-neutral-100 to-neutral-300 dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 from-80% transition-colors">
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
