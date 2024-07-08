import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(evt) {
    evt.preventDefault();
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration successful");
    } else {
      alert("Registration failed");
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <button>Register</button>
    </form>
  );
}

export default RegisterPage;
