/**
 * @file AlertProvider.jsx
 * @description Proveedor de contexto para gestionar alertas en la aplicación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente permite a los hijos acceder y establecer alertas.
 */

import React, { createContext, useContext, useState } from 'react';
import AlertModal from '../components/AlertModal'; // Importa el componente de modal de alerta

// Crea el contexto de alertas
const AlertContext = createContext();

/**
 * Hook para acceder al contexto de alertas.
 * @returns {Object} El contexto de alertas.
 */
export const useAlert = () => {
    return useContext(AlertContext); // Devuelve el contexto de alertas
};

/**
 * Componente proveedor de alertas.
 * @param {ReactNode} children - Los componentes hijos que pueden acceder al contexto de alertas.
 * @returns {JSX.Element} El proveedor de alertas.
 */
const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]); // Estado para almacenar las alertas
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del modal de alertas

    /**
     * Función para establecer una nueva alerta.
     * @param {string} alert - El mensaje de alerta a establecer.
     */
    const setAlert = (alert) => { // Cambia addAlert a setAlert
        setAlerts((prev) => [...prev, alert]); // Agrega la nueva alerta a la lista
        setIsOpen(true); // Abre el modal de alertas
    };

    /**
     * Función para cerrar el modal de alertas y limpiar las alertas.
     */
    const onClose = () => {
        setIsOpen(false); // Cierra el modal de alertas
        setAlerts([]); // Limpia las alertas
    };

    return (
        <AlertContext.Provider value={{ setAlert }}> {/* Proporciona el método setAlert a los hijos */}
            {children} 
            <AlertModal alerts={alerts} isOpen={isOpen} onClose={onClose} /> {/* Modal de alertas */}
        </AlertContext.Provider>
    );
};

export default AlertProvider; // Exporta el proveedor de alertas
