import { Task } from "./task";
import {format, isAfter, isEqual} from "date-fns";

export class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 0;
        this.today = format(new Date(), 'MM/dd/yyyy'); 
    }

    sortTasks(state) {
        switch(state) {
            case 'Inbox': 
                return this.getTasks();
            case 'Important':
                return this.getImportantTasks();
            case 'Today':
                return this.getCurrentDateTasks();
            case 'Upcoming': 
                return this.getFutureTasks();
            default: 
                return this.getUserProjectTasks(state); 
        }
    }

    createTask(title, description, priorityLevel, dueDate, userProject) {
        const task = new Task(title, description, priorityLevel, dueDate, userProject, this.nextId++);
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
    findTaskById(id) {
        return this.tasks.find(task => task.getID() === id);
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
            'low' : 0,
            'medium' : 1,
            'high' : 2,
        }
        return this.tasks.toSorted((a,b) => {
            return priorityMap[b.getPriorityLevel()] - priorityMap[a.getPriorityLevel()];
        })
    }
    loadTasksFromStorage(taskObjects) {
        this.tasks = taskObjects.map(obj => Task.fromJSON(obj));

        const maxId = this.tasks.reduce((max, task) => {
            return task.getID() > max ? task.getID() : max;
        }, -1);

        this.nextId = maxId + 1;
    }
}