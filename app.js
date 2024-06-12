document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      addTodoItem(todoText);
      todoInput.value = "";
      todoInput.focus();
    }
  });

  todoList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const li = event.target.parentElement;
      li.remove();
    } else if (event.target.tagName === "LI") {
      event.target.classList.toggle("completed");
    }
  });

  function addTodoItem(todoText) {
    const li = document.createElement("li");
    li.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  }
});
