import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ThemeProvider>
  </StrictMode>
);