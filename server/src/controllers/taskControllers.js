const Task = require("../models/taskModel");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({ message: "Task saved successfully", statusCode: 201, status: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.fetchTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.fetchTask = async (req, res) => {
  try {
    const { id } = req.body;
    const task = await Task.findById(id);

    res.status(200).json({ task, statusCode: 200, status: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message, statusCode: 500, status: "failed" });
  }
};

exports.updateTask = (req, res) => {
  res.send("Update tasks");
};
exports.deleteTask = (req, res) => {
  res.send("delete tasks");
};
