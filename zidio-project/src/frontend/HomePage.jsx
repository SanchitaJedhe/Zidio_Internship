// src/pages/HomePage.jsx
import  "react";
import CustomNavbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import TaskPage from "../components/TaskPage";

const HomePage = () => {
  const tasks = [
    { id: 1, title: "Task 1", description: "This is task 1", status: "Pending" },
    
  ];

  return (
    <div className="p-3 mb-2 bg-light text-dark">
      <CustomNavbar />
      <Container className="mt-12">
        <h1></h1>
        <h2 className="text-white bg-dark text-center">Your Zidio Tasks</h2>
        <Row>
          {tasks.map((task) => (
            <Col key={task.id} sm={12} md={6}  >
              <TaskPage task={task} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;