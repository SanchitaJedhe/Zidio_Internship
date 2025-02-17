// src/components/TaskCard.jsx
import  "react";
import { propTypes } from "prop-types";
import { Card, Button } from "react-bootstrap";
const TaskCard = ({ task }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Card.Text>
          <small className="text-muted">Status: {task.status}</small>
        </Card.Text>
        <Button variant="primary">Mark as Complete</Button>
      </Card.Body>
    </Card>
  );
};

// Define prop types for validation
TaskCard.propTypes = {
    task: propTypes.shape({
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      status: propTypes.string.isRequired,
    }).isRequired,
  };
export default TaskCard;