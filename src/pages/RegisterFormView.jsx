import React from "react";
import { useAuth } from "../context/AuthContext";
import RegisterForm from "../components/RegisterForm";

function RegisterFormView() {
  const auth = useAuth();

  return (
    <div className="register-view">
      <RegisterForm auth={auth} />
    </div>
  );
}

export default RegisterFormView;
