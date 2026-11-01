const tasks = [
  { id: 1, title: "Finish HTML homework", completed: false },
  { id: 2, title: "Review CSS selectors", completed: true },
  { id: 3, title: "Practice JavaScript basics", completed: false },
];

let nextId = Math.max(...tasks.map((task) => task.id)) + 1;

function addTask(title, priority = "medium") {
  const newTask = {
    id: nextId,
    title,
    completed: false,
    priority,
  };

  tasks.push(newTask);
  nextId += 1;

  console.log("After addTask:", tasks);
}

function toggleTask(id) {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    console.log(`toggleTask: task id ${id} not found`);
    return;
  }

  task.completed = !task.completed;
  console.log("After toggleTask:", tasks);
}

function deleteTask(id) {
  const index = tasks.findIndex((item) => item.id === id);

  if (index === -1) {
    console.log(`deleteTask: task id ${id} not found`);
    return;
  }

  tasks.splice(index, 1);
  console.log("After deleteTask:", tasks);
}

console.log("Initial tasks:", tasks);
addTask("Build todo logic", "high");
toggleTask(1);
deleteTask(2);
