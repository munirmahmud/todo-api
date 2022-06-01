const Task = require("../models/taskModel");

exports.createTask = (req, res) => {
  const { name, completed } = req.body;

  const task = new Task({ name, completed });

  task.save();

  res.status(201).json({ message: "Task saved successfully", statusCode: 201, status: "success" });
};

exports.fetchTasks = (req, res) => {
  res.send("All tasks");
};

exports.fetchTask = (req, res) => {
  res.send("get single tasks");
};
exports.updateTask = (req, res) => {
  res.send("Update tasks");
};
exports.deleteTask = (req, res) => {
  res.send("delete tasks");
};
