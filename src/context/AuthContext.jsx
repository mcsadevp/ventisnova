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

/* Creating a context object. */
export const authContext = createContext();

/**
 * Hook para utilizar el contexto de autenticación
 */
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.error("Error creando el contexto de autenticación");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Inicializar con null en vez de ""

  /* Escucha los cambios de estado de autenticación */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("No hay usuario suscrito");
        setUser(null);
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  /* Registro de usuario */
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

  /* Inicio de sesión */
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

  /* Inicio de sesión con Google */
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

  /* Cierre de sesión */
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("Usuario desconectado");
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error);
      throw new Error("No se pudo cerrar sesión. Por favor, intenta nuevamente.");
    }
  };

  /* Recuperación de contraseña */
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
