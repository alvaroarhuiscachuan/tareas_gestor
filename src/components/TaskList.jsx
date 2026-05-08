import { TaskItem } from "./TaskItem";
import { useTasks } from "../context/TaskContext";

export function TaskList() {
  const { filteredTasks } = useTasks();

  return (
    <section className="task-list">
      {filteredTasks.length === 0 ? (
        <p className="empty-text">No hay tareas para mostrar.</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  );
}