import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
const API_URL = import.meta.env.VITE_API_URL;

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(evt) {
    evt.preventDefault();
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("incorrect credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
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
      <button>Login</button>
    </form>
  );
}
export default LoginPage;
