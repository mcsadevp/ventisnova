/**
 * @file RegisterFormView.jsx
 * @description Componente para la vista del formulario de registro con un fondo personalizado.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente renderiza un formulario de registro en un diseño de pantalla completa con un fondo personalizado.
 */

import React from "react";
import { useAuth } from "../context/AuthContext";
import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";
import backgroundImage from '../assets/registerImage.jpg';

function RegisterFormView() {
  const auth = useAuth();
  return (
    <div 
      className={`h-screen flex flex-col flex-1 bg-center bg-no-repeat`} 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,  
        backgroundSize: 'cover'
      }}
    >
      <Navbar/>
      <div className="flex flex-1 items-center justify-center">
        <RegisterForm auth={auth} />
      </div>
    </div>
  );
}

export default RegisterFormView;
