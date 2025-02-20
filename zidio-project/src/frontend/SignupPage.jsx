// src/pages/SignupPage.jsx
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import Swal from "sweetalert2";

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
  Swal.fire({
    title: "Signup Successful!",
    text: `Welcome, ${username}! Redirecting to home...`,
    icon: "success",
    timer: 2000, // Auto close after 2 seconds
    showConfirmButton: false,
  }).then(() => {
    navigate("/home"); // Redirect after alert closes
  });

  // Clear form fields after signup
  setUsername("");
  setEmail("");
  setPassword("");
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
          </Form.Group>
          <Button variant="primary" onClick={handleSignup} className="w-100">
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SignupPage;