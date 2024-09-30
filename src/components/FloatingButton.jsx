/**
 * @file FloatingButton.jsx
 * @description Componente para mostrar un botón flotante que dirige al panel de administración.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente se renderiza solo si el usuario tiene permisos de administrador, permitiéndole acceder al panel administrativo.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Componente para el botón flotante de acceso al panel de administración.
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.isAdmin - Indica si el usuario tiene permisos de administrador.
 * @returns {JSX.Element|null} Un botón flotante que redirige al panel de administración, o null si el usuario no es admin.
 */
const FloatingButton = ({ isAdmin }) => {
  // Si el usuario no es administrador, no renderiza el botón
  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-5 left-5 z-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer shadow-md">
      <NavLink to="/admin-article">
        <button className="text-white">Panel Admin</button>
      </NavLink>
    </div>
  );
};

export default FloatingButton;

