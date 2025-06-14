 function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = createTaskElement(taskText);
  document.getElementById("pendingTasks").appendChild(li);
  input.value = "";
}

function createTaskElement(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  li.appendChild(span);

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete");
  completeBtn.onclick = () => moveToCompleted(li);
  li.appendChild(completeBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.onclick = () => editTask(span);
  li.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  return li;
}

function moveToCompleted(taskElement) {
  taskElement.querySelector(".complete")?.remove();
  document.getElementById("completedTasks").appendChild(taskElement);
}

function editTask(span) {
  const newText = prompt("Edit task:", span.textContent);
  if (newText !== null) {
    span.textContent = newText;
  }
}
