import React, { useState } from "react";
import { updateProfile } from "firebase/auth";

function RegisterForm({ auth }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      // Registrar el usuario
      const result = await auth.register(email, password);
      let user;

      // Verificar si el resultado es un UserCredential o directamente un User
      if (result && result.user) {
        user = result.user;
      } else if (result && result.uid) {
        user = result;
      } else {
        throw new Error("No se pudo obtener el usuario después del registro");
      }

      // Actualizar el perfil del usuario con el nombre de usuario
      await updateProfile(user, { displayName: username });

      // Limpiar los campos después del registro exitoso
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      alert("Registro exitoso");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al registrar: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start text-white w-[350px]">
      <h2 className="text-2xl font-bold mb-5 text-white">Registrarse</h2>
      <form className="w-full flex flex-col" onSubmit={handleRegister}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mt-1 bg-transparent text-white border-b-2 border-black outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="E-Mail"
            className="w-full p-2 mt-1 bg-transparent text-white border-b-2 border-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 mt-1 bg-transparent text-white border-b-2 border-black outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="w-full p-2 mt-1 bg-transparent text-white border-b-2 border-black outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="p-2 bg-green-600 text-white rounded cursor-pointer">
          Registrarse
        </button>
        <div className="my-4 border-t border-gray-300"></div>
        <div className="mt-4 flex flex-col items-center">
          <a href="#" className="text-gray-300 text-sm mt-2">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
        <button type="button" className="mt-5 p-2 flex items-center justify-center bg-white text-gray-800 rounded cursor-pointer">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" className="mr-2" />
          Ingresar con Google
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
