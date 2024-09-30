/**
 * @file RegisterForm.jsx
 * @description Componente para el registro de usuarios en la aplicación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente permite a los usuarios registrarse, utilizando autenticación por email y Google.
 */

import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useAlert } from '../context/AlertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 

/**
 * RegisterForm - Componente principal para el registro de usuarios.
 * @returns {JSX.Element} - Renderiza el formulario de registro.
 */
function RegisterForm() {
  const { setAlert } = useAlert(); // Hook para mostrar alertas
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmar la contraseña
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para mostrar/ocultar confirmación de contraseña

  const { register, loginWithGoogle } = useAuth(); // Funciones de autenticación
  const navigate = useNavigate(); // Hook para la navegación

  // Función para validar la contraseña
  const isPasswordValid = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/; // Regex para validar la contraseña
    return regex.test(password);
  };

  // Manejo del registro de usuario
  const handleRegister = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (password !== confirmPassword) {
      setAlert("Las contraseñas no coinciden"); // Muestra alerta si las contraseñas no coinciden
      return;
    }
    if (!isPasswordValid(password)) {
      setAlert("La contraseña debe tener al menos 8 caracteres, al menos una letra mayúscula, un número y un símbolo."); // Alerta de validación
      return;
    }
    try {
      const result = await register(email, password, username); // Registro del usuario
      let user;
      if (result && result.user) {
        user = result.user; // Obtiene el usuario registrado
      } else if (result && result.uid) {
        user = result; // Maneja la respuesta alternativa
      } else {
        throw new Error("No se pudo obtener el usuario después del registro"); // Manejo de errores
      }
      await updateProfile(user, { displayName: username || email }); // Actualiza el perfil del usuario
      // Limpia los campos del formulario
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAlert("Registro exitoso"); // Muestra alerta de éxito
      navigate("/dashboard"); // Navega al dashboard
    } catch (error) {
      console.error("Error al registrar:", error);
      setAlert("Error al registrar: " + error.message); // Manejo de errores
    }
  };

  // Manejo del inicio de sesión con Google
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      setAlert("Inicio de sesión con Google exitoso"); // Alerta de éxito
      navigate("/dashboard"); // Navega al dashboard
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      setAlert("Error al iniciar sesión con Google: " + error.message); // Manejo de errores
    }
  };

  // Alterna la visibilidad de la contraseña
  const toggleShowPassword = () => {
    setShowPassword(true);
    setTimeout(() => {
      setShowPassword(false); // Oculta la contraseña después de 2 segundos
    }, 2000);
  };

  // Alterna la visibilidad de la confirmación de la contraseña
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(true);
    setTimeout(() => {
      setShowConfirmPassword(false); // Oculta la contraseña después de 2 segundos
    }, 2000);
  };

  return (
    <div className="bg-white bg-opacity-10 p-10 md:mt-12 mt-14 rounded-lg shadow-lg max-w-lg w-full md:p-10 md:px-32 mx-5">
      <h2 className="text-xl font-bold text-white mb-6">Registrarse</h2>
      <form className="w-full flex flex-col items-center" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Usuario"
          className="w-full mb-4 p-2 bg-transparent text-white border-b border-white outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Actualiza el nombre de usuario
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="w-full mb-4 p-2 bg-transparent text-white border-b border-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualiza el email
        />
        <div className="relative w-full mb-4">
          <input
            type={showPassword ? "text" : "password"} // Cambia el tipo de input según el estado
            placeholder="Contraseña"
            className="w-full p-2 bg-transparent text-white border-b border-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza la contraseña
          />
          <span
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer"
            onClick={toggleShowPassword} // Llama a la función para mostrar/ocultar
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </span>
        </div>
        <div className="relative w-full mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"} // Cambia el tipo de input según el estado
            placeholder="Confirmar contraseña"
            className="w-full p-2 bg-transparent text-white border-b border-white outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Actualiza la confirmación de la contraseña
          />
          <span
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer"
            onClick={toggleShowConfirmPassword} // Llama a la función para mostrar/ocultar la confirmación de contraseña
          >
            <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
          </span>
        </div>
        <button type="submit" className="w-full p-2 bg-customLightGreen rounded cursor-pointer mb-4">
          Registrarse
        </button>
        <NavLink to="/perfil" className="text-sm text-gray-300 mt-4">
          <span className="underline">Olvidé mi</span>
          <span className="text-green-300 underline"> contraseña</span>
        </NavLink>
        <NavLink to="/perfil" className="text-sm text-gray-300 mt-2">¿Ya tienes cuenta? Inicia sesión</NavLink>
        <button
          type="button"
          className="w-full mt-5 p-2 border border-white rounded text-white bg-transparent flex items-center justify-center"
          onClick={handleGoogleSignIn} // Maneja el inicio de sesión con Google
        >
          <img
            src="https://img.icons8.com/color/32/000000/google-logo.png"
            alt="Logo de Google"
            className="mr-2 text-xl"
          />
          Ingresar con Google
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
