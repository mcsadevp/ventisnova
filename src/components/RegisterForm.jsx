import React, { useState } from "react";

function RegisterForm({ auth }) {
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
    setEmailRegister("");
    setPasswordRegister("");
  };

  return (
    <form className="form">
      <h3 className="title">Register</h3>
      <input
        onChange={(e) => setEmailRegister(e.target.value)}
        value={emailRegister}
        className="input"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPasswordRegister(e.target.value)}
        value={passwordRegister}
        className="input"
        type="password"
        placeholder="Password"
      />
      <button onClick={handleRegister} className="button">Register</button>
    </form>
  );
}

export default RegisterForm;
