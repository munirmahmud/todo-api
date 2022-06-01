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
    const task = await Task.findOne({ _id: req.params.id });

    if (!task) {
      return res.status(404).json({ message: "No task found with that ID", statusCode: 404, status: "failed" });
    }

    res.status(200).json({ task, statusCode: 200, status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, statusCode: 500, status: "failed" });
  }
};

exports.updateTask = (req, res) => {
  res.send("Update tasks");
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    console.log("hi", task);
    if (!task) {
      return res.status(404).json({ message: "No task found with that ID", statusCode: 404, status: "failed" });
    }

    // await Task.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({ message: "The task has been deleted successfully.", statusCode: 200, status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, statusCode: 500, status: "failed" });
  }
};
