import { Task } from "./task";
import {format, isAfter, isEqual} from "date-fns";

export class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 0;
        this.today = format(new Date(), 'MM/dd/yyyy'); 
    }
    
    createTask(title, description, priorityLevel, dueDate) {
        const task = new Task(title, description, priorityLevel, dueDate, this.nextId++);
        this.addTask(task);
        return task;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    displayTasks() {
        for(const task of this.tasks) {
            console.log(task.displayTask());
        }
    }

    getTasks() {
        return this.tasks;
    }

    getCurrentDateTasks() {
        return this.tasks.filter(task => isEqual(this.today, task.getDate()));
    }

    getFutureTasks() {
        return this.tasks.filter(task => isAfter(task.getDate(), this.today));
    }

    getUserProjectTasks(userProject) {
        return this.tasks.filter(task => task.getProject() === userProject);
    }

    getImportantTasks() {
        const priorityMap = {
            'Low' : 0,
            'Medium' : 1,
            'High' : 2,
        }
        return this.tasks.toSorted((a,b) => {
            priorityMap[a.getPriorityLevel()] - priorityMap[b.getPriorityLevel()];
        })
    }
}