import React, { useState } from 'react';
import Navbar from "./Navbar";
import { useAuth } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { useAlert } from '../context/AlertContext'; 
// Asegúrate de importar la función que necesitas para actualizar la contraseña
// import { updatePassword } from 'firebase/auth'; // Descomenta si es necesario

function UserDashboard() {
  const { setAlert } = useAlert(); // Usa setAlert del contexto
  const { user, logout } = useAuth(); // Obtén el usuario del contexto
  const [newName, setNewName] = useState(user ? user.displayName : '');
  const [newEmail, setNewEmail] = useState(user ? user.email : '');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  const handleLogout = async () => {
    try {
      await logout(); // Llama a la función de logout
    } catch (error) {
      setAlert("Error al cerrar sesión: " + error.message); // Usa setAlert para el error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Actualiza solo el nombre si se ha cambiado
      if (newName !== user.displayName) {
        await updateProfile(user, { displayName: newName });
      }
      // Actualiza el email solo si se ha cambiado
      if (newEmail !== user.email) {
        await user.updateEmail(newEmail);
      }
      // Actualiza la contraseña solo si se ha proporcionado
      if (newPassword) {
        await user.updatePassword(newPassword);
      }
      setAlert("Perfil actualizado exitosamente"); // Usa setAlert para el éxito
    } catch (error) {
      setAlert("Error al actualizar el perfil: " + error.message); // Usa setAlert para el error
    }
  };

  return (
    <div className="dashboard">
      <div className="w-full h-full relative md:mt-16 mt-[70px]">
          <Navbar />
        <div className="w-full h-40 text-center bg-gradient-to-b from-[#174839] to-[#44A385] md:pt-10 pt-3">
          {user && user.displayName && (
            <h2 className="text-3xl font-semibold text-white leading-tight text-left ml-[85px]">
              Bienvenido: {user.displayName}
            </h2>
          )}
          <p className="text-white text-lg mt-2 text-left ml-[85px]">
            Modificá tus datos personales y de contacto.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className="bg-customFormGreen text-white px-8 py-6 rounded-lg shadow-lg w-11/12 max-w-4xl md:mt-32 my-10 ">
            <form onSubmit={handleSubmit}>
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
                  type={showPassword ? "text" : "password"} // Cambia el tipo según el estado
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
                  value={newPassword} // Agregado para mantener el valor
                  onChange={(e) => setNewPassword(e.target.value)} // Agregado para manejar el cambio
                  className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Debe contener al menos un número, una letra minúscula, una letra mayúscula y al menos 8 o más caracteres"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300 w-full mb-3 mt-5 md:w-[250px]"
                >
                  Guardar cambios
                </button>
                <NavLink to='/'>
                  <button
                    type="button"
                    className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300 w-[295px] md:w-[250px]"
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
