// Get elements
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");

// When button is clicked
addBtn.onclick = function () {

    var text = taskInput.value;

    if (text === "") {
        alert("Enter a task");
        return;
    }

    // Create list item
    var li = document.createElement("li");

    // Create text node
    var taskText = document.createTextNode(text);
    li.appendChild(taskText);

    // Create delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);

    // Add to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
};
