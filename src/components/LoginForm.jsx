import React, { useState } from "react";

function LoginForm({ auth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
    setEmail("");
    setPassword("");
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };

  return (
    <form className="form">
      <h3 className="title">Login</h3>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="input"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="input"
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin} className="button">Login</button>
      <button onClick={handleGoogle} className="button">Google</button>
    </form>
  );
}

export default LoginForm;
