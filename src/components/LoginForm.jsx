/**
 * @file LoginForm.jsx
 * @description Componente para el formulario de inicio de sesión.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente permite a los usuarios iniciar sesión, dirigir a pagina para registrarse, y restablecer la contraseña.
 */

import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useAlert } from '../context/AlertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 

/**
 * Componente del formulario de inicio de sesión.
 * @returns {JSX.Element} El formulario de inicio de sesión con opciones de autenticación.
 */
function LoginForm() {
  const { setAlert } = useAlert();
  const [userIdentifier, setUserIdentifier] = useState(""); // Estado para el usuario o correo electrónico
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
  const navigate = useNavigate();
  const { login, loginWithGoogle, handlePasswordReset } = useAuth();

  /**
   * Maneja el inicio de sesión con usuario y contraseña.
   * @param {Object} e - El evento de la forma.
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(userIdentifier, password);
      navigate("/dashboard"); // Redirige al dashboard tras iniciar sesión
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setAlert("Error al iniciar sesión: " + error.message); // Muestra alerta en caso de error
    }
  };

  /**
   * Maneja el inicio de sesión con Google.
   * @param {Object} e - El evento de la forma.
   */
  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      setAlert("Error al iniciar sesión con Google: " + error.message);
    }
  };

  /**
   * Maneja la solicitud de restablecimiento de contraseña.
   * @param {Object} e - El evento de la forma.
   */
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!userIdentifier) {
      setAlert("Por favor, ingresa tu correo electrónico registrado.");
      return;
    }
    try {
      await handlePasswordReset(userIdentifier);
      setAlert("Se ha enviado un correo electrónico para restablecer tu contraseña.");
    } catch (error) {
      console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
      setAlert("Error al enviar el correo electrónico de restablecimiento.");
    }
  };

  /**
   * Alterna la visibilidad de la contraseña.
   */
  const toggleShowPassword = () => {
    setShowPassword(true);
    setTimeout(() => {
      setShowPassword(false); // Oculta la contraseña después de 2 segundos
    }, 2000);
  };

  return (
    <div className="bg-white bg-opacity-10 p-10 mt-12 rounded-lg shadow-lg max-w-lg w-full md:p-10 md:px-32">
      <h2 className="text-xl text-gray-50 font-bold mb-6">Iniciar Sesión</h2>
      <form className="w-full flex flex-col items-center" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario o E-mail"
          className="w-full mb-4 p-2 bg-transparent text-gray-50 border-b border-white outline-none font-semibold"
          value={userIdentifier}
          onChange={(e) => setUserIdentifier(e.target.value)}
        />
        <div className="relative w-full mb-6">
          <input
            type={showPassword ? "text" : "password"} // Cambia el tipo de input según el estado
            placeholder="Contraseña"
            className="w-full p-2 bg-transparent text-white border-b border-white outline-none font-semibold"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer"
            onClick={toggleShowPassword} // Llama a la función para mostrar/ocultar
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </span>
        </div>
        <button type="submit" className="w-full p-2 bg-customLightGreen rounded cursor-pointer mb-4">
          Iniciar Sesión
        </button>
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm text-gray-300 mt-4 cursor-pointer"
        >
          <span className="underline">Olvidé mi</span><span className="text-green-300 underline"> contraseña</span>
        </button>
        <NavLink to="/register" className="text-sm text-gray-300 mt-2">
          ¿No tienes cuenta? Regístrate
        </NavLink>
        <button
          type="button"
          onClick={handleGoogle}
          className="w-full mt-5 p-2 border border-white rounded text-white bg-transparent flex items-center justify-center"
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

export default LoginForm;
