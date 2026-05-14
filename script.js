//your code here
let todobtn=document.getElementById("addTodoBtn")
let todolist=document.getElementById("todoList")
let text=document.getElementById("newTodoInput")
todobtn.onclick = function () {
    if (text.value !== "") {

        let li = document.createElement("li");

        li.innerHTML = text.value;

        todolist.appendChild(li);

        text.value = "";
    }
};
