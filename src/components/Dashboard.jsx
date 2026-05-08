import React from 'react';

export const Dashboard = ({ tareas }) => {
    // 1. Cálculos matemáticos (Tus KPIs)
    const totalTareas = tareas.length;
    
    // Filtramos para contar las completadas y las urgentes
    const completadas = tareas.filter(tarea => tarea.estado === 'Completada').length;
    const urgentes = tareas.filter(tarea => tarea.prioridad === 'Alta').length;

    // Calculamos el porcentaje (evitamos dividir entre cero)
    const porcentajeProgreso = totalTareas === 0 ? 0 : Math.round((completadas / totalTareas) * 100);

    // 2. Interfaz visual del Dashboard
    return (
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', textAlign: 'center' }}>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', flex: 1, border: '1px solid #ddd' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>Total de Tareas</h4>
                <h2 style={{ margin: '0', fontSize: '24px' }}>{totalTareas}</h2>
            </div>
            
            <div style={{ padding: '15px', backgroundColor: '#e6f4ea', borderRadius: '8px', flex: 1, border: '1px solid #cce8d6' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#137333' }}>Progreso</h4>
                <h2 style={{ margin: '0', fontSize: '24px', color: '#137333' }}>{porcentajeProgreso}%</h2>
            </div>
            
            <div style={{ padding: '15px', backgroundColor: '#fce8e6', borderRadius: '8px', flex: 1, border: '1px solid #fad2cf' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#c5221f' }}>Urgentes (Alta)</h4>
                <h2 style={{ margin: '0', fontSize: '24px', color: '#c5221f' }}>{urgentes}</h2>
            </div>
        </div>
    );
};