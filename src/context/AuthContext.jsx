import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/firebaseConfig";
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

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.error("Error creando el contexto de autenticación");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const register = async (email, password, username) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "usuarios", response.user.uid), {
        username: username || email,
        email,
        isAdmin: false
      });
      return response;
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

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      throw new Error("No se pudo iniciar sesión. Por favor, revisa tu email y contraseña.");
    }
  };

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

      return result;
    } catch (error) {
      console.error("Error durante el inicio de sesión con Google:", error);
      throw new Error("No se pudo iniciar sesión con Google. Por favor, intenta nuevamente.");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error);
      throw new Error("No se pudo cerrar sesión. Por favor, intenta nuevamente.");
    }
  };

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
      {children}
    </authContext.Provider>
  );
}