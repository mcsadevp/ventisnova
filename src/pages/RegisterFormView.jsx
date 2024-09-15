import React from "react";
import { useAuth } from "../context/AuthContext";
import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";
import backgroundImage from '../assets/page-register.png';

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
      <RegisterForm auth={auth} />
    </div>
  );
  }

export default RegisterFormView;

