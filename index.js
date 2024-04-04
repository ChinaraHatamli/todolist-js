const form = document.querySelector("#todoForm");
const inputName = document.querySelector("#name");
const inputDesc = document.querySelector("#description");
const list = document.querySelector("#todoList");


form.addEventListener("submit", addTodo);


function addTodo(e) {
  e.preventDefault();
  const name = inputName.value.trim();
  const description = inputDesc.value.trim();
  const currentDate = new Date();
  addTodoToList(name, description, currentDate);
}

function addTodoToList(name, description, date) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  const todoName = document.createElement("div");
  todoName.textContent = `Name: ${name}`;
  todoName.className = "todoName";

  const descText = document.createElement("div");
  descText.textContent = `Description: ${description}`;
  descText.className = "descText";

  const todoDate = document.createElement("div");
  todoDate.textContent = `Date: ${date}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "editBtn";

  deleteBtn.addEventListener("click", () => {
    if (confirm("Do you want to delete?")) {
      li.remove();
    }
  });

  editBtn.addEventListener("click", () => {
 inputName.value = name;
   inputDesc.value = description;
  });


  li.appendChild(todoName);
  li.appendChild(descText);
  li.appendChild(todoDate);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  list.appendChild(li);

  inputName.value = "";
  inputDesc.value = "";
 }


