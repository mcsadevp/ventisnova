import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function FormsFirebase() {
  const auth = useAuth();
  const {displayName} = auth.user
/* A hook that allows you to use state in (formsRegister). */
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
/* A hook that allows you to use state in t(formsLogin). */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  const handleLogout = () => {
    auth.logout();
  }
  return (
    <div className="App">
      {displayName && <h5>welcome : {displayName}</h5>}
      <form className="form">
        <h3 className="title">Register</h3>
        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          className="input"
          type="email"
        />
        <input
          onChange={(e) => setPasswordRegister(e.target.value)}
          className="input"
          type="password"
        />
        <button onClick={(e) => handleRegister(e)} className="button">
          submit
        </button>
      </form>
      <form className="form">
        <h3 className="title">Login</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          type="password"
        />
        <button onClick={(e) => handleLogin(e)} className="button">
          submit
        </button>
        <button onClick={(e) => handleGoogle(e)} className="button">
          Google
        </button>
      </form>

      <button onClick={()=> handleLogout()} className="button">Logout</button>
    </div>
  );
}

export default FormsFirebase;