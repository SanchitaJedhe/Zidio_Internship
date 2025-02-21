import { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]); // Task list
  const [taskInput, setTaskInput] = useState(""); // Task title
  const [taskDesc, setTaskDesc] = useState(""); // Task description
  const [taskDeadline, setTaskDeadline] = useState(""); // Task deadline
  const [priority, setPriority] = useState("Medium"); // Default priority
  const [sortOrder, setSortOrder] = useState("id"); // Sorting order

  // ✅ Add Task
  const handleAddTask = () => {
    if (!taskInput.trim() || !taskDesc.trim() || !taskDeadline.trim()) {
      Swal.fire("Error!", "All fields are required!", "error");
      return;
    }

    const newTask = {
      id: Date.now(), // Unique ID
      taskNo: tasks.length + 1, // Task number
      title: taskInput,
      description: taskDesc,
      deadline: taskDeadline,
      priority,
    };

    setTasks([...tasks, newTask]); // Add new task to list
    setTaskInput("");
    setTaskDesc("");
    setTaskDeadline("");
    setPriority("Medium");

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

  // ✅ Get Priority Badge
  const getPriorityBadge = (priority) => {
    if (priority === "High") return "badge bg-danger";
    if (priority === "Medium") return "badge bg-warning text-dark";
    return "badge bg-success"; // Low priority
  };

  // ✅ Sort & Filter Tasks
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOrder === "priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (sortOrder === "deadline") {
      return new Date(a.deadline) - new Date(b.deadline);
    } else {
      return a.id - b.id; // Default sort by ID
    }
  });

  return (
    <Container >
      {/* Task Manager & Sorting Row */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Task Manager</h2>
        {/* Sorting Options */}
        <Form.Group className="d-flex align-items-center">
          <Form.Label className="me-2 mb-0">Sort by:</Form.Label>
          <Form.Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="form-select-lg">
            <option value="id">Task ID</option>
            <option value="priority">Priority</option>
            <option value="deadline">Deadline</option>
          </Form.Select>
        </Form.Group>
      </div>

      <Card className="p-3">
        {/* Task Creation Form */}
        <Form.Group className="mb-3">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task title..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Enter task description..."
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            value={taskDeadline}
            onChange={(e) => setTaskDeadline(e.target.value)}
          />
        </Form.Group>

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
      </Card>

      {/* Task List (Cards) */}
      <div className="mt-4 p-3 mb-2 bg-secondary text-white">
        {sortedTasks.map((task) => (
          <Card key={task.id} className="mb-3 shadow-sm">
            <Card.Body>
              <h5>
                #{task.taskNo} {task.title} <span className={getPriorityBadge(task.priority)}>{task.priority}</span>
              </h5>
              <p>{task.description}</p>
              <small className="text-muted">Deadline: {task.deadline}</small>
              <br />
              <Button variant="danger" size="sm" className="mt-2" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default TaskPage;
