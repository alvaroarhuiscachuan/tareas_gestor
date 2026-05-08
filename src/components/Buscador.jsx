import React from 'react';

export const Buscador = ({ setTextoBusqueda }) => {
    
    // Esta función se ejecuta cada vez que el usuario presiona una tecla
    const manejarCambio = (evento) => {
        setTextoBusqueda(evento.target.value);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <input 
                type="text" 
                placeholder="🔍 Buscar tarea por nombre..." 
                onChange={manejarCambio}
                style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '6px', 
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                }}
            />
        </div>
    );
};