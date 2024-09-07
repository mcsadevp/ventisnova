import React from "react";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";

function LoginFormView() {
  const auth = useAuth();
  
  return (
    <div className="login-view">
      <LoginForm auth={auth} />
    </div>
  );
}

export default LoginFormView;
