import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok) setUser(data.user);
    else alert(data.message);
  };

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks/list");
    const data = await res.json();
    setTasks(data);
  };

  const createTask = async (task) => {
    await fetch("http://localhost:5000/tasks/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    fetchTasks();
  };

  const approveTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/approve/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approvedBy: user.username }),
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {!user ? (
        <div>
          <h2>Login</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "10px",
            }}
          >
            <button onClick={() => login("admin", "admin123")}>
              Login as Admin
            </button>
            <button onClick={() => login("user", "user123")}>
              Login as User
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Welcome, {user.username}</h1>
          {user.role === "admin" && <TaskForm createTask={createTask} />}
          <TaskList tasks={tasks} approveTask={approveTask} user={user} />
        </div>
      )}
    </div>
  );
};

export default App;
