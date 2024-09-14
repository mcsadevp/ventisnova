import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

/* Creación del objeto de contexto para la autenticación. */
export const authContext = createContext();

/**
 * Hook para acceder al contexto de autenticación.
 * @returns {Object} El contexto de autenticación.
 */
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.error("Error creando el contexto de autenticación");
  }
  return context;
};

/**
 * Proveedor de autenticación que gestiona el estado del usuario.
 * @param {Object} children - Componentes hijos que se renderizarán.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Inicializa el estado del usuario como null.

  /* Escucha los cambios en el estado de autenticación del usuario. */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("No hay usuario suscrito");
        setUser(null); // Si no hay usuario, establece el estado como null.
      } else {
        setUser(currentUser); // Si hay un usuario, actualiza el estado.
      }
    });
    return () => unsubscribe(); // Limpia el suscriptor al desmontar el componente.
  }, []);

  /**
   * Registra un nuevo usuario con email y contraseña.
   * @param {string} email - El email del usuario.
   * @param {string} password - La contraseña del usuario.
   * @returns {Promise} Respuesta de Firebase.
   */
  const register = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado:", response);
      return response;
    } catch (error) {
      console.error("Error durante el registro:", error);
      throw new Error("No se pudo registrar el usuario. Por favor, intenta nuevamente.");
    }
  };

  /**
   * Inicia sesión con email y contraseña.
   * @param {string} email - El email del usuario.
   * @param {string} password - La contraseña del usuario.
   * @returns {Promise} Respuesta de Firebase.
   */
  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario logueado:", response);
      return response;
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      throw new Error("No se pudo iniciar sesión. Por favor, revisa tu email y contraseña.");
    }
  };

  /**
   * Inicia sesión utilizando Google.
   * @returns {Promise} Resultado de la autenticación de Google.
   */
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      console.error("Error durante el inicio de sesión con Google:", error);
      throw new Error("No se pudo iniciar sesión con Google. Por favor, intenta nuevamente.");
    }
  };

  /**
   * Cierra la sesión del usuario.
   * @returns {Promise} Respuesta de Firebase.
   */
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("Usuario desconectado");
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error);
      throw new Error("No se pudo cerrar sesión. Por favor, intenta nuevamente.");
    }
  };

  /**
   * Envía un correo electrónico para restablecer la contraseña.
   * @param {string} email - El email del usuario.
   * @returns {Promise} Respuesta de Firebase.
   */
  const handlePasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Correo de restablecimiento enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
      throw new Error("No se pudo enviar el correo de restablecimiento de contraseña. Revisa el correo ingresado o intenta nuevamente.");
    }
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        handlePasswordReset,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
