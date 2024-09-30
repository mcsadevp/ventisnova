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