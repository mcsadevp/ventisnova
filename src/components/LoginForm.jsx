import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Importamos useAuth

function LoginForm() {
  const [userIdentifier, setUserIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, loginWithGoogle, handlePasswordReset } = useAuth(); // Usamos useAuth

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(userIdentifier, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      alert("Error al iniciar sesión con Google: " + error.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!userIdentifier) {
      alert("Por favor, ingresa tu correo electrónico registrado.");
      return;
    }

    try {
      await handlePasswordReset(userIdentifier);
      alert("Se ha enviado un correo electrónico para restablecer tu contraseña. Revisa tu bandeja de entrada (o spam) para seguir las instrucciones.");
    } catch (error) {
      console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
      alert("Error al enviar el correo electrónico de restablecimiento. Revisa la consola para más detalles.");
    }
  };

  return (
    <div className="flex flex-col items-start justify-center bg-transparent text-white w-[304px] h-[430px] ml-[80px] mt-[50px]">
      <h2 className="text-xl font-bold mb-6">Iniciar Sesión</h2>
      <form className="w-full flex flex-col items-center" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario o E-mail"
          className="w-full mb-4 p-2 bg-transparent text-white border-b border-white outline-none"
          value={userIdentifier}
          onChange={(e) => setUserIdentifier(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-6 p-2 bg-transparent text-white border-b border-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-green-600 rounded cursor-pointer mb-4">
          Iniciar Sesión
        </button>
        <button
          onClick={handleForgotPassword}
          className="text-sm text-gray-300 mt-4 cursor-pointer"
        >
          ¿Olvidaste tu contraseña?
        </button>
        <a href="#" className="text-sm text-gray-300 mt-2">¿No tienes cuenta? Regístrate</a>
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
