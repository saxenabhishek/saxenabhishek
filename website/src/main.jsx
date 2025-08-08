import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import BentoGrid from "./components/BentoGrid.jsx";
import "./assets/styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Header />
      <BentoGrid />
    </div>
  </React.StrictMode>
);
