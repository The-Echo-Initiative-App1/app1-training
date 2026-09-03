const taskBar = document.getElementById("taskBar");
const searchBox = document.getElementById("searchBox");
const filterBox = document.getElementById("filterBox");
const myList = document.getElementById("myList");
let tasks = [];

function addTask() {
    let text = taskBar.value;

    if (text !== "") {
        tasks.push({
            name: text,
            isDone: false
        });

        taskBar.value = ""; 
        showTasks()
    }
}

function clickingTasks(index) {
    if(tasks[index].isDone){
        tasks[index].isDone=false;
    }
    else{
        tasks[index].isDone=true;
    }
    showTasks();
}

function editTask(index) {
    let newName = prompt("Change task name:", tasks[index].name);
    if (newName !== null && newName !== "") {
        tasks[index].name = newName;
        showTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}

function showTasks() {
    
    myList.innerHTML = "";

    let searchText = searchBox.value.toLowerCase();
    let filterValue = filterBox.value;
    for (let i = 0; i < tasks.length; i++) {
        let matchesSearch = tasks[i].name.toLowerCase().includes(searchText);

        let matchesFilter = false;
        if (filterValue === "all") {
            matchesFilter = true;
        } else if (filterValue === "done" && tasks[i].isDone === true) {
            matchesFilter = true;
        } else if (filterValue === "notDone" && tasks[i].isDone === false) {
            matchesFilter = true;
        }

        if (matchesSearch && matchesFilter) {
            let li = document.createElement("li");

            if (tasks[i].isDone) {
                li.classList.add("finished");
            }

        let taskText = document.createElement("span");
        taskText.textContent = tasks[i].name;
        taskText.onclick = function() {
            clickingTasks(i);
        };

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = function() {
            editTask(i);
        };
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            deleteTask(i);
        };

        li.appendChild(taskText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        myList.appendChild(li)
               
        }
    }
}