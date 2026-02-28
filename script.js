const input = document.querySelector("input");
const ul = document.querySelector("ul");

let currentFilter = "all";

function applyFilter() {
  const todos = ul.querySelectorAll("li");

  todos.forEach(function (todo) {
    if (currentFilter === "all") {
      todo.style.display = "";
    } else if (currentFilter === "pending") {
      todo.style.display = todo.classList.contains("completed") ? "none" : "";
    } else if (currentFilter === "completed") {
      todo.style.display = todo.classList.contains("completed") ? "" : "none";
    }
  });
}

function toggleFilter() {
  if (currentFilter === "all") {
    currentFilter = "pending";
  } else if (currentFilter === "pending") {
    currentFilter = "completed";
  } else {
    currentFilter = "all";
  }

  applyFilter();
}

function addTodo() {
  const newTodo = input.value;

  if (newTodo.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <div class="todo-left">
          <input
            type="checkbox"
            class="checkbox"
            onchange="toggleComplete(this)"
          />
          <span>${newTodo}</span>
        </div>

        <button class="delete-todo" onclick="deleteTodo(this)">
          <i class="fa-solid fa-trash"></i>
        </button>`;
  ul.appendChild(li);

  input.value = "";
}

function toggleComplete(check) {
  const li = check.parentElement.parentElement;
  li.classList.toggle("completed", check.checked);
}

function deleteTodo(button) {
  button.parentElement.remove();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
