const container = document.getElementById("ToDoContainer");
const addBtn = document.getElementById("addTask");
const input = document.getElementById("input");
let tasks;

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

const saveTask = text => {
    tasks = localStorage.getItem("tasks") || [];
    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getTask = () => {
    tasks = localStorage.getItem("tasks");
};

const loadTask = () => {
    getTask();
    tasks.forEach(task => {
        addTask(task);
    });
};

const resetTask = () => {
    localStorage.removeItem("tasks");
    container.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", loadTask);
