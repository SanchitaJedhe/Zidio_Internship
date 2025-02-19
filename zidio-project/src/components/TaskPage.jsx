import  { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]); // Task list
  const [taskInput, setTaskInput] = useState(""); // Task input field
  const [priority, setPriority] = useState("Medium"); // Default priority

  // ✅ Add Task
  const handleAddTask = () => {
    if (!taskInput.trim()) {
      Swal.fire("Error!", "Task cannot be empty!", "error");
      return;
    }

    const newTask = { id: Date.now(), text: taskInput, priority };
    setTasks([...tasks, newTask]); // Add new task to list
    setTaskInput(""); // Clear input field
    setPriority("Medium"); // Reset priority selection

    Swal.fire("Success!", "Task added successfully!", "success");
  };

  // ✅ Delete Task
  const handleDeleteTask = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks(tasks.filter((task) => task.id !== taskId));
        Swal.fire("Deleted!", "Your task has been removed.", "success");
      }
    });
  };

  // ✅ Priority Badge Function
  const getPriorityBadge = (priority) => {
    if (priority === "High") return "badge bg-danger";
    if (priority === "Medium") return "badge bg-warning text-dark";
    return "badge bg-success"; // Low priority
  };

  return (
    <Container className="mt-4">
      <Card className="p-3">
        <h2 className="text-center">Task Manager</h2>

        {/* Add Task Input */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </Form.Group>

        {/* Priority Selection */}
        <Form.Group className="mb-3">
          <Form.Label>Priority</Form.Label>
          <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={handleAddTask} className="w-100 mb-3">
          Add Task
        </Button>

        {/* Task List */}
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {task.text}{" "}
                <span className={getPriorityBadge(task.priority)}>{task.priority}</span>
              </span>
              <Button variant="danger" size="sm" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default TaskPage;
