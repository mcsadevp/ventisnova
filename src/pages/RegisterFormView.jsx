import React from "react";
import { useAuth } from "../context/AuthContext";
import RegisterForm from "../components/RegisterForm";
import backgroundImage from "../assets/page-register.png";

function RegisterFormView() {
  const auth = useAuth();

  return (
    <div 
      className="register-view w-screen h-screen bg-cover bg-center flex"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <RegisterForm auth={auth} />
    </div>
  );
}

export default RegisterFormView;
