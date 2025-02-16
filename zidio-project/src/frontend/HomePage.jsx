// src/pages/HomePage.jsx
import  "react";
import CustomNavbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const tasks = [
    { id: 1, title: "Task 1", description: "This is task 1", status: "Pending" },
    { id: 2, title: "Task 2", description: "This is task 2", status: "Completed" },
    { id: 3, title: "Task 3", description: "This is task 3", status: "Pending" },
  ];

  return (
    <div>
      <CustomNavbar />
      <Container className="mt-4">
        <h2>Your Tasks</h2>
        <Row>
          {tasks.map((task) => (
            <Col key={task.id} sm={12} md={6} lg={4}>
              <TaskCard task={task} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;