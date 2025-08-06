import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
export default Register;
