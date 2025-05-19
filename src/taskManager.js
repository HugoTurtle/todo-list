import { Task } from "./task";

export class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 0;
    }
    
    createTask(title, description, priorityLevel, dueDate) {
        return new Task(title, description, priorityLevel, dueDate, this.nextId++);
    }

    addTask(task) {
        this.tasks.push(task);
    }

    displayTasks() {
        for(const task of this.tasks) {
            console.log(task.displayTask());
        }
    }
}