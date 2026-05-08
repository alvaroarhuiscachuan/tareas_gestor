import { FiCheckCircle } from "react-icons/fi";
import { Buscador } from "./components/Buscador";
import { Dashboard } from "./components/Dashboard";
import { TaskForm } from "./components/TaskForm";
import { Filters } from "./components/Filters";
import { TaskList } from "./components/TaskList";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <div>
          <span className="badge">React + LocalStorage</span>
          <h1>
            <FiCheckCircle /> Gestor de Tareas
          </h1>
          <p>Organiza, filtra y controla el avance de tus tareas.</p>
        </div>

        <ThemeToggle />
      </header>

      <Dashboard />

      <section className="panel">
        <Buscador />
        <TaskForm />
        <Filters />
      </section>

      <TaskList />
    </main>
  );
}

export default App;