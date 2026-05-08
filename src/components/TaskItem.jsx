import { FiTrash2 } from "react-icons/fi";
import { useTasks } from "../context/TaskContext";

export function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li className="task-item">
      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span className={`task-title ${task.completed ? "completed" : ""}`}>
          {task.title}
        </span>
      </div>

      <span className={`priority ${task.priority.toLowerCase()}`}>
        {task.priority}
      </span>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        <FiTrash2 /> Eliminar
      </button>
    </li>
  );
}