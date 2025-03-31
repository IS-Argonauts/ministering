import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

function Login({ setIsAuthenticated }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials for testing
  const correctUsername = "larry_smith";
  const correctPassword = "is401rocks";

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      const loginTime = Date.now();
      localStorage.setItem("isAuthenticated", "true"); // Store auth status in localStorage
      localStorage.setItem("loginTime", loginTime.toString()); // Store login time in localStorage
      console.log("Login successful!");
      console.log("Stored Auth:", localStorage.getItem("isAuthenticated"));
      console.log("Stored Login Time:", localStorage.getItem("loginTime"));
      setIsAuthenticated(true);
      navigate("/Home");
    } else {
      setError("Invalid username or password");
    }
  };

return (
  <div className="login-container">
    <h1 className="app-title">Ministering Connect</h1> {/* Title added */}
    <img className='login-image' src="https://assets.churchofjesuschrist.org/37/79/3779b4b1d9e77d95622bce98d8114450ff2ba031/3779b4b1d9e77d95622bce98d8114450ff2ba031.jpeg"></img>
    <h2>Login</h2>
    {error && <p className="error-message">{error}</p>}
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
  </div>
);

}

export default Login;
