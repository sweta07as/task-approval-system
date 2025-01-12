const express = require("express");
const router = express.Router();

let tasks = [];

router.post("/create", (req, res) => {
  const { title, description } = req.body;
  const task = {
    id: tasks.length + 1,
    title,
    description,
    status: "Pending",
    approvalLog: null,
  };
  tasks.push(task);
  res.status(201).json({ message: "Task created", task });
});

router.get("/list", (req, res) => {
  res.json(tasks);
});

router.post("/approve/:id", (req, res) => {
  const { id } = req.params;
  const { approvedBy } = req.body;
  const task = tasks.find((task) => task.id === parseInt(id));
   if (!task) {
     return res.status(404).json({ message: "Task not found" });
   }

   task.status = "Approved";
   task.approvalLog = {
     approvedBy,
     approvedAt: new Date().toISOString(),
   };

   res.json({ message: "Task approved", task });
});

module.exports = router;
