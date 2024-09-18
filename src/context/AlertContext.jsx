import React, { createContext, useContext, useState } from 'react';
import AlertModal from '../components/AlertModal';

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const setAlert = (alert) => { // Cambia addAlert a setAlert
        setAlerts((prev) => [...prev, alert]);
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
        setAlerts([]);
    };

    return (
        <AlertContext.Provider value={{ setAlert }}> {/* Cambia addAlert a setAlert */}
            {children}
            <AlertModal alerts={alerts} isOpen={isOpen} onClose={onClose} />
        </AlertContext.Provider>
    );
};

export default AlertProvider;