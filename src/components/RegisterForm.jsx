import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../context/AuthContext"; // Importa useAuth
import { NavLink, useNavigate } from "react-router-dom"; // Importa useNavigate
import { useAlert } from '../context/AlertContext'; // Importa useAlert

function RegisterForm() {
  const { setAlert } = useAlert(); // Usa setAlert del contexto
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmar la contraseña
  
  const { register, loginWithGoogle } = useAuth(); // Usa useAuth para obtener las funciones necesarias
  const navigate = useNavigate(); // Usa useNavigate para redirigir

  /**
   * Maneja el registro de un nuevo usuario.
   * @param {Event} e - Evento del formulario.
   */
  const handleRegister = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (password !== confirmPassword) {
      setAlert("Las contraseñas no coinciden"); // Verifica que las contraseñas coincidan
      return;
    }
    try {
      const result = await register(email, password); // Intenta registrar al usuario
      let user;
      if (result && result.user) {
        user = result.user; // Obtiene el usuario registrado
      } else if (result && result.uid) {
        user = result; // Maneja el caso donde se obtiene el uid
      } else {
        throw new Error("No se pudo obtener el usuario después del registro");
      }
      await updateProfile(user, { displayName: username }); // Actualiza el perfil del usuario con el nombre de usuario
      // Reinicia los campos del formulario
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAlert("Registro exitoso"); // Muestra un mensaje de éxito
      navigate("/dashboard"); // Redirige al dashboard después del registro
    } catch (error) {
      console.error("Error al registrar:", error);
      setAlert("Error al registrar: " + error.message); // Muestra un mensaje de error
    }
  };

  /**
   * Maneja el inicio de sesión con Google.
   */
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle(); // Intenta iniciar sesión con Google
      setAlert("Inicio de sesión con Google exitoso"); // Muestra un mensaje de éxito
      navigate("/dashboard"); // Redirige al dashboard después de iniciar sesión con Google
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      setAlert("Error al iniciar sesión con Google: " + error.message); // Muestra un mensaje de error
    }
  };

  return (
    <div className="flex flex-col items-start justify-center bg-transparent text-white w-[304px] h-[430px] ml-[80px] mt-[50px]">
      <h2 className="text-xl font-bold mb-6">Registrarse</h2>
      <form className="w-full flex flex-col items-center" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Usuario"
          className="w-full mb-4 p-2 bg-transparent text-white border-b border-white outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Actualiza el estado del nombre de usuario
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="w-full mb-4 p-2 bg-transparent text-white border-b border-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 p-2 bg-transparent text-white border-b border-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="w-full mb-6 p-2 bg-transparent text-white border-b border-white outline-none"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} // Actualiza el estado de la confirmación de la contraseña
        />
        <button type="submit" className="w-full p-2 bg-green-600 rounded cursor-pointer mb-4">
          Registrarse
        </button>
        <NavLink to="/perfil" className="text-sm text-gray-300 mt-4"><span className="underline">Olvidé mi</span><span  className="text-green-300 underline"> contraseña</span></NavLink>
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
