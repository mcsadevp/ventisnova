import React, { useState } from 'react';
import Navbar from "./Navbar";
import { useAuth } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { useAlert } from '../context/AlertContext';

const UserDashboard = () => {
  const { setAlert } = useAlert();
  const { user, logout } = useAuth();
  const [newName, setNewName] = useState(user ? user.displayName || user.email : '');
  const [newEmail, setNewEmail] = useState(user ? user.email : '');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setAlert("Error al cerrar sesión: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (newName !== user.displayName) {
        await updateProfile(user, { displayName: newName });
      }
      if (newEmail !== user.email) {
        await user.updateEmail(newEmail);
      }
      if (newPassword) {
        await user.updatePassword(newPassword);
      }
      setAlert("Perfil actualizado exitosamente");
    } catch (error) {
      setAlert("Error al actualizar el perfil: " + error.message);
    }
  };

  return (
    <div className="dashboard">
      <div className="w-full h-full relative">
        <div className="w-full h-40 text-center bg-gradient-to-b from-[#174839] to-[#44A385] md:pt-10 pt-3">
          <Navbar />
          <h2 className="text-2xl font-semibold text-white leading-tight mt-14 text-left ml-[85px] md:mt-8">
            Bienvenido: {newName || newEmail}
          </h2>
          <p className="text-white text-lg mt-2 text-left ml-[85px]">
            Modificá tus datos personales y de contacto.
          </p>
        </div>
        <div class="flex justify-center w-full">
          <div className="bg-customFormGreen text-white px-8 py-6 rounded-lg shadow-lg ml-1 w-11/12 max-w-4xl md: my-10 ">
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
                  placeholder="E-Mail *"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                />
              </div>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nueva contraseña *"
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Debe contener al menos un número, una letra minúscula, una letra mayúscula y al menos 8 o más caracteres"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirmar contraseña *"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Debe contener al menos un número, una letra minúscula, una letra mayúscula y al menos 8 o más caracteres"
                />
              </div>
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
                    Logout
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
