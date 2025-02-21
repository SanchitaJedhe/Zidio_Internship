// src/pages/SignupPage.jsx
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.js";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    
    if (!username || !email || !password) {
      // Show error alert if fields are empty
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error",
        confirmButtonText: "OK",
      }); 
      return;
    }
    console.log("Signing up with:", username, email, password);
  // Show success alert before navigating
  if(username && password && email){
    localStorage.setItem("username", username); 
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  Swal.fire({
    title: "Signup Successful!",
    text: `Welcome, ${username}! Redirecting to home...`,
    icon: "success",
    timer: 2000, // Auto close after 2 seconds
    showConfirmButton: false,
  }).then(() => {
    navigate("/"); // Redirect after alert closes
  });
}

  // Clear form fields after signup
  setUsername("");
  setEmail("");
  setPassword("");
};
// 🔹 Google Sign-Up
const handleGoogleSignUp = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    alert(`Signed in as ${user.userame}`);
    localStorage.setItem("username", user.userame);
    localStorage.setItem("email", user.email);
    navigate("/home");
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    alert("Google Sign-In Failed. Try again!");
  }
};

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px", padding: "20px" }}>
        <h2 className="text-center">Sign Up</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="primary" onClick={handleSignup} className="w-100">
            Sign Up
          </Button>
            <br></br>
            <h4 className="text-center">or</h4>
            
            <button className="btn btn-danger w-100" onClick={handleGoogleSignUp}>
        <img
          src="https://img.icons8.com/color/16/000000/google-logo.png"
          alt="Google Icon"
          className="me-2"
        />
        Sign Up with Google
      </button>
          </Form.Group>
          
        </Form>
      </Card>
    </Container>
  );
};

export default SignupPage;