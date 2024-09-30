/**
 * @file AuthProvider.jsx
 * @description Proveedor de contexto para la autenticación de usuarios en la aplicación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente gestiona el registro, inicio de sesión, cierre de sesión y restablecimiento de contraseña.
 */

import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/firebaseConfig"; // Importa la configuración de Firebase Authentication
import { db } from "../firebase/firebaseConfig"; // Importa la configuración de Firestore
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; // Importa Firestore

// Crea el contexto de autenticación
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
  return context; // Devuelve el contexto de autenticación
};

/**
 * Componente proveedor de autenticación.
 * @param {ReactNode} children - Los componentes hijos que pueden acceder al contexto de autenticación.
 * @returns {JSX.Element} El proveedor de autenticación.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Estado para almacenar el usuario autenticado

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Actualiza el estado del usuario en función del estado de autenticación
    });
    return () => unsubscribe(); // Limpia el suscriptor al desmontar el componente
  }, []);

  /**
   * Función para registrar un nuevo usuario.
   * @param {string} email - El correo electrónico del nuevo usuario.
   * @param {string} password - La contraseña del nuevo usuario.
   * @param {string} username - El nombre de usuario del nuevo usuario.
   * @returns {Promise} Promesa que se resuelve con la respuesta del registro.
   */
  const register = async (email, password, username) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "usuarios", response.user.uid), {
        username: username || email,
        email,
        isAdmin: false
      });
      return response; // Devuelve la respuesta del registro
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.error("Error durante el registro: El correo electrónico ya está en uso.");
        throw new Error("El correo electrónico ya está en uso. Intenta con otro.");
      } else {
        console.error("Error durante el registro:", error);
        throw new Error("No se pudo registrar el usuario. Por favor, intenta nuevamente.");
      }
    }
  };

  /**
   * Función para iniciar sesión con correo y contraseña.
   * @param {string} email - El correo electrónico del usuario.
   * @param {string} password - La contraseña del usuario.
   * @returns {Promise} Promesa que se resuelve con la respuesta del inicio de sesión.
   */
  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response; // Devuelve la respuesta del inicio de sesión
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      throw new Error("No se pudo iniciar sesión. Por favor, revisa tu email y contraseña.");
    }
  };

  /**
   * Función para iniciar sesión con Google.
   * @returns {Promise} Promesa que se resuelve con la respuesta del inicio de sesión con Google.
   */
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const userDocRef = doc(db, "usuarios", result.user.uid);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        await setDoc(userDocRef, {
          email: result.user.email,
          username: result.user.displayName,
        }, { merge: true });
      } else {
        await setDoc(userDocRef, {
          email: result.user.email,
          username: result.user.displayName,
          isAdmin: false,
        });
      }

      return result; // Devuelve el resultado del inicio de sesión con Google
    } catch (error) {
      console.error("Error durante el inicio de sesión con Google:", error);
      throw new Error("No se pudo iniciar sesión con Google. Por favor, intenta nuevamente.");
    }
  };

  /**
   * Función para cerrar sesión del usuario.
   * @returns {Promise} Promesa que se resuelve al cerrar sesión.
   */
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error);
      throw new Error("No se pudo cerrar sesión. Por favor, intenta nuevamente.");
    }
  };

  /**
   * Función para manejar el restablecimiento de contraseña.
   * @param {string} email - El correo electrónico del usuario.
   * @returns {Promise} Promesa que se resuelve al enviar el correo de restablecimiento.
   */
  const handlePasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
      throw new Error("No se pudo enviar el correo de restablecimiento de contraseña.");
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
      {children} {/* Proporciona el contexto a los componentes hijos */}
    </authContext.Provider>
  );
}
