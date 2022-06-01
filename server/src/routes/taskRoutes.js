const express = require("express");
const { fetchTasks, createTask, fetchTask, updateTask, deleteTask } = require("../controllers/taskControllers");

const router = express.Router();

/**
 * @route GET api/v1/tasks
 * @description get all tasks
 * @access public
 * */

router.route("/").get(fetchTasks).post(createTask);

/**
 * @route POST api/v1/tasks
 * @description add a new tasks
 * @access public
 */
// router.route("/").post(createTask);

/**
 * @route PUT api/v1/tasks/:id
 * @description update tasks
 * @access public
 */
router.route("/:id").get(fetchTask).patch(updateTask).delete(deleteTask);

/**
 * @route PUT api/v1/tasks/:id
 * @description update tasks
 * @access public
 */
// router.route("/:id").patch(updateTask);

/**
 * @route DELETE api/v1/tasks/:id
 * @description delete tasks
 * @access public
 */
// router.route("/:id").delete(deleteTask);

module.exports = router;
