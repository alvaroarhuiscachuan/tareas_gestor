import { FiSearch } from "react-icons/fi";
import { useTasks } from "../context/TaskContext";

export function Buscador() {
  const { searchTerm, setSearchTerm } = useTasks();

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar tarea por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="button">
        <FiSearch /> Buscar
      </button>
    </div>
  );
}