import React from "react";

const TaskList = ({ tasks, approveTask, user }) => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>

          {task.approvalLog && (
            <p>
              Approved by: {task.approvalLog.approvedBy} on{" "}
              {new Date(task.approvalLog.approvedAt).toLocaleString()}
            </p>
          )}

          {task.status === "Pending" && user.role === "admin" && (
            <button onClick={() => approveTask(task.id)}>Approve</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
