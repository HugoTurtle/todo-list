import { Task } from "./task";

export class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
    
    displayTasks() {
        for(const task of this.tasks) {
            task.displayTask();
        }
    }
}