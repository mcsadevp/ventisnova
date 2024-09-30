/**
 * @file UserDashboardView.jsx
 * @description Componente para la vista del tablero de usuario, que incluye la barra de navegación, el panel de usuario, y un botón flotante.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente verifica si el usuario tiene privilegios de administrador y presenta el panel correspondiente.
 */

import React from 'react';
import { useAuth } from "../context/AuthContext";
import UserDashboard from "../components/UserDashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingButton from "../components/FloatingButton";
import AdminCheck from "../components/AdminCheck"; 

const UserDashboardView = () => {
  const { user } = useAuth();  // Obtiene la información del usuario desde el contexto de autenticación

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />  {/* Componente de navegación superior */}
      <AdminCheck>
        {(isAdmin) => (
          <>
            <UserDashboard />  {/* Panel de usuario que muestra información relevante */}
            <FloatingButton isAdmin={isAdmin} />  {/* Botón flotante que cambia según los privilegios del usuario */}
          </>
        )}
      </AdminCheck>
      <Footer />
    </div>
  );
}

export default UserDashboardView;
