import React, { useState } from "react";
import Header from "./components/Header.jsx";
import BentoGrid from "./components/BentoGrid.jsx";
import "./assets/styles/main.css";

const App = () => {
  const [filter, setFilter] = useState(null);
  return (
    <div className="min-h-screen text-textPrimary ">
      <Header activeFilter={filter} onFilterChange={setFilter} />
      <main className="pt-20 p-4 max-w-7xl mx-auto">
        <BentoGrid filter={filter} />
      </main>
    </div>
  );
};

export default App;
