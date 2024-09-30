import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Importamos useAuth
import { useAlert } from '../context/AlertContext'; // Importamos useAlert

function LoginForm() {
  const { setAlert } = useAlert(); // Usa setAlert del contexto
  const [userIdentifier, setUserIdentifier] = useState(""); // Estado para el identificador del usuario (email o nombre de usuario)
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const navigate = useNavigate(); // Hook para redirigir a otras rutas
  const { login, loginWithGoogle, handlePasswordReset } = useAuth(); // Usamos useAuth para obtener funciones de autenticación

  /**
   * Maneja el inicio de sesión con email y contraseña.
   * @param {Event} e - Evento del formulario.
   */
  const handleLogin = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    try {
      await login(userIdentifier, password); // Intenta iniciar sesión
      navigate("/dashboard"); // Redirige al dashboard si el inicio de sesión es exitoso
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setAlert("Error al iniciar sesión: " + error.message); // Usa setAlert para mostrar el error
    }
  };

  /**
   * Maneja el inicio de sesión con Google.
   * @param {Event} e - Evento del botón.
   */
  const handleGoogle = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del botón
    try {
      await loginWithGoogle(); // Intenta iniciar sesión con Google
      navigate("/dashboard"); // Redirige al dashboard si el inicio de sesión es exitoso
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      setAlert("Error al iniciar sesión con Google: " + error.message); // Usa setAlert para mostrar el error
    }
  };

  /**
   * Maneja la solicitud de restablecimiento de contraseña.
   * @param {Event} e - Evento del botón.
   */
  const handleForgotPassword = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del botón

    if (!userIdentifier) {
      setAlert("Por favor, ingresa tu correo electrónico registrado."); // Usa setAlert para mostrar el mensaje
      return;
    }

    try {
      await handlePasswordReset(userIdentifier); // Intenta enviar el correo de restablecimiento
      setAlert("Se ha enviado un correo electrónico para restablecer tu contraseña. Revisa tu bandeja de entrada (o spam) para seguir las instrucciones.");
    } catch (error) {
      console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
      setAlert("Error al enviar el correo electrónico de restablecimiento. Revisa la consola para más detalles."); // Usa setAlert para mostrar el error
    }
  };

  return (
    <div  className="bg-white bg-opacity-10 p-10 mt-12 rounded-lg shadow-lg max-w-lg w-full md:p-10 md:px-32">
      <h2 className="text-xl text-gray-50 font-bold mb-6">Iniciar Sesión</h2>
      <form className="w-full flex flex-col items-center" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario o E-mail"
          className="w-full mb-4 p-2 bg-transparent text-gray-50 border-b border-white outline-none font-semibold"
          value={userIdentifier}
          onChange={(e) => setUserIdentifier(e.target.value)} // Actualiza el estado del identificador del usuario
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-6 p-2 bg-transparent text-white border-b border-white outline-none font-semibold"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
        />
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
