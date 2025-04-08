// document.addEventListener("DOMContentLoaded", () => {
//     const addTaskBtn = document.querySelector(".add-task");
//     const taskList = document.querySelector(".task-list");

//     addTaskBtn.addEventListener("click", (event) => {
//         event.preventDefault(); // Prevent form submission

//         const category = document.querySelector("#category").value;
//         const priority = document.querySelector("#priority").value;
//         const dueDate = document.querySelector("#dueDate").value;
//         const taskText = document.querySelector("#new-task").value;

//         if (!category || priority === "none" || !dueDate || !taskText.trim()) {
//             alert("Please fill out all fields.");
//             return;
//         }

//         // Create task item
//         const taskItem = document.createElement("div");
//         taskItem.classList.add("task-item");
//         taskItem.style.borderLeft = `.8rem solid ${getPriorityColor(priority)}`; // Set priority border color

//         // Create task info container
//         const taskInfo = document.createElement("div");
//         taskInfo.classList.add("task-info");

//         // Task name
//         const nameEl = document.createElement("p");
//         nameEl.classList.add("task-name");
//         nameEl.textContent = taskText;

//         // Due date
//         const dueDateEl = document.createElement("p");
//         dueDateEl.classList.add("task-due-date");
//         dueDateEl.textContent = `Due: ${dueDate}`;

//         // Append task name and due date to task info
//         taskInfo.appendChild(nameEl);
//         taskInfo.appendChild(dueDateEl);

//         // Create task actions container
//         const taskActions = document.createElement("div");
//         taskActions.classList.add("task-actions");

//         // Category
//         const categoryEl = document.createElement("p");
//         categoryEl.classList.add("task-category");
//         categoryEl.textContent = category;

//         // Delete button
//         const deleteBtn = document.createElement("button");
//         deleteBtn.classList.add("delete-task");
//         deleteBtn.textContent = "Delete";

//         deleteBtn.addEventListener("click", () => {
//             taskList.removeChild(taskItem);
//         });

//         // Append category and delete button to task actions
//         taskActions.appendChild(categoryEl);
//         taskActions.appendChild(deleteBtn);

//         // Append task info and actions to task item
//         taskItem.appendChild(taskInfo);
//         taskItem.appendChild(taskActions);

//         // Add task item to task list
//         taskList.appendChild(taskItem);

//         // Clear inputs
//         document.querySelector("#category").value = "none";
//         document.querySelector("#priority").value = "none";
//         document.querySelector("#dueDate").value = "";
//         document.querySelector("#new-task").value = "";
//     });

//     // Function to get priority color
//     function getPriorityColor(value) {
//         switch (value) {
//             case "3": return "red"; // High priority
//             case "2": return "#FFD700"; // Medium priority
//             case "1": return "green"; // Low priority
//             default: return "none"; // Default
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.querySelector(".add-task");
    const taskListContainer = document.querySelector(".task-list");

    // Create a container for the task list dynamically
    const taskList = document.createElement("div");
    taskList.classList.add("task-list");
    taskListContainer.appendChild(taskList);

    addTaskBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission

        const category = document.querySelector("#category").value;
        const priority = document.querySelector("#priority").value;
        const dueDate = document.querySelector("#dueDate").value;
        const taskText = document.querySelector("#new-task").value;

        if (!category || priority === "none" || !dueDate || !taskText.trim()) {
            alert("Please fill out all fields.");
            return;
        }

        // Create task item
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.style.borderLeft = `.8rem solid ${getPriorityColor(priority)}`; // Set priority border color

        // Create task info container
        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");

        // Task name
        const nameEl = document.createElement("p");
        nameEl.classList.add("task-name");
        nameEl.textContent = taskText;

        // Due date
        const dueDateEl = document.createElement("p");
        dueDateEl.classList.add("task-due-date");
        dueDateEl.textContent = `Due: ${dueDate}`;

        // Append task name and due date to task info
        taskInfo.appendChild(nameEl);
        taskInfo.appendChild(dueDateEl);

        // Create task actions container
        const taskActions = document.createElement("div");
        taskActions.classList.add("task-actions");

        // Category
        const categoryEl = document.createElement("p");
        categoryEl.classList.add("task-category");
        categoryEl.textContent = category;

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-task");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        // Append category and delete button to task actions
        taskActions.appendChild(categoryEl);
        taskActions.appendChild(deleteBtn);

        // Append task info and actions to task item
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(taskActions);

        // Add task item to task list
        taskList.appendChild(taskItem);

        // Clear inputs
        document.querySelector("#category").value = "none";
        document.querySelector("#priority").value = "none";
        document.querySelector("#dueDate").value = "";
        document.querySelector("#new-task").value = "";
    });

    // Function to get priority color
    function getPriorityColor(value) {
        switch (value) {
            case "3": return "red"; // High priority
            case "2": return "#FFD700"; // Medium priority
            case "1": return "green"; // Low priority
            default: return "none"; // Default
        }
    }
});