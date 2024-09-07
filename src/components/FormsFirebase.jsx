import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function FormsFirebase() {
    const auth = useAuth();
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        auth.register(emailRegister, passwordRegister);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        auth.login(emailLogin, passwordLogin);
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <h3>Register</h3>
                <input onChange={(e) => setEmailRegister(e.target.value)} type="email" />
                <input onChange={(e) => setPasswordRegister(e.target.value)} type="password" />
                <button type="submit">Submit</button>
            </form>

            <form onSubmit={handleLogin}>
                <h3>Login</h3>
                <input onChange={(e) => setEmailLogin(e.target.value)} type="email" />
                <input onChange={(e) => setPasswordLogin(e.target.value)} type="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormsFirebase;