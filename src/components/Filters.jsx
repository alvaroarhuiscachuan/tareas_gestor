import { useTasks } from "../context/TaskContext";

export function Filters() {
  const { filter, setFilter } = useTasks();

  return (
    <div>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        Todas
      </button>

      <button onClick={() => setFilter("pending")} disabled={filter === "pending"}>
        Pendientes
      </button>

      <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>
        Completadas
      </button>
    </div>
  );
}