import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage(
    "tasks",
    []
  );

  const [filter, setFilter] =
    useState("all");

  const addTask = (title, priority) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      priority,
      completed: false,
      createdAt:
        new Date().toISOString(),
    };

    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  };

  const filteredTasks = useMemo(() => {
    if (filter === "completed") {
      return tasks.filter(
        (task) => task.completed
      );
    }

    if (filter === "pending") {
      return tasks.filter(
        (task) => !task.completed
      );
    }

    return tasks;
  }, [tasks, filter]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filteredTasks,
        addTask,
        deleteTask,
        toggleTask,
        filter,
        setFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}