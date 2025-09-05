import { useState } from "react";
import BentoGrid from "./components/BentoGrid.jsx";
import { LayoutGroup, motion } from "motion/react";
import "./main.css";

const App = () => {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const [filter, setFilter] = useState(null);
  const [mode, setMode] = useState(mql.matches ? "dark" : "light");
  const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <main
        className={`min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-300 dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 from-80% transition-colors`}
      >
        <LayoutGroup>
          <section className=" p-4 max-w-7xl mx-auto subpixel-antialiased text-black dark:text-white font-body grid gap-4 grid-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center-safe">
            <BentoGrid
              filter={filter}
              onFilterChange={setFilter}
              mode={mode}
              toggleMode={toggleMode}
            />
          </section>
        </LayoutGroup>
      </main>
    </div>
  );
};

export default App;
