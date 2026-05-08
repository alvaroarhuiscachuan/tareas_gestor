import { FiAlertCircle, FiCheck, FiClock, FiList } from "react-icons/fi";
import { useTasks } from "../context/TaskContext";

export function Dashboard() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completadas = tasks.filter((task) => task.completed).length;
  const pendientes = tasks.filter((task) => !task.completed).length;
  const urgentes = tasks.filter((task) => task.priority === "Alta").length;

  return (
    <section className="dashboard">
      <div className="dashboard-grid">
        <div className="stat-card">
          <span><FiList /> Total</span>
          <strong>{total}</strong>
        </div>

        <div className="stat-card">
          <span><FiCheck /> Completadas</span>
          <strong>{completadas}</strong>
        </div>

        <div className="stat-card">
          <span><FiClock /> Pendientes</span>
          <strong>{pendientes}</strong>
        </div>

        <div className="stat-card">
          <span><FiAlertCircle /> Urgentes</span>
          <strong>{urgentes}</strong>
        </div>
      </div>
    </section>
  );
}