// Mengambil form element
const formElement = document.querySelector(".form-todo");

// Menambahkan form event listener
formElement.addEventListener("submit", (event) => {
    // preventDefault mengahindari page refresh
    event.preventDefault();

    // Mengambil input elemen di HTML
    const inputElement = document.querySelector(".input-todo");
    console.log(inputElement.value);

    // Mengambil wrapper-todo element sebagai entrypoint todo item
    const wrapperTodoElement = document.querySelector(".wrapper-todo");

    // Membuat to do item di JS
    const todoItem = document.createElement("li");
    todoItem.innerHTML = inputElement.value;
    // ---
    // const todoItem = `<li class="todo-item">${inputElement.value}</li>`;

    // Menambahkan todo item ke dalam wrapper todo
    wrapperTodoElement.appendChild(todoItem);
    // ---
    // wrapperTodoElement.innerHTML = todoItem;

    // Menghapus input value setelah submit
    inputElement.value = ``;
});
