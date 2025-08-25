// Simple To-Do List Project
let todos = [];

function addTask(task) {
  todos.push(task);
}

function showTasks() {
  console.log("Your Tasks:");
  todos.forEach((task, i) => console.log(`${i + 1}. ${task}`));
}

addTask("Learn Node.js");
addTask("Practice MongoDB");
showTasks();
