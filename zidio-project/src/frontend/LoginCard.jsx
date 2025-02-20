// src/pages/LoginPage.jsx
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import loginBg from  "../assets/images/loginBg.avif";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Logging in with:", username, password);
    navigate("/home");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 d-none d-md-block p-0">
          <img src={loginBg} alt="login Illustration" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
        </div>
     <br></br>
    <Container className="d-flex justify-content align-items-center vh-100">

      <Card style={{ width: "400px", padding: "20px" }}>
        
        <h2 className="text-center">Login</h2>
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleLogin} className="w-100">
            Login
          </Button>
          <p className="text-center mt-3">
            Don&apos;t have an account? <a href="/signup">Sign Up</a>
          </p>
        </Form>
      </Card>
    </Container>
    
    
   </div>);
};

export default LoginPage;