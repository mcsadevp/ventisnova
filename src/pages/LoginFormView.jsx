import React from "react";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import backgroundImage from "../assets/page-login.png";

function LoginFormView() {
  const auth = useAuth();
  
  return (
    <div 
      className="register-view w-screen h-screen bg-cover bg-center flex"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <LoginForm auth={auth} />
    </div>
  );
}

export default LoginFormView;
