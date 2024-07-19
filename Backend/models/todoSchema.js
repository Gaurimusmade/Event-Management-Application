const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  status: { type: String, require: true },
  date: { type: String, require: true },
  time: { type: String, require: true },
  location: { type: String, require: true },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
