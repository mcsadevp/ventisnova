/**
 * @file AdminCheck.jsx
 * @description Componente que verifica si un usuario tiene privilegios de admin en la aplicación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author McKinstong
 * @company Ventisnova
 * @license Copyright © 2024 Vebtisnova
 * @notes Verifica la propiedad isAdmin.
 */


import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig"; 
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const AdminCheck = ({ children }) => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      if (!user?.uid) {
        setLoading(false);
        return;
      }
      
      try {
        const userDoc = await getDoc(doc(db, "usuarios", user.uid));
        if (userDoc.exists()) {
          setIsAdmin(userDoc.data().isAdmin);
        }
      } catch (error) {
        console.error("Error al obtener el estado de administrador:", error);
      }
      
      setLoading(false);
    };

    fetchAdminStatus();
  }, [user]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      {children(isAdmin)} 
    </div>
  );
};

export default AdminCheck;
