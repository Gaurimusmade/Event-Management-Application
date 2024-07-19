const db = require("../config/db");
const Todo = require("../models/todoSchema");

//Send all task
module.exports.getallTodo = async () => {
  const todo = await Todo.find();
  return todo;
};

//Send single task
module.exports.getTodo = async (id) => {
  const todo = await Todo.findById(id);
  return todo;
};

//Add new task
module.exports.addnewTask = async (task) => {
  try {
    const newtask = new Todo(task);
    await newtask.save();
    return true;
  } catch (err) {
    throw err;
  }
};

//Update Task
module.exports.updateTask = async (task) => {
  try {
    const updatedTask = await Todo.findByIdAndUpdate(task._id, task, {
      runValidators: true,
    });
    if (!updatedTask) {
      throw new Error("Task not found");
    }
    return true;
  } catch (err) {
    throw err;
  }
};

//Delete Task
module.exports.deleteTask = async (id) => {
  try {
    const deletetask = await Todo.findByIdAndDelete(id);
    return true;
  } catch (err) {
    throw err;
  }
};
