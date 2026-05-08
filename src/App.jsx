import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {

  const [tareas, setTareas] = useState(() => {
    const datos = localStorage.getItem('tareas')
    return datos ? JSON.parse(datos) : []
  })

  const [nombre, setNombre] = useState('')
  const [prioridad, setPrioridad] = useState('Media')
  const [filtro, setFiltro] = useState('todas')
  const [busqueda, setBusqueda] = useState('')
  const [modoOscuro, setModoOscuro] = useState(() => {
    return localStorage.getItem('tema') === 'oscuro'
  })

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  useEffect(() => {
    localStorage.setItem('tema', modoOscuro ? 'oscuro' : 'claro')
  }, [modoOscuro])

  const agregarTarea = (e) => {
    e.preventDefault()

    if (nombre.trim() === '') return

    const nuevaTarea = {
      id: Date.now(),
      nombre: nombre.trim(),
      prioridad,
      completada: false
    }

    setTareas([...tareas, nuevaTarea])

    setNombre('')
    setPrioridad('Media')
  }

  const cambiarEstado = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    )
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  const tareasFiltradas = useMemo(() => {
    return tareas.filter((tarea) => {

      const coincideBusqueda = tarea.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase())

      if (filtro === 'pendientes') {
        return !tarea.completada && coincideBusqueda
      }

      if (filtro === 'completadas') {
        return tarea.completada && coincideBusqueda
      }

      return coincideBusqueda

    })
  }, [tareas, filtro, busqueda])

  const total = tareas.length

  const completadas = tareas.filter(
    (tarea) => tarea.completada
  ).length

  const urgentes = tareas.filter(
    (tarea) => tarea.prioridad === 'Alta'
  ).length

  const progreso =
    total === 0
      ? 0
      : Math.round((completadas / total) * 100)

  return (

    <div className={modoOscuro ? 'app dark' : 'app'}>

      <main className="container py-5">

        <section className="hero mb-4">

          <div>

            <span className="etiqueta">
              Módulos Avanzados
            </span>

            <h1>
              Gestión de Tareas
            </h1>

            <p>
              Sistema moderno para administrar tareas,
              visualizar estadísticas, realizar búsquedas
              dinámicas y personalizar la interfaz.
            </p>

          </div>

          <button
            className="theme-toggle"
            onClick={() => setModoOscuro(!modoOscuro)}
          >
            <i
              className={
                modoOscuro
                  ? 'fa-solid fa-sun'
                  : 'fa-solid fa-moon'
              }
            ></i>
          </button>

        </section>

        <section className="card-custom p-4 mb-4">

          <form
            onSubmit={agregarTarea}
            className="row g-3 align-items-end"
          >

            <div className="col-lg-7">

              <label className="form-label fw-bold">
                Nombre de la tarea
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Ejemplo: Revisar avance del proyecto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />

            </div>

            <div className="col-lg-3">

              <label className="form-label fw-bold">
                Prioridad
              </label>

              <select
                className="form-select form-select-lg"
                value={prioridad}
                onChange={(e) => setPrioridad(e.target.value)}
              >
                <option>Alta</option>
                <option>Media</option>
                <option>Baja</option>
              </select>

            </div>

            <div className="col-lg-2 d-grid">

              <button className="btn btn-primary btn-lg fw-bold">
                Agregar
              </button>

            </div>

          </form>

        </section>

        <section className="row g-3 mb-4">

          <div className="col-md-4">

            <div className="stat-card">

              <small>Total de tareas</small>

              <h2>{total}</h2>

            </div>

          </div>

          <div className="col-md-4">

            <div className="stat-card">

              <small>Progreso</small>

              <h2>{progreso}%</h2>

            </div>

          </div>

          <div className="col-md-4">

            <div className="stat-card">

              <small>Tareas urgentes</small>

              <h2>{urgentes}</h2>

            </div>

          </div>

        </section>

        <section className="card-custom p-4 mb-4">

          <div className="row g-3 align-items-end">

            <div className="col-lg-6">

              <label className="form-label fw-bold">
                Buscador
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Buscar tarea..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />

            </div>

            <div className="col-lg-6">

              <label className="form-label fw-bold">
                Filtrar por estado
              </label>

              <div className="d-flex flex-wrap gap-2">

                <button
                  type="button"
                  className={
                    filtro === 'todas'
                      ? 'btn-filter active'
                      : 'btn-filter'
                  }
                  onClick={() => setFiltro('todas')}
                >
                  Todas
                </button>

                <button
                  type="button"
                  className={
                    filtro === 'pendientes'
                      ? 'btn-filter active'
                      : 'btn-filter'
                  }
                  onClick={() => setFiltro('pendientes')}
                >
                  Pendientes
                </button>

                <button
                  type="button"
                  className={
                    filtro === 'completadas'
                      ? 'btn-filter active'
                      : 'btn-filter'
                  }
                  onClick={() => setFiltro('completadas')}
                >
                  Completadas
                </button>

              </div>

            </div>

          </div>

        </section>

        <section className="lista-tareas">

          {
            tareasFiltradas.length === 0
              ? (
                <div className="empty-box">
                  No hay tareas para mostrar.
                </div>
              )
              : (
                tareasFiltradas.map((tarea) => (

                  <article
                    key={tarea.id}
                    className={`task-item ${tarea.prioridad.toLowerCase()} ${tarea.completada ? 'completed' : ''}`}
                  >

                    <div>

                      <h4>{tarea.nombre}</h4>

                      <div className="d-flex flex-wrap gap-2">

                        <span className={`badge-priority ${tarea.prioridad.toLowerCase()}`}>
                          Prioridad: {tarea.prioridad}
                        </span>

                        <span className="badge-status">
                          Estado: {tarea.completada ? 'Completada' : 'Pendiente'}
                        </span>

                      </div>

                    </div>

                    <div className="acciones">

                      <button
                        className="btn btn-outline-primary fw-bold"
                        onClick={() => cambiarEstado(tarea.id)}
                      >
                        {
                          tarea.completada
                            ? 'Marcar pendiente'
                            : 'Completar'
                        }
                      </button>

                      <button
                        className="btn btn-outline-danger fw-bold"
                        onClick={() => eliminarTarea(tarea.id)}
                      >
                        Eliminar
                      </button>

                    </div>

                  </article>

                ))
              )
          }

        </section>

      </main>

    </div>

  )
}

export default App