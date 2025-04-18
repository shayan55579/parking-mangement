// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import App from "./App";
import "./index.css";

// Create a root using ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
