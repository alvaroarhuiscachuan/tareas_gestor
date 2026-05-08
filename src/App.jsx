import React, { useState } from 'react';

// 1. Tus componentes (Métricas y Búsqueda)
import { Buscador } from './components/Buscador';
import { Dashboard } from './components/Dashboard';

// 2. Componentes de tu equipo
import { TaskForm } from "./components/TaskForm";
import { Filters } from "./components/Filters";
import { TaskList } from "./components/TaskList";

function App() {
  // DATOS DE PRUEBA: Simulamos la base de datos que hará tu Lead Developer
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Diseñar arquitectura del sistema", prioridad: "Alta", estado: "Pendiente" },
    { id: 2, texto: "Revisar inventario de repuestos", prioridad: "Media", estado: "Completada" },
    { id: 3, texto: "Aprobar Pull Request en GitHub", prioridad: "Alta", estado: "Pendiente" },
    { id: 4, texto: "Actualizar documentación", prioridad: "Baja", estado: "Pendiente" }
  ]);

  // ESTADO DEL BUSCADOR: Guarda lo que el usuario escribe
  const [textoBusqueda, setTextoBusqueda] = useState("");

  // LÓGICA DEL BUSCADOR: Filtra las tareas según el texto
  const tareasFiltradas = tareas.filter((tarea) => 
    tarea.texto.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Gestor de Tareas</h1>
      
      {/* Tu trabajo integrado */}
      <Dashboard tareas={tareas} />
      <Buscador setTextoBusqueda={setTextoBusqueda} />

      {/* El trabajo de tu equipo integrado */}
      <TaskForm />
      <Filters />
      <TaskList />

      {/* --- DEMO TEMPORAL PARA QA --- */}
      <div style={{ marginTop: '30px', padding: '20px', border: '2px dashed #bbb', borderRadius: '8px' }}>
        <h3>Lista de Tareas (Demo Integración)</h3>
        {tareasFiltradas.length === 0 ? (
          <p style={{ color: 'gray' }}>No se encontraron tareas con esa búsqueda.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tareasFiltradas.map((tarea) => (
              <li key={tarea.id} style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                <span>{tarea.texto}</span>
                <span style={{ fontSize: '14px', color: tarea.prioridad === 'Alta' ? 'red' : 'gray' }}>
                  [{tarea.prioridad}] - {tarea.estado}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* --------------------------------------------------------------- */}

    </main>
  );
}

export default App;