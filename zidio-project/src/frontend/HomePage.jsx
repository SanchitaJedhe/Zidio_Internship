import "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navLeft}>
          <h2 style={styles.appName}>ZIDIO Task Manager</h2>
        </div>
        <div style={styles.navRight}>
          <a href="#home" style={styles.navLink}>
            Home
          </a>
          <a href="#messages" style={styles.navLink}>
            Messages
          </a>
          <a href="#about" style={styles.navLink}>
            About
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
          <a href="#account" style={styles.navLink}>
            Account
          </a>
        </div>
      </div>

      {/* Body */}
      <div style={styles.body}>
        <h3 style={styles.sectionTitle}>Your Tasks</h3>
        <div style={styles.taskGrid}>
          {/* Task Cards */}
          {[1, 2, 3].map((task) => (
            <div key={task} style={styles.taskCard}>
              <h4 style={styles.taskTitle}>Task {task}</h4>
              <p style={styles.taskDescription}>
                This is a sample task description.
              </p>
              <p style={styles.taskStatus}>Status: Pending</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  navLeft: {
    flex: 1,
  },
  appName: {
    margin: 0,
    fontSize: "24px",
  },
  navRight: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  body: {
    flex: 1,
    padding: "20px",
  },
  sectionTitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  taskGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  taskCard: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  taskTitle: {
    margin: 0,
    fontSize: "18px",
  },
  taskDescription: {
    margin: "10px 0",
    fontSize: "14px",
    color: "#666",
  },
  taskStatus: {
    margin: 0,
    fontSize: "14px",
    color: "#007bff",
  },
};

export default HomePage;