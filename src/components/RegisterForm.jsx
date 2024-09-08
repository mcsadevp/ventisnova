import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../context/AuthContext"; // Importa useAuth
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const { register, loginWithGoogle } = useAuth(); // Usa useAuth para obtener las funciones necesarias
  const navigate = useNavigate(); // Usa useNavigate para redirigir

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      const result = await register(email, password);
      let user;
      if (result && result.user) {
        user = result.user;
      } else if (result && result.uid) {
        user = result;
      } else {
        throw new Error("No se pudo obtener el usuario después del registro");
      }
      await updateProfile(user, { displayName: username });
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert("Registro exitoso");
      navigate("/dashboard"); // Redirige al dashboard después del registro
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al registrar: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      alert("Inicio de sesión con Google exitoso");
      navigate("/dashboard"); // Redirige al dashboard después de iniciar sesión con Google
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      alert("Error al iniciar sesión con Google: " + error.message);
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="w-full mb-4 p-2 bg-transparent text-white border-b border-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 p-2 bg-transparent text-white border-b border-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="w-full mb-6 p-2 bg-transparent text-white border-b border-white outline-none"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-green-600 rounded cursor-pointer mb-4">
          Registrarse
        </button>
        <a href="#" className="text-sm text-gray-300 mt-4">¿Olvidaste tu contraseña?</a>
        <a href="#" className="text-sm text-gray-300 mt-2">¿Ya tienes cuenta? Inicia sesión</a>
        <button
          type="button"
          className="w-full mt-5 p-2 border border-white rounded text-white bg-transparent flex items-center justify-center"
          onClick={handleGoogleSignIn}
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
