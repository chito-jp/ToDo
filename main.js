const container = document.getElementById("ToDoContainer");
const addBtn = document.getElementById("addTask");
const input = document.getElementById("input");

addBtn.addEventListener("click", () => {
    if(input.value)addTask(input.value);
});

input.addEventListener("keydown", e => {
    if(e.key === "Enter")addTask(input.value);
});

const addTask = text => {
    const element = document.createElement("div");
    element.innerText = text;
    container.appendChild(element);
    saveTask(text);
};

const loadTask = () => {
    const tasks = localStorage.getItem("tasks") || [];
    tasks.forEach(task => {addTask(task)});
};

document.addEventListener("DOMContentLoaded", loadTask());