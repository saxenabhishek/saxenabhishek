import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import BentoGrid from "./components/BentoGrid.jsx";
import "./assets/styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BentoGrid />
      </main>
    </div>
  </React.StrictMode>
);
