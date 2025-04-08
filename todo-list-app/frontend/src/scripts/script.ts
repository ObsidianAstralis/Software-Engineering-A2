interface Task {
    id: number;
    newTask: string;
    category: string;
    priority: number;
    dueDate?: Date;
    completed: boolean;
}

class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1;

    constructor() {
        this.loadTasks();
        this.renderTasks(); // Render tasks on page load
    }

    addTask(newTask: string, category: string, priority: number, dueDate?: Date): void {
        const task: Task = {
            id: this.nextId++,
            newTask,
            category,
            priority,
            dueDate,
            completed: false,
        };
        this.tasks.push(task);
        this.saveTasks();
        this.renderTasks(); // Update the DOM
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    completeTask(id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
            this.saveTasks();
            this.renderTasks(); // Update the DOM
        }
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.renderTasks(); // Update the DOM
    }

    private saveTasks(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    private loadTasks(): void {
        const tasksJson = localStorage.getItem('tasks');
        if (tasksJson) {
            this.tasks = JSON.parse(tasksJson);
            this.nextId = Math.max(...this.tasks.map(task => task.id)) + 1;
        }
    }

    renderTasks(): void {
        const taskList = document.querySelector('.list .content') as HTMLElement;
        taskList.innerHTML = ''; // Clear the current task list

        this.tasks.forEach((task) => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <p><strong>Task:</strong> ${task.newTask}</p>
                <p><strong>Category:</strong> ${task.category}</p>
                <p><strong>Priority:</strong> ${task.priority}</p>
                <p><strong>Due Date:</strong> ${task.dueDate ? task.dueDate.toDateString() : 'No due date'}</p>
                <p><strong>Completed:</strong> ${task.completed ? 'Yes' : 'No'}</p>
            `;
            taskList.appendChild(taskItem);
        });
    }
}

// Initialize TaskManager
const taskManager = new TaskManager();

// Handle form submission
const form = document.querySelector('.form-layout') as HTMLFormElement;
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const newTaskInput = document.getElementById('new-task') as HTMLTextAreaElement;
    const categoryInput = document.getElementById('category') as HTMLSelectElement;
    const priorityInput = document.getElementById('priority') as HTMLSelectElement;
    const dueDateInput = document.getElementById('dueDate') as HTMLInputElement;

    const newTask = newTaskInput.value.trim();
    const category = categoryInput.value;
    const priority = parseInt(priorityInput.value, 10);
    const dueDate = dueDateInput.value ? new Date(dueDateInput.value) : undefined;

    // Validate inputs
    if (!newTask || category === 'none' || isNaN(priority)) {
        alert('Please fill out all required fields.');
        return;
    }

    // Add the new task
    taskManager.addTask(newTask, category, priority, dueDate);

    // Clear the form
    form.reset();
});