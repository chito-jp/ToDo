const container = document.getElementById("ToDoContainer");
const addBtn = document.getElementById("addTask");
const input = document.getElementById("input");

addBtn.addEventListener("click", () => {
    if(input.value){
        addTask(input.value)
        input.value = "";
    };
});

input.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        addTask(input.value);
        input.value = "";
    }
});

const saveTask = text => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

const addElement = text => {
    const el_container = document.createElement("div");
    el_container.innerHTML = `<p>${text}</p>`;
    container.appendChild(el_container);
};

const addTask = text => {
    addElement(text);
    saveTask(text);
};

const loadTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(task => {
        addElement(task);
    });
};

const resetTask = () => {
    localStorage.removeItem("tasks");
    container.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", loadTask());