import { useState } from "react";

export default function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && pass === "1234") {
      setPage("admin");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="login-container">

      <div className="login-box glass">
        <h1>Admin Login</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="btn" onClick={handleLogin}>
          Login →
        </button>
      </div>

    </div>
  );
}
