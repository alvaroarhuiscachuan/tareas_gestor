import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FiSun /> : <FiMoon />}
      {darkMode ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}