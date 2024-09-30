/**
 * @file UserDashboard.jsx
 * @description Componente del panel de usuario que permite la gestión del perfil.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente permite al usuario actualizar su nombre y contraseña, y también manejar la sesión.
 */

import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { useAuth } from '../context/AuthContext';
import { updateProfile, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { useAlert } from '../context/AlertContext';

/**
 * Componente del panel de usuario.
 * @returns {JSX.Element} El dashboard del usuario.
 */
const UserDashboard = () => {
  const { setAlert } = useAlert();
  const { user, logout, auth } = useAuth(); // Obtiene el contexto de autenticación
  const [newName, setNewName] = useState(user ? user.displayName || user.email : '');
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false);

  // Efecto para determinar si el usuario inició sesión con Google
  useEffect(() => {
    if (user && user.providerData.length > 0) {
      setIsGoogleUser(user.providerData[0].providerId === 'google.com');
    }
  }, [user]);

  /**
   * Función para cerrar sesión del usuario.
   */
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setAlert("Error al cerrar sesión: " + error.message);
    }
  };

  /**
   * Función para re-autenticar al usuario con su contraseña actual.
   * @param {string} currentPassword - La contraseña actual del usuario.
   */
  const reauthenticate = async (currentPassword) => {
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    try {
      await reauthenticateWithCredential(user, credential);
    } catch (error) {
      throw new Error("La autenticación ha fallado. Asegúrate de que la contraseña actual es correcta.");
    }
  };

  /**
   * Función para manejar el envío del formulario.
   * @param {Event} e - El evento del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Actualiza el nombre si es diferente
      if (newName !== user.displayName) {
        await updateProfile(user, { displayName: newName });
      }

      // Actualiza la contraseña si no es un usuario de Google
      if (newPassword && !isGoogleUser) {
        await reauthenticate(currentPassword);
        await updatePassword(user, newPassword);
      }

      setAlert("Perfil actualizado exitosamente");
      // Limpiar los campos de contraseña
      setNewPassword('');
      setCurrentPassword('');
    } catch (error) {
      setAlert(error.message.includes("La autenticación ha fallado")
        ? error.message
        : "Error al actualizar el perfil: " + error.message);
    }
  };

  return (
    <div className="dashboard">
      <div className="w-full h-full relative">
        <div className="w-full h-40 text-center bg-gradient-to-b from-[#174839] to-[#44A385] md:pt-10 pt-3">
          <Navbar />
          <h2 className="text-2xl font-semibold text-white leading-tight mt-14 text-left ml-[85px] md:mt-8">
            Bienvenid@: {newName || user.email}
          </h2>
          <p className="text-white text-lg mt-2 text-left ml-[85px]">
            Puedes modificar tu nombre o contraseña.
          </p>
        </div>
        <div className="flex justify-center w-full">
          <div className="bg-customFormGreen text-white px-8 py-6 rounded-lg shadow-lg ml-1 w-11/12 max-w-4xl md:my-10">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Nombre *"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full bg-transparent border-b border-teal-600 text-white py-2 focus:outline-none"
                />
                <p className="text-sm text-teal-400 mt-1">Este campo no se puede modificar</p>
              </div>

              {!isGoogleUser && (
                <>
                  <div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña actual *"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Nueva contraseña *"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Debe contener al menos un número, una letra minúscula, una letra mayúscula y al menos 8 o más caracteres"
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-teal-400 text-sm mt-1 hover:text-teal-300"
                    >
                      {showPassword ? "Ocultar" : "Mostrar"} contraseña
                    </button>
                  </div>
                </>
              )}

              {isGoogleUser && (
                <p className="text-sm text-teal-400 mt-1">
                  No puedes cambiar la contraseña ya que has iniciado sesión con Google.
                </p>
              )}

              <div className="w-full h-full flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
                <button
                  type="submit"
                  className="bg-customGreen text-white py-2 px-4 rounded hover:bg-teal-800 transition duration-300 w-[295px] md:w-[250px] mb-4 md:mb-0"
                >
                  Guardar cambios
                </button>
                <NavLink to='/'>
                  <button
                    type="button"
                    className="bg-customGreen text-white py-2 px-4 rounded hover:bg-teal-800 transition duration-300 w-[295px] md:w-[250px]"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
