import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
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
    const subscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("No hay usuario suscrito");
        setUser(null); // Cambiar a null
      } else {
        setUser(currentUser);
      }
    });
    return () => subscribed();
  }, []);

  /* Registro de usuario */
  const register = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error durante el registro: ", error);
      throw error;
    }
  };

  /* Inicio de sesión */
  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error durante el inicio de sesión: ", error);
      throw error;
    }
  };

  /* Inicio de sesión con Google */
  const loginWithGoogle = async () => {
    try {
      const responseGoogle = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, responseGoogle);
      return result;
    } catch (error) {
      console.error("Error durante el inicio de sesión con Google: ", error);
      throw error;
    }
  };

  /* Cierre de sesión */
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("Usuario desconectado");
    } catch (error) {
      console.error("Error durante el cierre de sesión: ", error);
    }
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}