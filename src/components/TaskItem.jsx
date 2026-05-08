import { useTasks } from "../context/TaskContext";

export function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>

      <strong> Prioridad: {task.priority}</strong>

      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
}