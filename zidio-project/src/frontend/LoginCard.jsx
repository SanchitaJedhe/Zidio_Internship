import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const [username, setUsername] = useState(" sanchita");
  const [password, setPassword] = useState("1234");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Logging in with:", username, password);
    navigate("/home");
  };

  const handleSignUp = () => {
    console.log("Redirecting to sign-up page...");
  };

  return (
    <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.title}> ZIDIO Login</h2>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
         Login
        </button>
        <button onClick={handleSignUp} style={styles.button}>
          Sign Up
        </button>
      </div>
    </div>
    </div>
  );
};

const styles = {
  card: {
    width: "90%", // Fluid width
    maxWidth: "400px", // Maximum width for larger screens
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    textAlign: "center",
    margin: "0 auto", // Center the card
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "95%", // Full width for responsiveness
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%", // Full width for responsiveness

  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px", // Add padding for smaller screens
  },
};

export default LoginCard;