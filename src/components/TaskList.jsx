import { useTasks } from "../context/TaskContext";
import { TaskItem } from "./TaskItem";

export function TaskList() {
  const { filteredTasks } = useTasks();

  if (filteredTasks.length === 0) {
    return <p>No hay tareas para mostrar.</p>;
  }

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}