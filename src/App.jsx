import { TaskForm } from "./components/TaskForm";
import { Filters } from "./components/Filters";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <main>
      <h1>Gestor de Tareas</h1>

      <TaskForm />
      <Filters />
      <TaskList />
    </main>
  );
}

export default App;